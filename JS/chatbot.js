document.addEventListener("DOMContentLoaded", () => {
  const chatbotHTML = `
    <div id="chatbot" class="hidden">
      <div id="messages"></div>
      <input type="text" id="userInput" placeholder="Escribe algo...">
      <button onclick="sendMessage()">Enviar</button>
      <button id="closeChat">X</button>
    </div>
    <button id="chatToggle">Chat</button>
  `;
  document.body.insertAdjacentHTML("beforeend", chatbotHTML);
});


const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");

chatToggle.addEventListener("click", () => {
  chatbot.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatbot.classList.add("hidden");
});

function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");
  userInput.value = "";

  const botReply = getBotResponse(userText);
  setTimeout(() => addMessage(botReply, "bot"), 500);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "text-end" : "text-start";
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("hola")) return "¡Hola! Puedo darte información breve acerca de los productos. ¿Sobre cuál quieres saber? Iphone, iPad o Macbook";
  if (text.includes("iphone")) return "El iPhone 16 Pro es el último modelo disponible. Próximamente se lanzará el iPhone 17.";
  if (text.includes("ipad")) return "El nuevo iPad Air M2 es una maravilla.";
  if (text.includes("macbook")) return "La MacBook Air M2 combina potencia y ligereza.";
  if (text.includes("gracias")) return "¡Con gusto! ¿Algo más?";
  if (text.includes("adios")) return "¡Hasta luego!";
  if (text.includes("no")) return "Comprendo, espero haberte ayudado.";
  if (text.includes("si")) return "¿Sobre qué otro producto puedo ayudarte?";
  return "No entendí eso. Prueba con palabras como iPhone, iPad o MacBook.";
}
