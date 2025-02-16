import json
import re

from django.http import JsonResponse

from users.models import Token

def require_get_method(func):
    def wrapper(*args, **kwargs):
        # 1. Sacamos el "request" de la vista desde los args
        request = args[0]
        # 2. Si el método del request es distinto de GET...
        if request.method != 'GET':
            # 3. Devolvemos el error que Sergio exige.
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        # 4. Si el método es GET, no entrará por el IF y ejecutará el resto de la vista de forma normal.
        return func(*args, **kwargs)
    return wrapper

def require_post_method(func):
    def wrapper(*args, **kwargs):
        # 1. Sacamos el "request" de la vista desde los args
        request = args[0]
        # 2. Si el método del request es distinto de POST...
        if request.method != 'POST':
            # 3. Devolvemos el error que Sergio exige.
            return JsonResponse({'error': 'Method not allowed'}, status=405)
        # 4. Si el método es POST, no entrará por el IF y ejecutará el resto de la vista de forma normal.
        return func(*args, **kwargs)
    return wrapper

def validate_json_body(func):
    def wrapper(*args, **kwargs):
        # 1. Cogemos el request de la vista
        request = args[0]
        try:
            # 2. Cargamos los datos de la petición
            json.loads(request.body)
            # 3. Si los datos están mal construidos, arrojará el error JSONDecodeError.
        except json.JSONDecodeError:
            # 4. Si el error es arrojado, se devuelve el resultado que Sergio exige.
            return JsonResponse({'error': 'Invalid JSON body'}, status=400)
        # 5. Si está bien armado, pasará del bloque except y seguirá la vista con su funcionamiento normal
        return func(*args, **kwargs)
    return wrapper

def get_json_fields(*fields: str):
    def decorator(func):
        def wrapper(*args, **kwargs):
            # 2. Como siempre, cogemos el request de la vista para cargar los datos.
            request = args[0]
            # 3. Cargamos y guardamos los datos.
            json_body = json.loads(request.body)
            # 4. Recorremos LOS CAMPOS QUE NECESITAMOS y preguntamos...
            for field in fields:
                # 5. ¿Este campo que necesito NO ESTÁ en los campos que me estás pasando?
                if field not in json_body.keys():
                    # 6. Si no está el campo que necesitamos, ya nuestra vista no funcionará, por lo tanto arrojamos el error.
                    return JsonResponse({'error': 'Missing required fields'}, status=400)
            # 7. Si después de recorrer todos los campos que necesitamos no falta ninguno, sigue la vista con su funcionamiento normal.
            return func(*args, **kwargs)
        return wrapper
    return decorator

def require_token(func):
    def wrapper(*args, **kwargs):
        # 1. Creamos el patrón del Token para comprobar que sea válido
        KEY_PATTERN = r'^Bearer ([a-fA-F\d]{8}(?:\-[a-fA-F\d]{4}){3}\-[a-fA-F\d]{12})$'
        # 2. Obtenemos el request de la vista
        request = args[0]
        # 3. Del request, obtenemos el header de Authorization (donde se encuentra el token enviado)
        auth_header = request.headers.get('Authorization')
        # 4. Usando expresiones regular, comprobamos si está el token en el header, comprobando que sea válido.
        # Si existe y es válido, EL MATCH se guardará en la variable token_key y entrará en el IF.
        if token_key := re.match(KEY_PATTERN, auth_header):
            try:
                # 5. Intenta obtener el token, buscando en el modelo Token a través de la key (está en la posición 1 del MATCH)
                Token.objects.get(key=token_key[1])
                # 6. Si no consigue el token con la key enviada, es porque no existe en la BBDD
            except Token.DoesNotExist:
                # 7. En ese caso se arroja el error
                return JsonResponse({'error': 'Unregistered authentication token'}, status=401)
        else:
            # Si no entra en el IF, es porque no cumple el formato del patrón, en ese caso, arrojamos el error de token inválido.
            return JsonResponse({'error': 'Invalid authentication token'}, status=400)
        # Si todo va bien con el token, seguirá la vista con su funcionamiento normal.
        return func(*args, **kwargs)
    return wrapper