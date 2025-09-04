const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evitar envío automático
  let isValid = true;

  // Campos
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const message = document.getElementById("message");

  // Errores
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const addressError = document.getElementById("addressError");
  const cityError = document.getElementById("cityError");
  const messageError = document.getElementById("messageError");
  const responseMsg = document.getElementById("formResponse");

  // Validación de nombre
  if (name.value.trim() === "") {
    nameError.textContent = "Por favor, ingrese su nombre.";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validación de teléfono (solo números y mínimo 8 dígitos)
  const phonePattern = /^[0-9]{8,15}$/;
  if (!phone.value.match(phonePattern)) {
    phoneError.textContent = "Ingrese un teléfono válido (solo números, mínimo 8 dígitos).";
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  // Validación de email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Ingrese un correo válido.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validación de dirección
  if (address.value.trim() === "") {
    addressError.textContent = "Ingrese su dirección.";
    addressError.style.display = "block";
    isValid = false;
  } else {
    addressError.style.display = "none";
  }

  // Validación de localidad
  if (city.value.trim() === "") {
    cityError.textContent = "Ingrese su localidad.";
    cityError.style.display = "block";
    isValid = false;
  } else {
    cityError.style.display = "none";
  }

  // Validación de mensaje
  if (message.value.trim().length < 10) {
    messageError.textContent = "El mensaje debe tener al menos 10 caracteres.";
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  // Si todo está correcto
  if (isValid) {
    responseMsg.textContent = "✅ ¡Gracias! Hemos recibido tu mensaje.";
    form.reset();
  } else {
    responseMsg.textContent = "";
  }
});
