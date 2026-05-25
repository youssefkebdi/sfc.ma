const phoneNumber = "212641928720";

const pages = [
  {
    "page": 1,
    "img": "assets/menu/page-01.webp",
    "alt": "SFC Menu Cover",
    "items": []
  },
  {
    "page": 2,
    "img": "assets/menu/page-02.webp",
    "alt": "Chicken sandwiches menu",
    "items": [
      {
        "name": "The Classic",
        "price": 25,
        "x": 0,
        "y": 0,
        "w": 50,
        "h": 28
      },
      {
        "name": "Signature",
        "price": 33,
        "x": 0,
        "y": 28,
        "w": 55,
        "h": 26
      },
      {
        "name": "The Special",
        "price": 33,
        "x": 45,
        "y": 35,
        "w": 55,
        "h": 28
      },
      {
        "name": "The Spicy",
        "price": 26,
        "x": 0,
        "y": 58,
        "w": 100,
        "h": 30
      }
    ]
  },
  {
    "page": 3,
    "img": "assets/menu/page-03.webp",
    "alt": "Signature SFC Crispy Sandwich",
    "items": [
      {
        "name": "Signature SFC Crispy Sandwich",
        "price": 35,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 100
      }
    ]
  },
  {
    "page": 4,
    "img": "assets/menu/page-04.webp",
    "alt": "Burger menu",
    "items": [
      {
        "name": "Classic Burger",
        "price": 25,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 28
      },
      {
        "name": "Double Smashed",
        "price": 30,
        "x": 0,
        "y": 28,
        "w": 100,
        "h": 28
      },
      {
        "name": "Triple Smashed",
        "price": 37,
        "x": 0,
        "y": 56,
        "w": 100,
        "h": 35
      }
    ]
  },
  {
    "page": 5,
    "img": "assets/menu/page-05.webp",
    "alt": "Tacos menu",
    "items": [
      {
        "name": "The Meat",
        "price": 28,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 30
      },
      {
        "name": "The Crispy",
        "price": 29,
        "x": 0,
        "y": 30,
        "w": 100,
        "h": 28
      },
      {
        "name": "The Mixt",
        "price": 35,
        "x": 0,
        "y": 58,
        "w": 100,
        "h": 30
      }
    ]
  },
  {
    "page": 6,
    "img": "assets/menu/page-06.webp",
    "alt": "Wrap menu",
    "items": [
      {
        "name": "Crispy Wrap",
        "price": 22,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 50
      },
      {
        "name": "Smashed Wrap",
        "price": 25,
        "x": 0,
        "y": 50,
        "w": 100,
        "h": 50
      }
    ]
  },
  {
    "page": 7,
    "img": "assets/menu/page-07.webp",
    "alt": "Strips menu",
    "items": [
      {
        "name": "3 Strips",
        "price": 30,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 30
      },
      {
        "name": "6 Strips",
        "price": 49,
        "x": 0,
        "y": 30,
        "w": 100,
        "h": 30
      },
      {
        "name": "10 Strips",
        "price": 69,
        "x": 0,
        "y": 60,
        "w": 100,
        "h": 30
      }
    ]
  },
  {
    "page": 8,
    "img": "assets/menu/page-08.webp",
    "alt": "Loaded fries menu",
    "items": [
      {
        "name": "Meat Loaded",
        "price": 25,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 25
      },
      {
        "name": "Cheese Bomb",
        "price": 22,
        "x": 0,
        "y": 25,
        "w": 100,
        "h": 25
      },
      {
        "name": "Crispy Loaded",
        "price": 25,
        "x": 0,
        "y": 50,
        "w": 100,
        "h": 25
      },
      {
        "name": "Sauce Bomb",
        "price": 20,
        "x": 0,
        "y": 75,
        "w": 70,
        "h": 20
      },
      {
        "name": "Extra Cola",
        "price": 5,
        "x": 0,
        "y": 85,
        "w": 100,
        "h": 15
      }
    ]
  },
  {
    "page": 9,
    "img": "assets/menu/page-09.webp",
    "alt": "Crispy bowls menu",
    "items": [
      {
        "name": "Mac&Cheese Crispy",
        "price": 35,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 48
      },
      {
        "name": "Italian Crispy Bowl",
        "price": 35,
        "x": 0,
        "y": 48,
        "w": 100,
        "h": 42
      }
    ]
  },
  {
    "page": 10,
    "img": "assets/menu/page-10.webp",
    "alt": "Duo menu",
    "items": [
      {
        "name": "Crisp Duo",
        "price": 39,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 25
      },
      {
        "name": "Happy Duo",
        "price": 34,
        "x": 0,
        "y": 25,
        "w": 100,
        "h": 25
      },
      {
        "name": "SFC Duo",
        "price": 38,
        "x": 0,
        "y": 50,
        "w": 100,
        "h": 25
      },
      {
        "name": "Wrap Duo",
        "price": 30,
        "x": 0,
        "y": 75,
        "w": 100,
        "h": 25
      }
    ]
  },
  {
    "page": 11,
    "img": "assets/menu/page-11.webp",
    "alt": "Bowl menu",
    "items": [
      {
        "name": "Mac&Cheese Bowl",
        "price": 25,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 50
      },
      {
        "name": "Italian Bowl",
        "price": 25,
        "x": 0,
        "y": 50,
        "w": 100,
        "h": 45
      }
    ]
  },
  {
    "page": 12,
    "img": "assets/menu/page-12.webp",
    "alt": "Extra Cola",
    "items": [
      {
        "name": "Extra Cola",
        "price": 5,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 100
      }
    ]
  },
  {
    "page": 13,
    "img": "assets/menu/page-13.webp",
    "alt": "Extra Fries",
    "items": [
      {
        "name": "Extra Fries",
        "price": 5,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 100
      }
    ]
  },
  {
    "page": 14,
    "img": "assets/menu/page-14.webp",
    "alt": "Extra Sauce",
    "items": [
      {
        "name": "Extra Sauce",
        "price": 2,
        "x": 0,
        "y": 0,
        "w": 100,
        "h": 100
      }
    ]
  }
];

function whatsappLink(itemName, price) {
  const text =
    `Salam SFC,%0A%0ABghit n-order:%0A• ${itemName} - ${price} DH%0A%0AName:%0AAddress:%0ANote:`;
  return `https://wa.me/${phoneNumber}?text=${text}`;
}

function openWhatsApp(itemName, price) {
  const toast = document.getElementById("toast");
  toast.textContent = `Opening WhatsApp: ${itemName}`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
  window.open(whatsappLink(itemName, price), "_blank");
}

function renderMenu() {
  const container = document.getElementById("menu");
  container.innerHTML = pages.map(page => `
    <section class="page" aria-label="${page.alt}">
      <img src="${page.img}" alt="${page.alt}" loading="lazy">
      ${page.items.map(item => `
        <button
          class="hotspot"
          aria-label="Order ${item.name} ${item.price} DH on WhatsApp"
          title="Order ${item.name} - ${item.price} DH"
          style="left:${item.x}%; top:${item.y}%; width:${item.w}%; height:${item.h}%;"
          onclick="openWhatsApp('${item.name.replace(/'/g, "\\'")}', ${item.price})">
        </button>
      `).join("")}
    </section>
  `).join("");
}

renderMenu();
