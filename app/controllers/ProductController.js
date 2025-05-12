'use strict';

merchantApp.controller('ProductController', ['$scope', function($scope) {
    // Main product data
    $scope.product = {
        name: 'Tênis de Corrida Premium SAVE1 X500',
        sku: 'TEN-X500-42-BLK',
        mpn: 'X500-42-BLK',
        gtin: '7898542516748',
        brand: 'SAVE1',
        rating: 4.8,
        reviewCount: 157,
        price: '599,90',
        description: 'Tênis de corrida profissional com tecnologia de amortecimento avançada, ideal para longas distâncias e treinos intensos. Material respirável, solado resistente e design ergonômico.',
        availability: 'InStock',
        condition: 'new',
        images: [
            'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000',
            'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000',
            'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000',
            'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000'
        ],
        sizes: ['38', '39', '40', '41', '42', '43', '44'],
        colors: ['Azul', 'Preto', 'Cinza']
    };
    
    // Related products
    $scope.relatedProducts = [
        {
            name: 'Tênis de Corrida SAVE1 X300',
            price: '499,90',
            rating: 4.5,
            image: 'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000'
        },
        {
            name: 'Tênis SAVE1 Trail Runner',
            price: '549,90',
            rating: 4.6,
            image: 'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000'
        },
        {
            name: 'Meia de Corrida Pro Performance',
            price: '49,90',
            rating: 4.9,
            image: 'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000'
        },
        {
            name: 'Camiseta Dry-fit SAVE1',
            price: '129,90',
            rating: 4.7,
            image: 'https://images-ext-1.discordapp.net/external/JAE-H2VNHTRyV5_42OsW9vVSEJGsoh4iO_-WzeIfelM/https/cdn.ace1.com.br/product/shoes/sneakers/JQ5143/base/JQ5143.png?format=webp&quality=lossless&width=2000&height=2000'
        }
    ];
    
    // Initial state
    $scope.selectedImage = $scope.product.images[0];
    $scope.selectedSize = $scope.product.sizes[4]; // Size 42 selected by default
    $scope.selectedColor = $scope.product.colors[0]; // Blue selected by default
    $scope.quantity = 1;
    
    // Helper function to display stars
    $scope.getStars = function(rating) {
        return new Array(Math.floor(rating));
    };
    
    // Image selection
    $scope.setSelectedImage = function(image) {
        $scope.selectedImage = image;
    };
    
    // Size selection
    $scope.setSelectedSize = function(size) {
        $scope.selectedSize = size;
    };
    
    // Color selection
    $scope.setSelectedColor = function(color) {
        $scope.selectedColor = color;
    };
    
    // Quantity management
    $scope.increaseQuantity = function() {
        $scope.quantity += 1;
    };
    
    $scope.decreaseQuantity = function() {
        if ($scope.quantity > 1) {
            $scope.quantity -= 1;
        }
    };
    
    // Add to cart functionality
    $scope.addToCart = function() {
        alert('Produto adicionado ao carrinho: ' + 
              $scope.quantity + ' ' + 
              $scope.product.name + ' - ' + 
              'Tamanho: ' + $scope.selectedSize + ', ' +
              'Cor: ' + $scope.selectedColor);
    };
}]); 