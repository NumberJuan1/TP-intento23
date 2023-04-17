const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})

function mostrar(){
var formulario = document.getElementById('formu');
formulario.style.display = block;
}

 
function comprobantepago() {
            // Obtener los valores del formulario
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;

            // Crear un nuevo documento PDF
            var doc = new jsPDF();

            // Agregar contenido al PDF
            doc.text(20, 20, 'Formulario de ejemplo');
            doc.text(20, 30, 'Nombre: ' + nombre);
            doc.text(20, 40, 'Apellido: ' + apellido);
            doc.text(20, 50, 'Email: ' + email);

            // Guardar el PDF como un archivo
            doc.save('formulario.pdf');
        }
