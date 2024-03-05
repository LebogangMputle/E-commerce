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


 // Get the button element by its id
 var button = document.getElementById("redirectButton");

 // Add an event listener to the button for the click event
 button.addEventListener("click", function() {
   // Redirect the user to the specified URL
   window.location.href = "https://www.yep.co.za/biz/store/phokeng-health-centre/402849";
 });