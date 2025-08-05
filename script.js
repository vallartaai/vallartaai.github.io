// Respuestas del bot: solo texto y emojis
const botResponses = [
  { type: 'text', content: '¡Hola! ¿Sabías que la 🤖 IA puede ayudarte a crecer tu negocio?' },
  { type: 'text', content: '¡La innovación está a un mensaje de distancia! 🚀' },
  { type: 'text', content: '¿Listo para llevar tu empresa al siguiente nivel con IA? 📈' },
  { type: 'text', content: 'La IA no es solo para grandes empresas, ¡también es para ti! 🏪' },
  { type: 'text', content: '¿Te gustaría automatizar tareas repetitivas? La IA puede hacerlo. 🔄' },
  { type: 'text', content: '¡Sonríe! Hoy es un gran día para aprender algo nuevo sobre IA. 😃' },
  { type: 'text', content: '¿Sabías que puedes analizar a tus clientes con IA fácilmente? 📊' },
  { type: 'text', content: 'La IA puede ayudarte a vender más y mejor. 😉' },
  { type: 'text', content: '¡Haz crecer tu negocio con datos inteligentes! 💡' },
  { type: 'text', content: '¿Tienes dudas sobre IA? ¡Pregúntame lo que quieras! 🤔' },
  { type: 'text', content: '¡La IA puede ayudarte a ahorrar tiempo y dinero! ⏳💰' },
  { type: 'text', content: '¿Sabías que la IA puede mejorar la atención a tus clientes? 🗣️' },
  { type: 'text', content: '¡Con IA, tu negocio puede estar abierto 24/7! 🕒' },
  { type: 'text', content: 'La IA aprende contigo y para ti. 🤝' },
  { type: 'text', content: '¿Te gustaría recibir tips de IA para tu empresa? 📝' },
  { type: 'text', content: '¡La IA puede ayudarte a conocer mejor a tus clientes! 👥' },
  { type: 'text', content: '¿Sabías que la IA puede predecir tendencias de ventas? 📈' },
  { type: 'text', content: '¡La IA es tu aliada para crecer! 🌱' },
  { type: 'text', content: '¿Listo para descubrir el poder de la IA? ⚡' },
  { type: 'text', content: '¡Con IA, todo es posible! ✨' },
  { type: 'text', content: '¡Vamos a impulsar tu negocio juntos! 🤗' },
  { type: 'text', content: 'La IA puede ayudarte a tomar mejores decisiones. 🧠' },
  { type: 'text', content: '¿Sabías que la IA puede ayudarte a personalizar tus servicios? 🎯' },
  { type: 'text', content: '¡La IA puede hacer tu día más fácil! 😎' },
  { type: 'text', content: '¿Te gustaría saber cómo la IA puede ayudarte hoy? 📅' },
  { type: 'text', content: '¡La IA está aquí para apoyarte! 🙌' },
  { type: 'text', content: '¿Sabías que la IA puede ayudarte a encontrar nuevos clientes? 🕵️‍♂️' },
  { type: 'text', content: '¡La IA puede ayudarte a organizar tu inventario! 📦' },
  { type: 'text', content: '¿Listo para innovar con IA? 💡' },
  { type: 'text', content: '¡Juntos podemos lograr grandes cosas con IA! 🤩' }
];

function getRandomResponse() {
  return botResponses[Math.floor(Math.random() * botResponses.length)];
}

function appendMessage(content, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = content;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message) {
    appendMessage(message, 'user');
    userInput.value = '';
    setTimeout(() => {
      const response = getRandomResponse();
      appendMessage(response.content, 'bot');
    }, 700);
  }
});