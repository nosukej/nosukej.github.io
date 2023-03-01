// Get DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesList = document.querySelector('.messages');

// Connect to server
const socket = io('http://localhost:3000');

// Send message when user clicks send button
sendButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    const message = {
      text: messageText,
      sentAt: new Date()
    };
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

// Add received messages to messages list
socket.on('chat message', (message) => {
  const messageItem = document.createElement('li');
  messageItem.classList.add('message');
  if (message.sentBy === 'me') {
    messageItem.classList.add