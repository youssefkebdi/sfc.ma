const phoneNumber="212641928720";

const menu=[

{
name:"Cheese Bomb",
price:59,
img:"cheese-bomb.webp"
},

{
name:"Classic Burger",
price:55,
img:"classic-burger.webp"
},

{
name:"Crisp Duo",
price:65,
img:"crisp-duo.webp"
},

{
name:"Crispy Loaded",
price:60,
img:"crispy-loaded.webp"
},

{
name:"Crispy Wrap",
price:50,
img:"crispy-wrap.webp"
},

{
name:"Double Smashed",
price:75,
img:"double-smashed.webp"
},

{
name:"Happy Duo",
price:89,
img:"happy-duo.webp"
},

{
name:"Italian Bowl",
price:60,
img:"italian-bowl.webp"
},

{
name:"Italian Crispy",
price:65,
img:"italian-crispy.webp"
},

{
name:"Mac Cheese Bowl",
price:45,
img:"mac-cheese-bowl.webp"
},

{
name:"Mac Cheese Crispy",
price:55,
img:"mac-cheese-crispy.webp"
},

{
name:"Meat Loaded",
price:75,
img:"meat-loaded.webp"
},

{
name:"Sauce Bomb",
price:55,
img:"sauce-bomb.webp"
},

{
name:"SFC Duo",
price:95,
img:"sfc-duo.webp"
},

{
name:"Signature",
price:65,
img:"signature.webp"
},

{
name:"Smashed Wrap",
price:55,
img:"smashed-wrap.webp"
},

{
name:"The Classic",
price:59,
img:"the-classic.webp"
},

{
name:"The Crispy Tacos",
price:49,
img:"the-crispy-tacos.webp"
},

{
name:"The Meat Tacos",
price:55,
img:"the-meat-tacos.webp"
},

{
name:"The Mixt",
price:70,
img:"the-mixt.webp"
},

{
name:"The Special",
price:75,
img:"the-special.webp"
},

{
name:"The Spicy",
price:60,
img:"the-spicy.webp"
},

{
name:"Triple Smashed",
price:95,
img:"triple-smashed.webp"
},

{
name:"Wrap Duo",
price:80,
img:"wrap-duo.webp"
},

{
name:"Extra Fries",
price:15,
img:"extra-fries.webp"
},

{
name:"Extra Cola",
price:12,
img:"extra-cola.webp"
},

{
name:"Extra Sauce",
price:8,
img:"extra-sauce.webp"
}

];

let cart=[];

const menuGrid=
document.getElementById("menuGrid");

const basket=
document.getElementById("basket");

const total=
document.getElementById("total");

const count=
document.getElementById("cartCount");


function loadMenu(){

menuGrid.innerHTML=

menu.map((item,index)=>`

<div class="card">

<img src="${item.img}">

<h3>${item.name}</h3>

<div class="price">

${item.price} DHS

</div>

<br>

<button class="whatsapp"

onclick="addItem(${index})">

+

Add

</button>

</div>

`).join("");

}

function addItem(index){

const item=menu[index];

cart.push(item);

renderCart();

}

function renderCart(){

count.innerHTML=
cart.length;

if(cart.length===0){

basket.innerHTML=
"No items selected";

total.innerHTML=
"0 DHS";

return;

}

basket.innerHTML=
cart.map((item)=>`

<div style="
display:flex;
justify-content:space-between;
padding:8px 0;
border-bottom:1px solid #ddd">

<span>

${item.name}

</span>

<b>

${item.price}

</b>

</div>

`).join("");

const finalTotal=
cart.reduce(

(sum,item)=>

sum+item.price,

0

);

total.innerHTML=
finalTotal+" DHS";

}

function checkoutWhatsApp(){

if(cart.length===0){

alert(
"Please select items"
);

return;

}

let msg=

"Salam SFC,%0A%0A";

msg+=

"Talab dyali:%0A";

cart.forEach(item=>{

msg+=

`• ${item.name}
- ${item.price} DHS%0A`;

});

msg+=

`%0ATotal:
${cart.reduce((s,x)=>s+x.price,0)}
DHS`;

window.open(

`https://wa.me/${phoneNumber}?text=${msg}`

);

}

loadMenu();
