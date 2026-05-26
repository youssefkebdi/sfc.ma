const phoneNumber="212641928720";
const menuItems=[
  {
    "name": "THE CLASSIC",
    "price": 25,
    "img": "assets/the-classic.webp",
    "desc": "Crispy chicken sandwich with fresh toppings."
  },
  {
    "name": "SIGNATURE",
    "price": 33,
    "img": "assets/signature.webp",
    "desc": "Signature SFC crispy chicken burger."
  },
  {
    "name": "THE SPECIAL",
    "price": 33,
    "img": "assets/the-special.webp",
    "desc": "Special crispy chicken burger with sauce."
  },
  {
    "name": "THE SPICY",
    "price": 26,
    "img": "assets/the-spicy.webp",
    "desc": "Spicy crispy chicken sandwich."
  },
  {
    "name": "SIGNATURE CRISPY SANDWICH",
    "price": 35,
    "img": "assets/signature-crispy-sandwich.webp",
    "desc": "Long crispy sandwich with signature sauce."
  },
  {
    "name": "CLASSIC BURGER",
    "price": 25,
    "img": "assets/classic-burger.webp",
    "desc": "Classic burger with cheese and pickles."
  },
  {
    "name": "DOUBLE SMASHED",
    "price": 30,
    "img": "assets/double-smashed.webp",
    "desc": "Double smashed beef burger with cheese."
  },
  {
    "name": "TRIPLE SMASHED",
    "price": 37,
    "img": "assets/triple-smashed.webp",
    "desc": "Triple smashed beef burger."
  },
  {
    "name": "THE MEAT TACOS",
    "price": 28,
    "img": "assets/the-meat-tacos.webp",
    "desc": "French tacos with meat, fries and sauce."
  },
  {
    "name": "THE CRISPY TACOS",
    "price": 29,
    "img": "assets/the-crispy-tacos.webp",
    "desc": "French tacos with crispy chicken and fries."
  },
  {
    "name": "THE MIXT TACOS",
    "price": 35,
    "img": "assets/the-mixt-tacos.webp",
    "desc": "French tacos with mixed filling and sauce."
  },
  {
    "name": "CRISPY WRAP",
    "price": 22,
    "img": "assets/crispy-wrap.webp",
    "desc": "Crispy chicken wrap with fresh filling."
  },
  {
    "name": "SMASHED WRAP",
    "price": 25,
    "img": "assets/smashed-wrap.webp",
    "desc": "Smashed meat wrap with cheese sauce."
  },
  {
    "name": "3 STRIPS MEAL",
    "price": 30,
    "img": "assets/3-strips-meal.webp",
    "desc": "3 crispy chicken strips meal."
  },
  {
    "name": "6 STRIPS MEAL",
    "price": 49,
    "img": "assets/6-strips-meal.webp",
    "desc": "6 crispy chicken strips meal."
  },
  {
    "name": "10 STRIPS MEAL",
    "price": 69,
    "img": "assets/10-strips-meal.webp",
    "desc": "10 crispy chicken strips meal."
  },
  {
    "name": "MEAT LOADED FRIES",
    "price": 25,
    "img": "assets/meat-loaded-fries.webp",
    "desc": "Loaded fries with meat and sauce."
  },
  {
    "name": "CHEESE BOMB FRIES",
    "price": 22,
    "img": "assets/cheese-bomb-fries.webp",
    "desc": "Loaded fries with cheese sauce."
  },
  {
    "name": "CRISPY LOADED FRIES",
    "price": 25,
    "img": "assets/crispy-loaded-fries.webp",
    "desc": "Loaded fries with crispy chicken."
  },
  {
    "name": "SAUCE BOMB FRIES",
    "price": 20,
    "img": "assets/sauce-bomb-fries.webp",
    "desc": "Loaded fries with special sauce."
  },
  {
    "name": "MAC AND CHEESE CRISPY MEAL",
    "price": 35,
    "img": "assets/mac-and-cheese-crispy-meal.webp",
    "desc": "Mac and cheese with crispy chicken."
  },
  {
    "name": "ITALIAN CRISPY MEAL",
    "price": 35,
    "img": "assets/italian-crispy-meal.webp",
    "desc": "Italian crispy meal."
  },
  {
    "name": "CRISPY DUO COMBO",
    "price": 39,
    "img": "assets/crispy-duo-combo.webp",
    "desc": "Crispy duo combo."
  },
  {
    "name": "HAPPY DUO COMBO",
    "price": 34,
    "img": "assets/happy-duo-combo.webp",
    "desc": "Happy duo combo."
  },
  {
    "name": "SFC DUO COMBO",
    "price": 38,
    "img": "assets/sfc-duo-combo.webp",
    "desc": "SFC duo combo."
  },
  {
    "name": "WRAP DUO COMBO",
    "price": 30,
    "img": "assets/wrap-duo-combo.webp",
    "desc": "Wrap duo combo."
  },
  {
    "name": "MAC AND CHEESE BOWL",
    "price": 25,
    "img": "assets/mac-and-cheese-bowl.webp",
    "desc": "Creamy mac and cheese bowl."
  },
  {
    "name": "ITALIAN BOWL",
    "price": 25,
    "img": "assets/italian-bowl.webp",
    "desc": "Italian bowl."
  },
  {
    "name": "DRINK",
    "price": 5,
    "img": "assets/drink.webp",
    "desc": "Soft drink."
  },
  {
    "name": "FRIES",
    "price": 5,
    "img": "assets/fries.webp",
    "desc": "Fresh fries."
  },
  {
    "name": "SAUCE",
    "price": 2,
    "img": "assets/sauce.webp",
    "desc": "Extra sauce."
  }
];

let cart=[];
let orderType="Delivery";

function setOrderType(type){
  orderType=type;
  alert("Order type selected: " + type);
}

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
  const name=document.getElementById("customerName").value.trim();
  const address=document.getElementById("customerAddress").value.trim();
  const note=document.getElementById("customerNote").value.trim();

  if(!name){
    alert("Please enter your name before checkout.");
    document.getElementById("customerName").focus();
    return;
  }

  if(!address){
    alert("Please enter your address/location before checkout.");
    document.getElementById("customerAddress").focus();
    return;
  }

  let total=cart.reduce((s,x)=>s+(x.price*x.qty),0);
  let msg="Salam SFC,%0A%0A";
  msg+="Customer name: "+encodeURIComponent(name)+"%0A";
  msg+="Address/location: "+encodeURIComponent(address)+"%0A";
  msg+="Order type: "+encodeURIComponent(orderType)+"%0A%0A";
  msg+="Order:%0A";

  cart.forEach(item=>{
    msg+=`• ${encodeURIComponent(item.name)} x${item.qty} = ${item.price*item.qty} DH%0A`;
  });

  msg+=`%0ATotal: ${total} DH`;

  if(note){
    msg+="%0ANote: "+encodeURIComponent(note);
  }

  window.open(`https://wa.me/${phoneNumber}?text=${msg}`,"_blank");
}

renderMenu();
renderCart();
