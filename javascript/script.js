const Button = document.querySelector('.placeorder');

Button.addEventListener('click', () => {
  const name = document.querySelector('.name').value;
  const address = document.querySelector('.address').value;
  const CanCount = document.querySelector('.cans').value;

    //calling the function
  WhatsApp(name, address, CanCount);
});

function WhatsApp(Name, Address, Count) {
  const number = '6382817065';
  const message = encodeURIComponent(
    `hello im ${Name} and i wish to order ${Count} cans, and this is my Address: ${Address}`
  );

  const whatsapp = `https://wa.me/${number}?text=${message}`;
  window.open(whatsapp, '_blank');
}
