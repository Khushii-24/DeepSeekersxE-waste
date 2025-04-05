document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.price;
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(li);
        });

        totalPriceElement.textContent = total;
    }

    function addToCart(itemName, itemPrice) {
        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(name, price);
        });
    });

    document.getElementById("checkout").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            alert("Proceeding to checkout...");
            cart.length = 0;
            updateCart();
        }
    });
});

document.getElementById("view-more-btn").addEventListener("click", () => {
    alert("Loading more products... (Feature Coming Soon)");
});



document.addEventListener("DOMContentLoaded", () => {
    const sellFormContainer = document.getElementById("sell-form-container");
    const sellDeviceBtn = document.getElementById("sell-device-btn");
    const closeFormBtn = document.getElementById("close-form");

    sellDeviceBtn.addEventListener("click", () => {
        sellFormContainer.style.display = "block";
    });

    closeFormBtn.addEventListener("click", () => {
        sellFormContainer.style.display = "none";
    });

    document.getElementById("sell-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your device has been listed!");
        sellFormContainer.style.display = "none";
    });
});
