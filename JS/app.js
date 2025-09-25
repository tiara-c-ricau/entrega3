const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalInput = document.getElementById("total");
const buyButton = document.getElementById("buyButton");
const userFormContainer = document.getElementById("userFormContainer");
const userForm = document.getElementById("userForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const historyList = document.getElementById("historyList");

let carrito = [];

// Cargar productos desde JSON
async function cargarProductos() {
  const resp = await fetch("productos.json");
  const productos = await resp.json();
  mostrarProductos(productos);
}

// Mostrar productos en el HTML
function mostrarProductos(productos) {
  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <p>Precio: $${prod.precio} USD</p>
      <button onclick="agregarAlCarrito(${prod.id}, '${prod.nombre}', ${prod.precio})">
        Agregar al carrito
      </button>
    `;

    productList.appendChild(card);
  });
}

// Agregar al carrito
function agregarAlCarrito(id, nombre, precio) {
  carrito.push({ id, nombre, precio });
  renderCarrito();
}

// Renderizar carrito
function renderCarrito() {
  cartItems.innerHTML = "";
  let total = 0;

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    cartItems.appendChild(li);
    total += item.precio;
  });

  totalInput.value = `$${total}`;
}

// Botón COTIZAR
buyButton.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Agregá al menos un producto para cotizar.");
    return;
  }
  userFormContainer.style.display = "block";
});

// Enviar formulario
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  guardarHistorial(nombre, email, carrito, totalInput.value);

  userFormContainer.style.display = "none";
  thankYouMessage.style.display = "block";

  // Reset
  carrito = [];
  renderCarrito();
  userForm.reset();

  setTimeout(() => {
    thankYouMessage.style.display = "none";
  }, 3000);
});

// Guardar historial en localStorage
function guardarHistorial(nombre, email, items, total) {
  const historial = JSON.parse(localStorage.getItem("historial")) || [];
  const nuevaCotizacion = {
    fecha: new Date().toLocaleString(),
    nombre,
    email,
    items,
    total
  };

  historial.push(nuevaCotizacion);
  localStorage.setItem("historial", JSON.stringify(historial));
  mostrarHistorial();
}

// Mostrar historial
function mostrarHistorial() {
  historyList.innerHTML = "";
  const historial = JSON.parse(localStorage.getItem("historial")) || [];

  historial.forEach(h => {
    const li = document.createElement("li");
    li.textContent = `${h.fecha} - ${h.nombre} (${h.email}) - Total: ${h.total}`;
    historyList.appendChild(li);
  });
}

// Inicialización
cargarProductos();
mostrarHistorial();
