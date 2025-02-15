# Explicación del examen - Parte 1

- [Puesta en marcha](#puesta-en-marcha)
- [Aplicaciones](#aplicaciones)
- [Modelos](#modelos)
  - [teams.Team](#teamsteam)
  - [players.Player](#playersplayer)
  - [users.Token](#userstoken)
- [Carga de datos](#carga-de-datos)
- [Serializadores](#serializadores)
  - [PlayerSerializer](#playerserializer)
  - [TeamSerializer](#teamserializer)
- [Interfaz administrativa](#interfaz-administrativa)


## Puesta en marcha

Una chorrada, si no pasas esta parte, espabila.

## Aplicaciones

Un poco lo mismo, solo usar `just startapp` para cada app que el Sergio pida.

1. `just startapp shared`
2. `just startapp players`
3. `just startapp teams`
4. `just startapp users`

## Modelos

Ya aqui empieza la vaina seria, voy a intentar explicar las cosas donde más problemas puede haber.

> [!IMPORTANT]
> **Recomendación personal:** ve creando uno por uno los modelos y cada vez que termines uno, haz un `just check, just makemigrations, just migrate`, en vez de hacer todos los modelos y migrar al final. Esto porque, si te sale un error en el primer modelo, te será más fácil identificar dónde está el problema.

### teams.Team

1. **name: str**: según Sergio, debe ser único (lleva `unique=True`) y obligatorio, y como es un nombre (un texto corto) es un CharField, por lo que sería.

```py
name = models.CharField(max_length=255, unique=True)
```

2. **slug: str**: debe ser único (`unique=True`).

```py
slug = models.SlugField(max_length=255, unique=True)
```

3. **league: enum**: Un *enum* puede ser de dos tipos: de texto o de numeros. En este caso, los valores son letras (L, P, C y B), por lo tanto, las opciones posibles de `League` son:

```py
class League(models.TextChoices):
    LALIGA = 'L'
    PREMIER = 'P'
    CALCIO = 'C'
    BUNDESLIGA = 'B'
```

Y para crear el campo, debemos indicar el tipo (`CharField` o `IntegerField`) y que las opciones posibles son `League`. Por lo tanto al ser las opciones de texto, sería...

```py
league = models.CharField(max_length=1, choices=League)
```

Hay que indicar que `max_length` del campo es 1 porque las opciones son solo letras. Si fuesen 3 letras por ejemplo, el `max_length` sería 3.

4. **shield: image**: ya nos encontramos con un campo de imágenes, por lo tanto antes de seguir debemos asegurarnos de configurar en el `main/settings.py` lo necesario para que la carpeta `media/` esté configurada. Eso se hace pegando en `settings.py`:

```sh
MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = 'media/'
```

Una vez hecho esto, seguimos creando el campo `shield`. Como Sergio indica que es opcional, debemos añadir `null=True, blank=True` y como tiene un valor por defecto, debemos asignarselo con `default='teams/shields/default.png'`. Esto terminaría en:

```py
shield = models.ImageField(upload_to='teams/shields/', null=True, blank=True, default='teams/shields/default.png')
```

### players.Player

Aqui ya resumiré cosas porque lo expliqué antes.

1. **name: str**: 

```py
name = models.CharField(max_length=250, unique=True)
```

2. **slug: str**:

```py
slug = models.SlugField(max_length=250, unique=True)
```

3. **position: enum**:

Primero indicamos las posiciones posibles:

```py
class Position(models.TextChoices):
    GOALKEEPER = 'G'
    DEFENDER = 'D'
    MIDFIELDER = 'M'
    FORWARD = 'F'
```

Y luego creamos el campo diciendo de dónde se sacan las opciones:

```py
position = models.CharField(choices=Position, max_length=1)
```

4. **birth_date: date**: Una fecha de cumpleaños es eso, una fecha, el cual no lleva horas, por lo que es un `models.DateField` simple:

```py
birth_date = models.DateField()
```

5. **market_value: float**: El Sergio dice que se debe utilizar **DecimalField**, este se usa cuando hablamos de valores de dinero. Para usar el DecimalField, debemos indicar la cantidad de dígitos y los numeros después de la coma decimal. Como Sergio dice "se expresará en millones de euros", estamos hablando de que el valor máximo es `999.999.999,99 €`, por lo tanto son **11 dígitos máximos** y **2 de ellos serán decimales**. Por lo tanto:

```py
market_value = models.DecimalField(max_digits=11, decimal_places=2)
```

6. **photo: image**: lo mismo que con `shield` en el modelo anterior.

```py
photo = models.ImageField(
        null=True, blank=True, upload_to='players/photos', default='players/photos/default.png'
    )
```

7. **team: fk -> Team**: lo que Sergio puso significa básicamente que es una Foreign Key dirigida al modelo Team. También indica que es opcional por lo que lleva `null=True, blank=True`. 
La estructura tiene siempre como atributos:

- El modelo al que se relaciona.
- El related_name para hallar la relación desde el otro lado. El 97% de las ocasiones será el nombre del modelo que estamos trabajando pero en plural. (Porcentaje inventado por mi)
- Cómo funcionará el eliminar la relación, casi siempre será `models.CASCADE` 

Por lo tanto

```py
team = models.ForeignKey('teams.Team', related_name='players', on_delete=models.CASCADE, null=True, blank=True)
```

### users.Token

Este modelo representa los token de autenticación, estos son los usuarios y sus respectivas claves que tienen acceso a realizar acciones con peticiones POST en nuestra API, ¿y qué es esa mondá? básicamente todo lo que implique modificar o crear datos. Por ejemplo, el que quiera añadir un jugador, eliminar uno, modificar algun dato... Eso solo lo puede hacer un usuario que tenga token.

1. **user: o2o -> User**: el `o2o` significa **OneToOne** y el **User** que indica la relación es el User de Django, por lo tanto hay que importar el usuario de Django, que está en la configuración, con `from django.conf import settings` y sacarlo del settings con `settings.AUTH_USER_MODEL`. Hay que tener en cuenta que un `OneToOneField` tiene la misma estructura de una `ForeignKey`

```py
user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='token', on_delete=models.CASCADE)
```

2. **key: UUID**: Primero nos indica que es único (`unique=True`), y con un valor por defecto de `uuid.uuid4()`. Para implementar `uuid4`, debemos importarlo primero con `import uuid`. Finalmente terminaría como:

```py
key = models.UUIDField(unique=True, default=uuid.uuid4())
```

3. **created_at: datetime**: este es un datetime que se pone por defecto cuando se crea (te lo explica el mismo nombre), por lo tanto lleva `auto_now_add=True`.

```py
created_at = models.DateTimeField(auto_now_add=True)
```

## Carga de datos

Si hiciste bien toda esta mondá, al hacer `just load-data` debería funcionar. Si no, revisa bien de principio a fin, poco a poco sin desespero, que si vas por el examen por esta parte aun va quedando tiempo de sobra.

## Serializadores

Aunque esto no está en el pdf del examen, es fundamental hacerlo. Primero debemos crear el serializador base, [copia de la documentación de Sergio](https://mkdocs.aprendepython.es/third-party/webdev/django/api/#serialize-models) y pégalo en `shared/serializers.py`. Una vez hecho, creamos los serializadores de los modelos. En este caso:

> [!NOTE]
> Otra recomendación, cuando esté creando los serializadores, ten los modelos a la mano, porque los campos de los modelos van de la mano con los campos de los serializadores y así se hace más fácil y rápido el proceso.

Lo importante de cada serializador de modelo es que todos tienen la misma estructura, incluso el primer campo que envía: `"id": instance.pk`. Ya el resto cambia dependiendo del modelo.

### PlayerSerializer

```py
class PlayerSerializer(BaseSerializer):
    def serialize_instance(self, instance) -> dict:
        return {
            'id': instance.pk,
            'name': instance.name,
            'slug': instance.slug,
            'position': instance.get_position_display(),
            'birth_date': instance.birth_date.isoformat(),
            'market_value': float(instance.market_value),
            'photo': self.build_url(instance.photo.url),
            'team': TeamSerializer(instance.team, request=self.request).serialize(),
        }
```

Lo que hay que destacar es que:

1. Todos los campos que son **enum**, en vez de devolverlo directamente con, por ejemplo, `instance.position`, debemos devolver la **versión display** o versión completa. Esto se hace con `get_position_display()`. Si el campo es, por ejemplo, `league`, sería `get_league_display()`.
2. Todos los campos de fecha como `DateField` o `DateTimeField`, debe devolverse su versión con formato ISO. Eso se hace añadiendo `.isoformat()`.
3. Todos los campos de `DecimalField` deben convertirse en `float`.
4. Todos los campos de imagenes deben devolver una url. Esta url se debe obtener de la imagen con `instance.image_filed.url` y luego "construirla" con `self.build_url`. En este caso como la ImageField es `photo`, lo que devolvemos es `self.build_url(instance.photo.url)`.
5. Todos los campos de Foreign Key **deben devolver otro serializador usando la función `serialize()`**, el cual debemos importar previamente.

### TeamSerializer

```py
class TeamSerializer(BaseSerializer):
    def serialize_instance(self, instance) -> dict:
        return {
            'id': instance.pk,
            'name': instance.name,
            'slug': instance.slug,
            'league': instance.get_league_display(),
            'shield': self.build_url(instance.shield.url),
        }
```

## Interfaz administrativa

Otra cosa que puedes hacer ya a este punto (y lo recomendable a mi parecer, porque son tests pasados fácil y rápido), es activar los modelos en la interfaz administrativa. Preocupense en activarlo del modo simple, sin meter atributos extras ni nada.

```py
from django.contrib import admin

from .models import YourModel

@admin.register(YourModel)
class YourModelAdmin(admin.ModelAdmin):
    pass
```

Esto sería lo que debería copiarse y pegarse en cada `app/admin.py`, siendo `YourModel` el nombre de tu modelo a registrar. Si lo vas a hacer con el modelo `users.Token`, debemos entrar a `users/admin.py` e insertar:

```py
from django.contrib import admin

from .models import Token

@admin.register(Token)
class TokenAdmin(admin.ModelAdmin):
    pass
```

