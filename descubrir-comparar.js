function nonono(){
    let descubierta
    let totalDescubierta = document.querySelectorAll(".descubierta:not(.acertada)")
    let tarjetasPendientes
    if (totalDescubierta.length > 1 ) {
        return
    }
    this.classList.add("descubierta")
    document.querySelector("#sonido-carta").cloneNode().play()

    descubierta = document.querySelectorAll(".descubierta:not(.acertada)")
    if (descubierta.length < 2) {
        return
    }

    comparar(descubierta)
    actualizaContador()
    

}

function comparar(tarjetasAComparar){
    if (tarjetasAComparar[0].innerHTML === tarjetasAComparar[1].innerHTML) {
        acierto(tarjetasAComparar)
    } else {
        
        error(tarjetasAComparar)
    }
    tarjetasPendientes= document.querySelectorAll(".tarjeta:not(.acertada)")
    if (tarjetasPendientes.length===0) {
        setTimeout(finalizar,1000)
    }
   
}