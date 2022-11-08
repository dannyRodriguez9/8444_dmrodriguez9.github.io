var checkbox= document.getElementById("propietario");
var checkbox2= document.getElementById("tercero");
var formulario=document.getElementById("informacionConfidencial");
var botonEnviarDatos=document.getElementById("boton");
botonEnviarDatos.disabled=true;
//Para el checkbox tercero

checkbox.addEventListener("click",function()
{
  var checked = checkbox.checked;
  if(checked)
  {
    botonEnviarDatos.disabled=false;
  }
  else{
    botonEnviarDatos.disabled=true;
  }    
 
})

//Para el checkbox tercero

checkbox2.addEventListener("click",function()
{
  var checked = checkbox2.checked;
  if(checked)
  {
    formulario.style.visibility="visible"; //visible muestra
  }
  else{
    formulario.style.visibility="hidden"; //hidden oculta
  }    
 
})


