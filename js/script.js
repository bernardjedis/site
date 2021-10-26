var nomeCompleto = 'Bernard Faria'; // STRING
var idade = 33; // NUMBER
var bolo = true; // BOOLEAN
var array = [23, 'bernard', true, false, 'Paulo', 2333, 323, 7723]; // ARRAY

var menuButton = document.getElementById('menuToggle');
var menu = document.getElementById('menu');

menuButton.onclick = function () {
  menu.classList.toggle('ativo');
  menuButton.classList.toggle('ativo');
};

var h1 = document.querySelector('h1');
h1.textContent = 'teste';

// console.log(array[2]);

// var valor1 = 30;
// var valor2 = 2;

// console.log(valor1 === 4);

// if (!valor1) {
// 	console.log('não existe valor1');
// } else {
//   console.log('existe valor1');
// }

// function multiplicacao(num1, num2) {
//   var resultado = num1 * num2;
//   console.log(resultado);
//   return resultado;
// }

// function soma(num1, num2) {
//   var resultado = num1 * num2;
//   console.log(resultado);
//   return resultado;
// }

// multiplicacao(23, 4);
// soma(23, 45);
