$(document).ready(function () {
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
                        <div>${product.nombre}</div>
                        <div class="product_qty">
                            <button class="btn-decrementar">-</button>
                            <span class="cantidad">0</span>
                            <button class="btn-incrementar">+</button>
                        </div>
                    </div>
                `);
            });
        });
    }
});
        