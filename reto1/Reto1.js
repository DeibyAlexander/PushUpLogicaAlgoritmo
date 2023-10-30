
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


