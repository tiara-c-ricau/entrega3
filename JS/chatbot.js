
  const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");

  userInput.value = "";

  const botReply = getBotResponse(userText);

  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "text-end text-primary mb-2" : "text-start text-success mb-2";
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;

  saveChat();
}

function getBotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("hola")) return "¡Hola! Puedo darte informacion breve acerca de los productos, ¿Acerca de cual quieres saber?";
  if (text.includes("iphone")) return "El iPhone 16 Pro es el último modelo disponible. Proximamente se lanzara el iPhone 17";
  if (text.includes("ipad")) return "El nuevo iPad Air M2 es una maravilla.";
  if (text.includes("macbook")) return "La MacBook Air M2 combina potencia y ligereza.";
  if (text.includes("gracias")) return "¡Con gusto! ¿Algo más?";
  if (text.includes("adios")) return "¡Hasta luego!";
  if (text.includes("no")) return "Comprendo, espero haberte ayudado.";
  if(text.includes("si")) return "¿Sobre que otro producto puedo ayudarte?";

  return "No entendí eso. Prueba con palabras clave como iphone,ipad o macbook. Gracias";
}

function saveChat(){
  localStorage.setItem("chatHistory", messages.innerHTML);
} 

function loadChat(){
  const saved = localStorage.getItem("chatHistory") 
  if (saved) {
    messages.innerHTML = saved;
  }
} 

window.onload = loadChat; 