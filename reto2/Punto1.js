const sumar = document.querySelector('.operador')
sumar.addEventListener('click', calcular)

const lista = []

console.log(lista);

function calcular(){
    let n1 = parseInt(document.querySelector(".multiplicador").value);
    let n2 = parseInt(document.querySelector(".multiplicando").value);
    
    if (!n1 <= 1) {
        let n11 = n1 / 2 
        let n22 = n2 * 2

        
        if(n22 % 2 === 0){
        console.log(true);
        } else {
        console.log(false);
        }

        console.log(n11);
        console.log(n22);
        
        
    }

    
}