$(document).ready(function () {
    let productosSeleccionados = {};
    const subCategories = {
        'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
        'primer-plato': ['Sopa', 'Ensalada'],
        'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
        'postres': ['Dulces', 'Frutas']
    };

    $('.menu-btn').click(function () {
        const category = $(this).data('category');
        loadSubcategories(category);
    });

    function loadSubcategories(category) {
        $('.sub-menu').empty();
        $('.product-list').empty();

        subCategories[category].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });

        $('.sub-menu-btn').click(function () {
            const subCategory = $(this).data('subcategory');
            loadProducts(subCategory);
        });
    }

    function loadProducts(subCategory) {
        $('.product-list').empty();

        $.getJSON('productos.json', function (data) {
            const products = data[subCategory];
            products.forEach(product => {
                $('.product-list').append(`
                    <div class="producto" data-id="${product.id}">
                        <span>${product.nombre}</span>
                        <div class="product_qty">
                            <button class="btn-decrementar">-</button>
                            <span class="cantidad">0</span>
                            <button class="btn-incrementar">+</button>
                        </div>
                    </div>
                `);
            });

            // $('.btn-incrementar').click(function () {
            //     const cantidadSpan = $(this).siblings('.cantidad');
            //     let cantidad = parseInt(cantidadSpan.text());
            //     cantidad++;
            //     cantidadSpan.text(cantidad);
            //     actualizarProductosSeleccionados($(this).closest('.producto'), cantidad);
            // });

            // $('.btn-decrementar').click(function () {
            //     const cantidadSpan = $(this).siblings('.cantidad');
            //     let cantidad = parseInt(cantidadSpan.text());
            //     if (cantidad > 0) {
            //         cantidad--;
            //         cantidadSpan.text(cantidad);
            //         actualizarProductosSeleccionados($(this).closest('.producto'), cantidad);
            //     }
            // });
        });
    }

    function actualizarProductosSeleccionados(productoDiv, cantidad) {
        const productoId = productoDiv.data('id');
        const productoNombre = productoDiv.find('span').first().text();

        if (cantidad > 0) {
            productosSeleccionados[productoId] = { nombre: productoNombre, cantidad: cantidad };
        } else {
            delete productosSeleccionados[productoId];
        }

        mostrarProductosSeleccionados();
    }

    function mostrarProductosSeleccionados() {
        $('#productos-seleccionados').empty();
        $.each(productosSeleccionados, function (id, producto) {
            $('#productos-seleccionados').append(`<li>${producto.nombre}: ${producto.cantidad}</li>`);
        });
    }

    $('#enviarComanda').click(function () {
        if (Object.keys(productosSeleccionados).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            productosSeleccionados = {};
            mostrarProductosSeleccionados();
            $('.product-list').find('.cantidad').text(0);
        } else {
            alert('No hay productos seleccionados para enviar.');
        }
    });
});
        