
function openNav() {
document.getElementById("sidenav").style.width = "200px";

document.getElementById("main").style.marginLeft = "200px";

}
function closeNav() {

document.getElementById("sidenav").style.width = "0";

document.getElementById("main").style.marginLeft = "0";

    
}

function shopnow() {

document.getElementById("shop").style.display="block";

}

function closeForm() {
document.getElementById("shop").style.display="none";

}

window.onclick=function(event) {
   
    if (event.target===modal) {
        modal.style.display="none";
    }
}

let cart=[];

function addToCart(productName,price) {
    cart.push({ name:productName, price:price});
    alert(productName + " added to cart!");
    updateCartCount();
    updateCartDropdown();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent=cart.length;

}

function updateCartDropdown() {
    const cartItems = document.getElementById("cart-items");
    if (cart.length===0) {
        cartItems.innerHTML = "<p>Cart is empty</p>";
        document.getElementById("cart-total").textContent="";

    }else {
        cartItems.innerHTML = cart.map(item => `<p>${item.name} - Rs.${item.price}</p>`).join("");
        const total = cart.reduce((sum,item) => sum + item.price,0);
        document.getElementById("cart-total").textContent = `Total: Rs.${total}`; 
    }
    }

function toggleCartDropdown() {
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block" ;
}

function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    alert("Thank you for your order!");
    cart = [];
    updateCartCount();
    updateCartDropdown();
    toggleCartDropdown(); // close after checkout
  }
  
  // Optional: Hide dropdown if clicked outside
  window.onclick = function(event) {
    const modal = document.getElementById("shop");
    const dropdown = document.getElementById("cart-dropdown");

    if (event.target=== modal){

         modal.style.display = "none";
    }

    if(!event.target.closest('#cart-icon')&&
        !event.target.closest('.fa-cart-shopping')){
        dropdown.style.display="none";
    }


  };
  