const whatsappNumber = "212641928720";

function openWhatsApp(item, price){
  const text = `Salam SFC, bghit ncommandi:%0A%0A${item} - ${price} DH%0A%0ASmiya:%0AAdresse:%0ANote:`;
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}

document.querySelectorAll(".hotspot").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    openWhatsApp(name, price);
  });
});
