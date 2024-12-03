//Custom Event Listener 
// Create a custom event
const myEvent = new Event('customEvent');

// Add an event listener
document.addEventListener('customEvent', function () {
  console.log("Custom event triggered!");
});

// Trigger the custom event
document.dispatchEvent(myEvent);


