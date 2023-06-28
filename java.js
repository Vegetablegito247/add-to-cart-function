// const addToCartButtons = document.querySelectorAll('.add-cart');

// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const product = button.parentElement;
//     const productTitle = product.querySelector('h3').textContent;
//     const productPrice = parseInt(product.querySelector('span').textContent.slice(1));
//     const cartInfo = document.querySelector('.cart-info');
//     let cartQuantity = parseInt(cartInfo.querySelector('span').textContent);

//     // Update cart quantity and display it in the navigation bar
//     cartQuantity++;
//     cartInfo.querySelector('span').textContent = cartQuantity;

//     // Alert the user that the item has been added to the cart
//     alert(`${productTitle} added to cart`);

//     // Save the item's information to the local storage
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push({ title: productTitle, price: productPrice });
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   });
// });


const cartInfo = document.querySelector(".cart-info span");
const cartSideBarContainer = document.querySelector(".cart-side-bar");
const products = document.querySelectorAll(".products-item");
let total = 0;

products.forEach((product) => {
  const addToCartBtn = product.querySelector(".add-cart");
  const productTitle = product.querySelector("h3").innerText;
  const productPrice = parseInt(product.querySelector("span").innerText.slice(1));
  
  addToCartBtn.addEventListener("click", () => {
    total += productPrice;
    const cartDisplay = document.createElement("div");
    cartDisplay.classList.add("cart-display");
    cartDisplay.innerHTML = `
      <img src="${product.querySelector("img").getAttribute("src")}" alt="">
      <div class="cart-side-id">
          <h5>${productTitle}</h5>
          <span>N${productPrice}</span>
      </div>
    `;
    cartSideBarContainer.insertBefore(cartDisplay, cartSideBarContainer.querySelector(".total"));
    cartInfo.innerText = parseInt(cartInfo.innerText) + 1;
    cartSideBarContainer.querySelector(".total span").innerText = `N${total}`;
    alert(`${productTitle} added to cart`);
  });
});


let close = document.querySelector('.fa-xmark');
close.addEventListener('click', () => {
  cartSideBarContainer.style.display = 'none';
});

let openSideBar = document.querySelector('.cart-info');
openSideBar.addEventListener('click', () => {
  cartSideBarContainer.style.display = 'block';
});