
const calcular = document.querySelector('.Calcular')
calcular.addEventListener('click', calcularFibonacci)

function calcularFibonacci() {
    const n = parseInt(document.getElementById("numero").value);

    const resultado = calcularNumeroFibonacci(n);
    document.getElementById("resultado").textContent = `F${n} = ${resultado}`;
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


