const phoneNumber = "212641928720";

const menuItems = [
  {name:"The Classic", price:25, img:"the-classic.webp", desc:"Classic crispy chicken sandwich."},
  {name:"Signature", price:33, img:"signature.webp", desc:"SFC signature crispy sandwich."},
  {name:"The Special", price:33, img:"the-special.webp", desc:"Special crispy chicken burger."},
  {name:"The Spicy", price:26, img:"the-spicy.webp", desc:"Spicy crispy chicken sandwich."},
  {name:"Signature SFC Crispy Sandwich", price:35, img:"signature-sfc-crispy-sandwich.webp", desc:"Long signature SFC crispy sandwich."},
  {name:"Classic Burger", price:25, img:"classic-burger.webp", desc:"Classic burger with cheese and sauce."},
  {name:"Double Smashed", price:30, img:"double-smashed.webp", desc:"Double smashed burger."},
  {name:"Triple Smashed", price:37, img:"triple-smashed.webp", desc:"Triple smashed burger."},
  {name:"The Meat", price:28, img:"the-meat-tacos.webp", desc:"Meat tacos with fries."},
  {name:"The Crispy", price:29, img:"the-crispy-tacos.webp", desc:"Crispy tacos with fries."},
  {name:"The Mixt", price:35, img:"the-mixt.webp", desc:"Mixed tacos special."},
  {name:"Crispy Wrap", price:22, img:"crispy-wrap.webp", desc:"Crispy chicken wrap."},
  {name:"Smashed Wrap", price:25, img:"smashed-wrap.webp", desc:"Smashed beef wrap."},
  {name:"3 Strips", price:30, img:"3-strips.webp", desc:"3 crispy chicken strips."},
  {name:"6 Strips", price:49, img:"6-strips.webp", desc:"6 crispy chicken strips."},
  {name:"10 Strips", price:69, img:"10-strips.webp", desc:"10 crispy chicken strips."},
  {name:"Meat Loaded", price:25, img:"meat-loaded.webp", desc:"Loaded fries with meat."},
  {name:"Cheese Bomb", price:22, img:"cheese-bomb.webp", desc:"Cheesy loaded fries."},
  {name:"Crispy Loaded", price:25, img:"crispy-loaded.webp", desc:"Loaded fries with crispy chicken."},
  {name:"Sauce Bomb", price:20, img:"sauce-bomb.webp", desc:"Loaded fries with sauce."},
  {name:"Mac&Cheese Crispy", price:35, img:"mac-cheese-crispy.webp", desc:"Mac and cheese crispy meal."},
  {name:"Italian Crispy Bowl", price:35, img:"italian-crispy.webp", desc:"Italian crispy bowl."},
  {name:"Crisp Duo", price:39, img:"crisp-duo.webp", desc:"Duo crispy sandwich meal."},
  {name:"Happy Duo", price:34, img:"happy-duo.webp", desc:"Happy duo meal."},
  {name:"SFC Duo", price:38, img:"sfc-duo.webp", desc:"SFC duo meal."},
  {name:"Wrap Duo", price:30, img:"wrap-duo.webp", desc:"Wrap duo meal."},
  {name:"Mac&Cheese Bowl", price:25, img:"mac-cheese-bowl.webp", desc:"Mac and cheese bowl."},
  {name:"Italian Bowl", price:25, img:"italian-bowl.webp", desc:"Italian bowl."},
  {name:"Extra Cola", price:5, img:"extra-cola.webp", desc:"Extra soft drink."},
  {name:"Extra Fries", price:5, img:"extra-fries.webp", desc:"Extra fries."},
  {name:"Extra Sauce", price:2, img:"extra-sauce.webp", desc:"Extra sauce."}
];

function orderItem(name, price){
  const message = `Salam SFC,%0A%0ABghit n-order:%0A• ${name} - ${price} DH%0A%0AName:%0AAddress:%0ANote:`;
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

function renderMenu(){
  const grid = document.getElementById("menuGrid");

  grid.innerHTML = menuItems.map(item => `
    <article class="menu-card" onclick="orderItem('${item.name.replace(/'/g, "\\'")}', ${item.price})">
      <div class="menu-img">
        <img src="${item.img}" alt="${item.name}" onerror="this.src='logo.png'">
      </div>
      <div class="menu-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-bottom">
          <span class="price">${item.price} DH</span>
          <button class="order-btn" onclick="event.stopPropagation(); orderItem('${item.name.replace(/'/g, "\\'")}', ${item.price})">
            Order
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

renderMenu();
