console.log('Display popup');

// const messageContainer = document.getElementById('message-container');

// setTimeout(() => {
//   const promoMessage = document.createElement('div');

//   promoMessage.textContent = 'Special Offer: Get 20% off your next purchase!';

//   promoMessage.className = 'bg-yellow-300 text-gray-900 p-4 rounded-lg text-center font-semibold';

//   messageContainer.appendChild(promoMessage);
// }, 3000);

//

const messageContainer = document.getElementById('message-container');

function addMessage() {
  const messageEl = document.createElement('div');
  messageEl.classList.add('bg-yellow-300', 'p-4', 'rounded-lg', 'text-center');
  messageEl.textContent = 'Special Offer: Get 20% off your next purchase!';

  messageContainer.appendChild(messageEl);

  // messageContainer.showModal();
  messageContainer.showPopover(); // leicht wegklickbar - braucht 'popover' HTML_Attribut

  setTimeout(() => {
    // messageContainer.close();
    messageContainer.hidePopover();
  }, 17000);
}

setTimeout(addMessage, 3000);
