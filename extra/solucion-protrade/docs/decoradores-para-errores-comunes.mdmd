# Method not allowed para vistas de GET

```py
def require_get_method(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        if request.method != 'GET':
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        return func(*args, **kwargs)
    return wrapper
```

# Method not allowed para vistas de POST

```py
def require_get_method(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        if request.method != 'POST':
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        return func(*args, **kwargs)
    return wrapper
```

# Invalid JSON Body

```py
def validate_json_body(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        try:
            json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON body'}, status=400)
        return func(*args, **kwargs)
    return wrapper
```

# Missing required fields

> [!WARNING]
> Tengan cuidado con copiar y pegar este. Es algo avanzado y no muy aplicado el usar decoradores con parámetros y si muchos lo usan pueden hacer al Sergio sospechar. Intenten cambiar lo mayor posible los nombres o aplicarlo directamente en la vista como explico en la parte 3 de la guía.

```py
def get_json_fields(*fields: str):
    def decorator(func):
        def wrapper(*args, **kwargs):
            request = args[0]
            json_body = json.loads(request.body)
            for field in fields:
                if field not in json_body.keys():
                    return JsonResponse({'error': 'Missing required fields'}, status=400)
            return func(*args, **kwargs)
        return wrapper
    return decorator
```

# Invalid y Unregistered Authentication Token

> [!WARNING]
> Esto lo mismo que lo anterior; un poco avanzado y raro si lo copian y pegan muchos. Intenten cambiar los nombres o, algo más seguro, dividiendo el decorador en 2 decoradores independientes. Más adelante doy la otra versión.

## Versión de 1 decorador

```py
def require_token(func):
    def wrapper(*args, **kwargs):
        KEY_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:\-[a-fA-F\d]{4}){3}\-[a-fA-F\d]{12})$'
        request = args[0]
        auth_header = request.headers.get('Authorization')
        if token_key := re.match(KEY_PATTERN, auth_header):
            try:
                Token.objects.get(key=token_key[1])
            except Token.DoesNotExist:
                return JsonResponse({'error': 'Unregistered authentication token'}, status=401)
        else:
            return JsonResponse({'error': 'Invalid authentication token'}, status=400)
        return func(*args, **kwargs)
    return wrapper
```

## Versión de 2 decoradores

```py
def validate_token(func):
    def wrapper(*args, **kwargs):
        KEY_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:\-[a-fA-F\d]{4}){3}\-[a-fA-F\d]{12})$'
        request = args[0]
        auth_header = request.headers.get('Authorization')
        if not token := re.match(KEY_PATTERN, auth_header):
            return JsonResponse({'error': 'Invalid authentication token'}, status=400)
        return func(*args, **kwargs)
    return wrapper

def check_token_is_registered(func):
    def wrapper(*args, **kwargs):
        KEY_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:\-[a-fA-F\d]{4}){3}\-[a-fA-F\d]{12})$'
        request = args[0]
        auth_header = request.headers.get('Authorization')
        if token_key := re.match(KEY_PATTERN, auth_header):
            try:
                Token.objects.get(key=token_key[1])
            except Token.DoesNotExist:
                return JsonResponse({'error': 'Unregistered authentication token'}, status=401)
        return func(*args, **kwargs)
    return wrapper
```

> [!IMPORTANT]
> Debe aplicarse en orden en las vistas, de arriba a abajo, si se usa esta versión de dos decoradores. Como en el siguiente ejemplo...

```py
@validate_token
@check_token_is_registered
def add_player(request):
  ...
```
