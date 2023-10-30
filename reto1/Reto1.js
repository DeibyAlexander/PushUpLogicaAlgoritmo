/*   function ingresar(){
      const valor = document.querySelector('.input').value
      console.log(valor);
      const pantalla = document.querySelector('.pantalla')
      pantalla.innerHTML += `<h3>${valor}</h3>`
      
  }
 */

/*const select = document.querySelector('.button1')
select.addEventListener('click', ingresar)

const lista = []



function ingresar(){
    const valor = document.querySelector('.input1').value
    lista.push(Number(valor))
    const valor2 = document.querySelector('.input2').value
    lista.push(Number(valor2))

    const suma = lista[0] + lista[1]
    lista.push(Number(suma))

    const pantalla = document.querySelector('.pantalla')
    pantalla.innerHTML += `<h3>${lista[lista.length - 1]}</h3>`;

    console.log(lista);
   


} */

const calcular = document.querySelector('.Calcular')
calcular.addEventListener('click', calcularFibonacci)

function calcularFibonacci() {
    const n = parseInt(document.getElementById("numero").value);

    if (isNaN(n)) {
        alert("Por favor, ingrese un número entero válido.");
        return;
    }

    if (n < 0) {
        alert("Por favor, ingrese un número entero no negativo.");
        return;
    }

    const resultado = calcularNumeroFibonacci(n);
    document.getElementById("resultado").textContent = `El ${n}-ésimo número de Fibonacci es: ${resultado}`;
}

function calcularNumeroFibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    let resultado = 0;

    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return resultado;
}


