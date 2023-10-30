const comenzar = document.querySelector('.Iniciar')
comenzar.addEventListener('click', registroVotacion)

function registroVotacion(){
    const universidades = []
    const numeroUniversidades = parseInt(prompt('Ingrese el Numero de univeridades participantes'))

    for (let i = 1; i <= numeroUniversidades; i++) {
        let nombreUniversidad = prompt(`Ingrese el nombre de su universidad ${i}`)
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
        console.log(universidades);

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

    universidades.forEach((univers)=>{
        const {nombre, VotoA, VotoR, VotoN, VotoB} = univers;
            alert(`Numero de universidades: ${numeroUniversidades} \n`+
            `Universidad: ${nombre} \n`+
            `Voto: ${VotoA} \n`+
            `Voto: ${VotoR} \n`+
            `Voto: ${VotoN} \n`+
            `Voto: ${VotoB} \n`+
            `${nombre}: ${VotoA} Aceptan, ${VotoR} Rechazan, ${VotoB} Blancos, ${VotoN} Nulos \n`)
    })

/*  `Universidades que Aceptan : ${aceptan}\n`+
    `Universidades que Rechazan : ${rechazan}\n`+
    `Universidades con Empate : ${empate}\n` */


    
}