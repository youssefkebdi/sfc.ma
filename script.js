const phoneNumber="212641928720";
const menuItems=[
  {
    "name": "The Classic",
    "price": 25,
    "img": "images/the-classic.webp",
    "desc": "Crispy chicken sandwich with fresh toppings."
  },
  {
    "name": "Signature",
    "price": 33,
    "img": "images/signature.webp",
    "desc": "Signature SFC crispy chicken burger."
  },
  {
    "name": "The Special",
    "price": 33,
    "img": "images/the-special.webp",
    "desc": "Special crispy chicken burger with sauce."
  },
  {
    "name": "The Spicy",
    "price": 26,
    "img": "images/the-spicy.webp",
    "desc": "Spicy crispy chicken sandwich."
  },
  {
    "name": "Signature SFC Crispy Sandwich",
    "price": 35,
    "img": "images/signature-sfc-crispy-sandwich.webp",
    "desc": "Long crispy sandwich with signature sauce."
  },
  {
    "name": "Classic Burger",
    "price": 25,
    "img": "images/classic-burger.webp",
    "desc": "Classic beef burger with cheese and pickles."
  },
  {
    "name": "Double Smashed",
    "price": 30,
    "img": "images/double-smashed.webp",
    "desc": "Double smashed beef burger with cheese."
  },
  {
    "name": "Triple Smashed",
    "price": 37,
    "img": "images/triple-smashed.webp",
    "desc": "Triple smashed beef burger."
  },
  {
    "name": "The Meat French Tacos",
    "price": 28,
    "img": "images/the-meat-french-tacos.webp",
    "desc": "French tacos with meat, fries and sauce."
  },
  {
    "name": "The Crispy French Tacos",
    "price": 29,
    "img": "images/the-crispy-french-tacos.webp",
    "desc": "French tacos with crispy chicken and fries."
  },
  {
    "name": "The Mixt French Tacos",
    "price": 35,
    "img": "images/the-mixt-french-tacos.webp",
    "desc": "French tacos with mixed filling and sauce."
  },
  {
    "name": "Crispy Wrap",
    "price": 22,
    "img": "images/crispy-wrap.webp",
    "desc": "Crispy chicken wrap with fresh filling."
  },
  {
    "name": "Smashed Wrap",
    "price": 25,
    "img": "images/smashed-wrap.webp",
    "desc": "Smashed meat wrap with cheese sauce."
  },
  {
    "name": "3 Strips",
    "price": 30,
    "img": "images/3-strips.webp",
    "desc": "3 crispy chicken strips with sauce."
  },
  {
    "name": "6 Strips",
    "price": 49,
    "img": "images/6-strips.webp",
    "desc": "6 crispy chicken strips with sauce."
  },
  {
    "name": "10 Strips",
    "price": 69,
    "img": "images/10-strips.webp",
    "desc": "10 crispy chicken strips with sauce."
  },
  {
    "name": "Meat Loaded",
    "price": 25,
    "img": "images/meat-loaded.webp",
    "desc": "Loaded fries with meat and sauce."
  },
  {
    "name": "Cheese Bomb",
    "price": 22,
    "img": "images/cheese-bomb.webp",
    "desc": "Loaded fries with cheese sauce."
  },
  {
    "name": "Crispy Loaded",
    "price": 25,
    "img": "images/crispy-loaded.webp",
    "desc": "Loaded fries with crispy chicken."
  },
  {
    "name": "Sauce Bomb",
    "price": 20,
    "img": "images/sauce-bomb.webp",
    "desc": "Loaded fries with special sauce."
  },
  {
    "name": "Mac & Cheese Crispy",
    "price": 35,
    "img": "images/mac-cheese-crispy.webp",
    "desc": "Mac and cheese with crispy chicken."
  },
  {
    "name": "Italian Crispy Bowl",
    "price": 35,
    "img": "images/italian-crispy-bowl.webp",
    "desc": "Italian style crispy bowl."
  },
  {
    "name": "Crisp Duo",
    "price": 39,
    "img": "images/crisp-duo.webp",
    "desc": "Burger and wrap duo."
  },
  {
    "name": "Happy Duo",
    "price": 34,
    "img": "images/happy-duo.webp",
    "desc": "Happy duo meal."
  },
  {
    "name": "SFC Duo",
    "price": 38,
    "img": "images/sfc-duo.webp",
    "desc": "SFC burger, wrap, fries and drink."
  },
  {
    "name": "Wrap Duo",
    "price": 30,
    "img": "images/wrap-duo.webp",
    "desc": "Two wraps with fries."
  },
  {
    "name": "Mac & Cheese Bowl",
    "price": 25,
    "img": "images/mac-cheese-bowl.webp",
    "desc": "Creamy mac and cheese bowl."
  },
  {
    "name": "Italian Bowl",
    "price": 25,
    "img": "images/italian-bowl.webp",
    "desc": "Italian style bowl."
  },
  {
    "name": "Extra Cola",
    "price": 5,
    "img": "images/extra-cola.webp",
    "desc": "Extra cola drink."
  },
  {
    "name": "Extra Fries",
    "price": 5,
    "img": "images/extra-fries.webp",
    "desc": "Extra fries."
  },
  {
    "name": "Extra Sauce",
    "price": 2,
    "img": "images/extra-sauce.webp",
    "desc": "Extra sauce."
  }
];

