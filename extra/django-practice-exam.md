# Examen de mentirilla pa que algún pelado practique

## Aplicaciones

|||
|--------|------------------------|
|**Products**|Gestión de los productos|
|**Categories**|Gestión de las categorías|
|**Users**|Gestión de tokens

## Modelos

**products.Product**
|Campo|Tipo
|-----|-----
|name*|str
|category*|FK -> Category
|price*|float

**categories.Category**
|Campo|Tipo
|-----|-----
|name*|str
|slug*|slug

**users.Token**
|Campo|Tipo
|-----|-----
|user*|FK -> User (el de Django)
|key*|uuid4 (default=uuid.uuid4)
|created_at*|datetime

## Urls

1. api/products => Lista todos los productos
2. api/products/<product_pk> => Muestra detalles de un producto
3. api/products/add => Añade un producto
4. api/categories/<category_slug> => Muestra todos los productos de una categoría

## Vistas

1. Listar todos los productos = products.views.product_list
2. Detalles de un producto = products.views.product_detail
3. Añadir un producto = products.views.add_product
4. Muestra productos de una categoría = categories.views.category_product_list

## Notas

1. Todas las vistas que dan información, que son de lectura, se hacen en peticiones GET mientras que las que son de modificar o añadir información son peticiones POST: Si se intenta usar una vista con otro tipo de petición, hay que devolver "Method not allowed" con status=400.
2. La vista de detalles debe devolver un error "Product not found" con status=405 si el producto no está
3. Para añadir un producto hace falta indicarle la categoría. Esta se pasa en el json body de request. Debes obtener el category_slug, buscarlo en el modelo Category y asignarlo al nuevo producto en el Product.objects.create().
4. Para las peticiones POST como la de añadir un producto, por lo general se pasa un token por el json header porque son acciones que solo pueden hacer las personas autenticadas. Este se puede obtener a través del request.headers.
