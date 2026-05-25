const phoneNumber = "212641928720";

const menuItems = [
  {id:1, name:"Cheese Bomb", price:59, category:"burgers", img:"cheese-bomb.webp", desc:"Crispy chicken, cheese sauce and mayo."},
  {id:2, name:"Classic Burger", price:59, category:"burgers", img:"classic-burger.webp", desc:"Crispy chicken, lettuce, mayo and special sauce."},
  {id:3, name:"Crisp Duo", price:55, category:"wraps", img:"crisp-duo.webp", desc:"Two crispy wraps packed with chicken."},
  {id:4, name:"Crispy Loaded", price:60, category:"burgers", img:"crispy-loaded.webp", desc:"Loaded crispy chicken burger with cheese."},
  {id:5, name:"Crispy Wrap", price:49, category:"wraps", img:"crispy-wrap.webp", desc:"Crispy chicken, lettuce, cheese and mayo."},
  {id:6, name:"Double Smashed", price:69, category:"burgers", img:"double-smashed.webp", desc:"Double smashed beef, pickles and cheese sauce."},
  {id:7, name:"Happy Duo", price:80, category:"meals", img:"happy-duo.webp", desc:"Two burgers, fries and drinks."},
  {id:8, name:"Italian Bowl", price:55, category:"meals", img:"italian-bowl.webp", desc:"Chicken bowl with Italian style sauce."},
  {id:9, name:"Italian Crispy", price:55, category:"wraps", img:"italian-crispy.webp", desc:"Crispy chicken wrap with Italian flavor."},
  {id:10, name:"Mac Cheese Bowl", price:45, category:"meals", img:"mac-cheese-bowl.webp", desc:"Creamy mac and cheese with crispy chicken."},
  {id:11, name:"Mac Cheese Crispy", price:48, category:"burgers", img:"mac-cheese-crispy.webp", desc:"Crispy chicken with mac cheese."},
  {id:12, name:"Meat Loaded", price:70, category:"meals", img:"meat-loaded.webp", desc:"Loaded meat fries and special sauce."},
  {id:13, name:"SFC Duo", price:89, category:"boxes", img:"sfc-duo.webp", desc:"Burger, crispy chicken pieces, fries and drink."},
  {id:14, name:"Wrap Duo", price:89, category:"boxes", img:"wrap-duo.webp", desc:"Two wraps, fries and drink."},
  {id:15, name:"3 Pcs Strips", price:39, category:"boxes", img:"3-strips.webp", desc:"Three crispy chicken strips."},
  {id:16, name:"6 Pcs Strips", price:69, category:"boxes", img:"6-strips.webp", desc:"Six crispy chicken strips with sauce."},
  {id:17, name:"10 Pcs Strips", price:99, category:"boxes", img:"10-strips.webp", desc:"Ten crispy chicken strips for sharing."},
  {id:18, name:"Smashed Wrap", price:49, category:"wraps", img:"smashed-wrap.webp", desc:"Wrap with smashed beef and special sauce."},
  {id:19, name:"The Classic", price:59, category:"burgers", img:"the-classic.webp", desc:"Classic SFC burger with signature taste."},
  {id:20, name:"The Crispy Tacos", price:49, category:"wraps", img:"the-crispy-tacos.webp", desc:"Crispy chicken tacos with sauce."},
  {id:21, name:"The Meat Tacos", price:55, category:"wraps", img:"the-meat-tacos.webp", desc:"Meat tacos with cheese and sauce."},
  {id:22, name:"The Mixt", price:65, category:"meals", img:"the-mixt.webp", desc:"Mixed chicken and meat special meal."},
  {id:23, name:"The Special", price:69, category:"burgers", img:"the-special.webp", desc:"Special burger with premium sauce."},
  {id:24, name:"The Spicy", price:59, category:"burgers", img:"the-spicy.webp", desc:"Spicy crispy chicken burger."},
  {id:25, name:"Triple Smashed", price:89, category:"burgers", img:"triple-smashed.webp", desc:"Triple smashed burger for big hunger."},
  {id:26, name:"Sauce Bomb", price:59, category:"burgers", img:"sauce-bomb.webp", desc:"Saucy chicken burger with bold flavor."},
  {id:27, name:"French Fries", price:19, category:"sides", img:"extra-fries.webp", desc:"Crispy golden French fries."},
  {id:28, name:"Extra Sauce", price:8, category:"sides", img:"extra-sauce.webp", desc:"Extra SFC special sauce."},
  {id:29, name:"Drinks", price:10, category:"drinks", img:"extra-cola.webp", desc:"Coca-Cola, Fanta, Sprite or water."}
];

let cart = [];

const menuGrid = document.getElementById("menuGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function renderMenu(category = "all"){
  const filtered = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  menuGrid.innerHTML = filtered.map(item => `
    <article class="card">
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-bottom">
          <span class="price">${item.price} DHS</span>
          <button class="add-btn" onclick="addToCart(${item.id})">+ Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id){
  const item = menuItems.find(product => product.id === id);
  const existing = cart.find(product => product.id === id);

  if(existing){
    existing.qty += 1;
  } else {
    cart.push({...item, qty:1});
  }

  renderCart();
}

function increaseQty(id){
  const item = cart.find(product => product.id === id);
  if(item){
    item.qty += 1;
    renderCart();
  }
}

function decreaseQty(id){
  const item = cart.find(product => product.id === id);
  if(!item) return;

  item.qty -= 1;

  if(item.qty <= 0){
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
}

function removeItem(id){
  cart = cart.filter(product => product.id !== id);
  renderCart();
}

function renderCart(){
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalQty;
  cartTotal.textContent = `${totalPrice} DHS`;

  if(cart.length === 0){
    cartItems.innerHTML = `<p class="empty">No items selected</p>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-row">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <div class="qty">
          <button onclick="decreaseQty(${item.id})">-</button>
          <span>${item.qty}</span>
          <button onclick="increaseQty(${item.id})">+</button>
        </div>
      </div>
      <div>
        <button class="remove" onclick="removeItem(${item.id})">×</button>
        <strong>${item.price * item.qty} DHS</strong>
      </div>
    </div>
  `).join("");
}

function clearCart(){
  cart = [];
  renderCart();
}

function checkoutWhatsApp(){
  if(cart.length === 0){
    alert("Please add items to your order first.");
    return;
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  let message = "Hello SFC Fried Chicken, I would like to order:%0A%0A";

  cart.forEach(item => {
    message += `• ${item.name} x${item.qty} = ${item.price * item.qty} DHS%0A`;
  });

  message += `%0ATotal: ${totalPrice} DHS%0A%0AName:%0AAddress:%0ANote:`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

renderMenu();
renderCart();
