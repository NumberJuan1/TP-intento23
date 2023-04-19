
function comprobantepago() {
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var deb = document.getElementById('tarj').value;

            var doc = new jsPDF();

            doc.text(20, 20, 'Muchas gracias por tu compra. ',);
            doc.text(20, 30, 'Nombre: ' + nombre);
            doc.text(20, 40, 'Apellido: ' + apellido);
            doc.text(20, 50, 'Email: ' + email);
            doc.text(20, 60, 'Numero tarjeta: ' + deb);

            doc.save('Recibo_Pago.pdf');
        }
        
        
function mostrar(){
    document.getElementById('formu').style.display = 'block';
}



 $('#mejora').validate({
        rules: {
            nombre: 'required',
            email: {
                required: true,
                email: true
            },
            mensaje: 'required'
        },
        messages: {
            nombre: 'Por favor ingrese su nombre',
            email: {
                required: 'Por favor ingrese su dirección de correo electrónico',
                email: 'Por favor ingrese una dirección de correo electrónico válida'
            },
            mensaje: 'Por favor ingrese un mensaje'
        },
        submitHandler: function(form) {
            var nombre = $('#nombre').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();

            $.ajax({
                url: 'https://reqres.in/api/users?page=2', 
                method: 'POST', 
                data: {
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                },
                success: function(response) {
                    console.log('Éxito:', response);
                    alert('¡Mensaje enviado con éxito!');
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    alert('Error al enviar el mensaje. Por favor inténtelo nuevamente.');
                }
            });
        }
    });


 


