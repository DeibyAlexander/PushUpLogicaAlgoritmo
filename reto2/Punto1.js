const sumar = document.querySelector('.operador')
sumar.addEventListener('click', calcular)



function calcular() {
    let n1 = parseInt(document.querySelector(".multiplicador").value);
    let n2 = parseInt(document.querySelector(".multiplicando").value);
    let resultado = 0;

    while (n1 >= 1) {
        if (n1 % 2 !== 0) {
            resultado += n2;    
        }
        n1 = Math.floor(n1 / 2);
        n2 *= 2;
    }

    document.querySelector(".resultado").textContent = `El resultado es: ${resultado}`;
}   