let cart=[];

function renderMenu(){
  document.getElementById("menuGrid").innerHTML=menuItems.map((item,index)=>`
  <article class="menu-card">
    <div class="menu-img"><img src="${item.img}" alt="${item.name}" onerror="this.src='top-banner.png'"></div>
    <div class="menu-body">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="menu-bottom">
        <span class="price">${item.price} DH</span>
        <button class="add-btn" onclick="addToCart(${index})">+ Add</button>
      </div>
    </div>
  </article>
  `).join("");
}

function addToCart(index){
  const item=menuItems[index];
  const existing=cart.find(x=>x.name===item.name);
  if(existing){existing.qty++}else{cart.push({...item,qty:1})}
  renderCart();
}

function increase(index){cart[index].qty++;renderCart()}
function decrease(index){cart[index].qty--;if(cart[index].qty<=0){cart.splice(index,1)}renderCart()}
function removeItem(index){cart.splice(index,1);renderCart()}
function clearCart(){cart=[];renderCart()}

function renderCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0);
  const total=cart.reduce((s,x)=>s+(x.price*x.qty),0);
  document.getElementById("cartCount").innerText=count;
  document.getElementById("cartTotal").innerText=total+" DH";
  if(cart.length===0){
    document.getElementById("cartItems").innerHTML='<p class="empty">No items selected</p>';
    return;
  }
  document.getElementById("cartItems").innerHTML=cart.map((item,index)=>`
  <div class="cart-row">
    <img src="${item.img}" onerror="this.src='top-banner.png'">
    <div>
      <h4>${item.name}</h4>
      <div class="qty">
        <button onclick="decrease(${index})">-</button>
        <span>${item.qty}</span>
        <button onclick="increase(${index})">+</button>
      </div>
    </div>
    <div>
      <button class="remove" onclick="removeItem(${index})">×</button>
      <strong>${item.price*item.qty} DH</strong>
    </div>
  </div>
  `).join("");
}

function checkoutWhatsApp(){
  if(cart.length===0){alert("Please add items first");return;}
  let total=cart.reduce((s,x)=>s+(x.price*x.qty),0);
  let msg="Salam SFC,%0A%0ABghit n-order:%0A";
  cart.forEach(item=>{msg+=`• ${item.name} x${item.qty} = ${item.price*item.qty} DH%0A`;});
  msg+=`%0ATotal: ${total} DH%0A%0AName:%0AAddress:%0ANote:`;
  window.open(`https://wa.me/${phoneNumber}?text=${msg}`,"_blank");
}

renderMenu();
renderCart();
