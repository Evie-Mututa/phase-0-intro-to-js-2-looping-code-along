function writeCards(names, eventName) {
  const messages = []; // Initialize an empty array to store the messages

  for (let i = 0; i < names.length; i++) {
    // Create a message for each person
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message); // Add the message to the messages array
  }

  return messages; // Return the array of messages
}
function countDown(number) {
    // Start from the provided number and count down to zero
    for (let i = number; i >= 0; i--) {
      console.log(i); // Log each number when counting down
    }
  }