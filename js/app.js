//Validación

var text = prompt("Escribe una frase"); {
if (text !== '' && text.replace(/[^0-9]/g, ' ') !== text)  {
		alert("Frase para encriptar");
} else {
  alert('Error vuelva a ingresar la frase'); //si lo anterior no se cumple, se llamara nuevamente al prompt
  var text = prompt('Ingrese la frase a encriptar');
if (text !== '' && text.replace(/[^0-9]/g, ' ') !== text)  {
	alert("Frase para encriptar");
}
}  
}
