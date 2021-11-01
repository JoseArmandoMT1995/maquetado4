/*
  Prueba. Vacante: Programador WEB
  NOMBRE DEL POSTULANTE: José Armando Moreno Tolentino
  EMAIL:  armando.moreno.tolentino@gmail.com
*/
$(document).ready(function () {
    var correos=["prueba@gmail.com"];
    $("#formularioBoton").click(function () {
        //ventanaModal
        $('#ventanaModal').modal('show');
        var correoValido;
        var formEmail = $("#email").val();
        if (formEmail === undefined || formEmail === "") {
            correoValido = ["Ingrese su correo por favor","red"];
        } else {
            correoValido = validacionEmail(formEmail);
        }
        ventanaModal(correoValido);
    });
    function ventanaModal(correoValido){
        let mensaje = "<h3 style='color:"+correoValido[1]+"'>"+correoValido[0]+"</h3>"
        $("#mensajeModal").html(mensaje);
        $('#ventanaModal').modal('show');
    }
    function validacionEmail(formEmail) {
        var correoValido;
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(formEmail)) {
            return correoValido = validacionEmailRepetidos(formEmail);
        } else {
            return ["El correo esta escrito de forma incorrecta!","red"];
        }
    }

    function validacionEmailRepetidos(formEmail){
        if (correos.length===0) {
            return ["Se ha agregado el correo de forma correcta","green"];
        } else {
            var correoValido=false;
            for (let index = 0; index <= correos.length; index++) {
                if (correos[index]===formEmail) {  
                    correoValido=false;
                    break;
                } 
                if (correos[index]!==formEmail) {
                    correoValido=true;
                }
            }
            if (correoValido===true) {
                correos.push(formEmail);
                return ["Se ha agregado el correo de forma correcta","green"];
            }else{
                return ["El correo "+formEmail+" ya existe!","red"];
            }  
        }
    }
});