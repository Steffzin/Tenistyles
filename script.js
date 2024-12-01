let cart = [];
let totalAmount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("cartModal");
    const openModalButton = document.getElementById("openalMod");
    const closeModalButton = document.getElementsByClassName("close")[0];

    // Abre o modal
    openModalButton.onclick = function() {
        modal.style.display = "block";
    }

    // Fecha o modal
    closeModalButton.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

// Função para adicionar produtos ao carrinho
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

// Função para remover produtos do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Atualiza o carrinho e o total
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    
    // Limpa a lista antes de atualizar
    cartItems.innerHTML = '';
    
    // Calcula o total e atualiza a lista de produtos
    totalAmount = 0;
    cart.forEach((item, index) => {
        totalAmount += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} `;
        
        // Cria o botão de remover
        const removeButton = document.createElement("button");
        removeButton.textContent = "−";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    // Atualiza o total no modal
    totalPrice.textContent = totalAmount.toFixed(2);
}


$(document).ready(function(){
    $('.carousel-container').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false
    });
})