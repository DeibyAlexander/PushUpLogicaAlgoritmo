const comenzar = document.querySelector('.Iniciar')
comenzar.addEventListener('click', registroVotacion)

function registroVotacion(){
    const universidades = []
    const numeroUniversidades = parseInt(prompt('Ingrese el Numero de univeridades participantes'))

    for (let i = 1; i <= numeroUniversidades; i++) {
        const nombreUniversidad = prompt(`Ingrese el nombre de su universidad ${i}`)
        let VotoA = 0
        let VotoR = 0
        let VotoN = 0
        let VotoB = 0
        
        while (true) {
            const voto = prompt(`INgrese el voto de un alumno de la universidad ${nombreUniversidad}, aceptar (A), rechazar (R), nulo (N) o blanco (B). Terminar ingreso de votos (X)`)
            if (voto === "X"){
                break;
            }
            
            switch(voto){
                case "A":
                    VotoA++;
                    break;
                case "R":
                    VotoR++;
                    break;
                case "N":
                    VotoN++;
                case "B":
                    VotoB++;
                    break;

                default: alert('Voto no valido, Ingrese A, R, N, B O X')
            }

            
        }

        const totalVotos = VotoA + VotoR + VotoN + VotoB;
        universidades.push({
            nombre: nombreUniversidad,
            VotoA: VotoA,
            VotoR: VotoR,
            VotoN: VotoN,
            VotoB: VotoB,
            totalVotos: totalVotos
        })

    }


    let aceptan = 0
    let rechazan = 0
    let empate = 0 

    for (const universidad of universidades) {
        const {VotoA, VotoR} = universidad
        if(VotoA> VotoR){
            aceptan++
        }

        if (VotoR > VotoA) {
            rechazan++
            
        }
        else{
            empate++
        }
        
        
    }

    alert('Resultados: \n' +
    `Aceptan : ${aceptan}\n`+
    `Rechazan : ${rechazan}\n`+
    `Empatan : ${empate}\n`)
}