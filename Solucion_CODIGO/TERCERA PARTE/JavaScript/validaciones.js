
function validar() 
{
    var expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var valor = document.getElementById("email");
    if (!expresion.exec(valor.value)) {
        alert("El campo correo electrónico es incorrecto");
        document.getElementById("email").value = "";
    }    
}

function validarTelefono() 
{
    var expresion = /^[09][0-9]{1,9}$/;
    var valor = document.getElementById("telefono");
    if (!expresion.exec(valor.value)) {
        alert("El campo teléfono es incorrecto, solo 10 digitos");
        document.getElementById("telefono").value = "";

    }
}


function boton() {

    const myButton = document.getElementById("boton");
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = "Enviando datos ..........";

    setTimeout(function () {
        //console.log('Espera por favor...');
        myButton.textContent = "Datos enviados";
        myButton.style.opacity = 1;
        myButton.disabled = false;
    }, 1000);
}