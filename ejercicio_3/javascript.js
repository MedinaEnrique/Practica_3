//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//menú responsive

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

// tabla versiones para generar de forma dinamica 
// Obtiene una referencia al elemento <tbody> de la tabla
function mostrarArchivos(version) {
  var contenedorArchivos = document.getElementById("contenedor-archivos");
  var tituloArchivos = document.getElementById("titulo-archivos");
  var listaArchivos = document.getElementById("lista-archivos");

  // Ocultar el contenido no deseado
  var contenedorDetalles = document.getElementById("contenedor-detalles");
  var contenedorConfiguracion = document.getElementById("contenedor-configuracion");
  contenedorDetalles.style.display = "none";
  contenedorConfiguracion.style.display = "none";

  // Mostrar el contenedor de archivos
  contenedorArchivos.style.display = "block";

  // Actualizar el título con la versión seleccionada
  tituloArchivos.innerHTML = "Archivos de la versión " + version;

  // Lógica para mostrar los archivos correspondientes a la versión seleccionada
  listaArchivos.innerHTML = ""; // Limpiar la lista de archivos

  // Aquí puedes agregar la lógica necesaria para obtener los archivos correspondientes a la versión seleccionada
  // y agregarlos dinámicamente a la lista de archivos

  // Ejemplo de agregado de archivos
  var archivos = [
    { nombre: "Link archivo 1", enlace: "#" },
    { nombre: "Link archivo 2", enlace: "#" },
  ];

  archivos.forEach(function(archivo) {
    var enlace = document.createElement("a");
    enlace.href = archivo.enlace;
    enlace.textContent = archivo.nombre;

    var itemLista = document.createElement("li");
    itemLista.appendChild(enlace);

    listaArchivos.appendChild(itemLista);
  });
}

function mostrarDetalles(version) {
  var contenedorDetalles = document.getElementById("contenedor-detalles");
  var tituloDetalles = document.getElementById("titulo-detalles");
  var listaDetalles = document.getElementById("lista-detalles");

  // Ocultar el contenido no deseado
  var contenedorArchivos = document.getElementById("contenedor-archivos");
  var contenedorConfiguracion = document.getElementById("contenedor-configuracion");
  contenedorArchivos.style.display = "none";
  contenedorConfiguracion.style.display = "none";

  // Mostrar el contenedor de detalles
  contenedorDetalles.style.display = "block";

  // Actualizar el título con la versión seleccionada
  tituloDetalles.innerHTML = "Detalles de la versión " + version;

  // Lógica para mostrar los detalles correspondientes a la versión seleccionada
  listaDetalles.innerHTML = ""; // Limpiar la lista de detalles

  // Aquí puedes agregar la lógica necesaria para obtener los detalles correspondientes a la versión seleccionada
  // y agregarlos dinámicamente a la lista de detalles

  // Ejemplo de agregado de detalles
  var detalles = [
    "Detalle 1",
    "Detalle 2",
    "Detalle 3"
  ];

  detalles.forEach(function(detalle) {
    var itemLista = document.createElement("li");
    itemLista.textContent = detalle;

    listaDetalles.appendChild(itemLista);
  });
}

function mostrarConfiguracion(version) {
  var contenedorConfiguracion = document.getElementById("contenedor-configuracion");
  var tituloConfiguracion = document.getElementById("titulo-configuracion");
  var listaConfiguracion = document.getElementById("lista-configuracion");

  // Ocultar el contenido no deseado
  var contenedorArchivos = document.getElementById("contenedor-archivos");
  var contenedorDetalles = document.getElementById("contenedor-detalles");
  contenedorArchivos.style.display = "none";
  contenedorDetalles.style.display = "none";

  // Mostrar el contenedor de configuración
  contenedorConfiguracion.style.display = "block";

  // Actualizar el título con la versión seleccionada
  tituloConfiguracion.innerHTML = "Configuración de la versión " + version;

  // Lógica para mostrar la configuración correspondiente a la versión seleccionada
  listaConfiguracion.innerHTML = ""; // Limpiar la lista de configuración

  // Aquí puedes agregar la lógica necesaria para obtener la configuración correspondiente a la versión seleccionada
  // y agregarla dinámicamente a la lista de configuración

  // Ejemplo de agregado de configuración
  var configuraciones = [
    "Archivo de configuración 1",
    "Archivo de configuración 2",
    "Archivo de configuración 3"
  ];

  configuraciones.forEach(function(configuracion) {
    var itemLista = document.createElement("li");
    itemLista.textContent = configuracion;

    listaConfiguracion.appendChild(itemLista);
  });
}