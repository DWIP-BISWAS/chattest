// Connect to the WebSocket server
const ws = new WebSocket('https://chatbackend-gray.vercel.app/'); // Replace with your WebSocket server URL

const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Handle incoming messages from the server
ws.onmessage = function(event) {
    const message = document.createElement('div');
    message.textContent = event.data;
    messageContainer.appendChild(message);
};

// Send a message to the server
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value;
    if (message) {
        ws.send(message);
        messageInput.value = ''; // Clear the input field
    }
}
