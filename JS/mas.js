
document.getElementById("btnIOS").addEventListener("click", function () {
  Swal.fire({
    title: 'iOS 26',
    html: `
      <p>Incluye historial de versiones en la app Contraseñas.</p>
      <p>La Beta 3 estará disponible en <b>julio 2025</b>.</p>
    `,
    icon: 'info',
    confirmButtonText: 'Cerrar'
  });
});

document.getElementById("btnLiquid").addEventListener("click", function () {
  Swal.fire({
    title: 'Liquid Glass',
    html: `
      <p>Material digital con transparencia y reflejos dinámicos.</p>
      <p>Se adapta al contenido y a la luz del entorno en tiempo real.</p>
    `,
    icon: 'success',
    confirmButtonText: 'Genial ✨'
  });
});


document.getElementById("btnExtra").addEventListener("click", function () {
  Swal.fire({
    title: 'Más detalles',
    html: `
      <p>Disponible en <b>iOS 26</b> y <b>macOS Tahoe 26</b>.</p>
      <p>Ofrece interfaces fluidas, naturales y sofisticadas.</p>
      <a href="https://www.apple.com/la/" target="_blank">🌐 Ir a Apple</a>
    `,
    icon: 'question',
    confirmButtonText: 'Ok'
  });
});

var typedTitle = new Typed('#titulo', {
  strings: ["Conozca Liquid Glass for Apple"],
  typeSpeed: 50,
  backSpeed: 25,
  startDelay: 500,
  showCursor: true,
  cursorChar: '|',
});


var typedDesc = new Typed('#descripcion', {
  strings: [
    "Apple presenta Liquid Glass, un nuevo material digital para interfaces, con transparencia, reflejo y refracción dinámicos que se adaptan al entorno."
  ],
  typeSpeed: 30,
  backSpeed: 15,
  startDelay: 1500,
  showCursor: false
});

