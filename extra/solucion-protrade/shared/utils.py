import json
import re

from django.http import JsonResponse

from users.models import Token


def require_method(method: str):
    def decorator(func):
        def wrapper(*args, **kwargs):
            request = args[0]
            if request.method != method:
                print(request.method)
                print(method)
                return JsonResponse({'error': 'Method not allowed'}, status=405)
            return func(*args, **kwargs)

        return wrapper

    return decorator


def require_token(func):
    def wrapper(*args, **kwargs):
        TOKEN_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:\-[a-fA-F\d]{4}){3}\-[a-fA-F\d]{12})$'
        request = args[0]
        auth_header = request.headers.get('Authorization')
        if token := re.match(TOKEN_PATTERN, auth_header):
            try:
                request.token = Token.objects.get(key=token[1])
            except Token.DoesNotExist:
                return JsonResponse({'error': 'Unregistered authentication token'}, status=401)
        else:
            return JsonResponse({'error': 'Invalid authentication token'}, status=400)
        return func(*args, **kwargs)

    return wrapper


def validate_json_body(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        try:
            request.data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON body'}, status=400)
        return func(*args, **kwargs)

    return wrapper


def get_json_fields(*fields: str):
    def decorator(func):
        def wrapper(*args, **kwargs):
            request = args[0]
            body_fields = request.data.keys()
            for field in fields:
                if field not in body_fields:
                    return JsonResponse({'error': 'Missing required fields'}, status=400)
            return func(*args, **kwargs)

        return wrapper

    return decorator
