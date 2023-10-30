const buscar = document.querySelector('.busqueda')
buscar.addEventListener('click', encontrarParesAmigables)

function sumaDivisores(n) {
    let divisores = [1];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisores.push(i);
            if (i !== n / i) {
                divisores.push(n / i);
            }
        }
    }
    return divisores.reduce((sum, divisor) => sum + divisor, 0);
}

function encontrarParesAmigables() {
    const rangoInicial = 1000;
    const rangoFinal = 1500;
    const paresAmigables = [];

    for (let num1 = rangoInicial; num1 <= rangoFinal; num1++) {
        const sumDiv1 = sumaDivisores(num1);
        if (sumDiv1 > num1 && sumDiv1 <= rangoFinal) {
            const sumDiv2 = sumaDivisores(sumDiv1);
            if (sumDiv2 === num1 && num1 !== sumDiv1) {
                paresAmigables.push([num1, sumDiv1]);
            }
        }
    }

    if (paresAmigables.length > 0) {
        document.getElementById("resultado").textContent = `Pares amigables en el rango [${rangoInicial}, ${rangoFinal}]: ${paresAmigables[paresAmigables.length -1] }`;
    } else {
        document.getElementById("resultado").textContent = `No se encontraron pares amigables en el rango [${rangoInicial}, ${rangoFinal}].`;
    }
}
