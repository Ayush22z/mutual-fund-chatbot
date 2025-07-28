function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  const response = getBotResponse(message);
  appendMessage('bot', response);
  userInput.value = '';
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.className = sender;
  msgDiv.textContent = (sender === 'user' ? "You: " : "Bot: ") + text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  const lower = message.toLowerCase();

  if (lower.includes('sip')) return "SIP stands for Systematic Investment Plan. It's a way to invest in mutual funds monthly.";
  if (lower.includes('cagr')) return "CAGR means Compound Annual Growth Rate — it shows annualized returns over time.";
  if (lower.includes('fund')) return "There are various types of mutual funds — equity, debt, hybrid. Ask more!";
  if (lower.includes('best fund')) return "Best fund depends on your goals. Do you prefer high growth or stability?";
  return "I'm still learning. Try asking about SIP, CAGR, or types of funds!";
}
