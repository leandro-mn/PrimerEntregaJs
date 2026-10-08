const userName = prompt("¿Cuál es tu nombre?"); 
const bornYear = parseInt(prompt("¿En qué año naciste?")); 
const favouriteColour = prompt("¿Cuál es tu color favorito?"); 
let edadCalculada = 2026 - bornYear;
let mensaje = "Hola " + userName + ", tenés aproximadamente " + edadCalculada + " años y tu color favorito es el " + favouriteColour + ".";
alert(mensaje);