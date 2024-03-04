document.addEventListener("DOMContentLoaded", function() {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get product details
            const productCard = button.closest(".product");
            const productName = productCard.querySelector("h2").textContent;
            const productPrice = parseFloat(productCard.querySelector("p").textContent.slice(1));

            // Display alert with product details
            alert(`Added ${productName} to cart. Price: $${productPrice.toFixed(2)}`);
        });
    });
});
