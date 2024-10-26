$(document).ready(function () {
    let selectedProducts = {};
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
                            <button class="btn-decrease">-</button>
                            <span class="quantity">0</span>
                            <button class="btn-increase">+</button>
                        </div>
                    </div>
                `);
            });

            $('.btn-increase').click(function () {
                const quantitySpan = $(this).siblings('.quantity');
                let quantity = parseInt(quantitySpan.text());
                quantity++;
                quantitySpan.text(quantity);
                updateSelectedProducts($(this).closest('.producto'), quantity);
            });

            $('.btn-decrease').click(function () {
                const quantitySpan = $(this).siblings('.quantity');
                let quantity = parseInt(quantitySpan.text());
                if (quantity > 0) {
                    quantity--;
                    quantitySpan.text(quantity);
                    updateSelectedProducts($(this).closest('.producto'), quantity);
                }
            });
        });
    }

    function updateSelectedProducts(productDiv, quantity) {
        const productId = productDiv.data('id');
        const productName = productDiv.find('span').first().text();
        if (quantity > 0) {
            selectedProducts[productId] = { nombre: productName, cantidad: quantity };
        } else {
            delete selectedProducts[productId];
        }
        showselectedProducts();
    }

    function showselectedProducts() {
        $('#productos-seleccionados').empty();
        $.each(selectedProducts, function (id, producto) {
            $('#productos-seleccionados').append(`<li>${producto.nombre}: ${producto.cantidad}</li>`);
        });
    }

    $('#enviarComanda').click(function () {
        if (Object.keys(selectedProducts).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            selectedProducts = {};
            showselectedProducts();
            $('.product-list').find('.cantidad').text(0);
        } else {
            alert('No hay productos seleccionados para enviar.');
        }
    });
});