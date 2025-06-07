function iniciar(){

tosteca(niveles[nivelActual].tarjeta)
movimientos=0
document.querySelector("#mov").innerText="00"
maxContador()
document.querySelector("#selecciona-nivel").classList.remove("visible")
document.querySelector("#endGame").classList.remove("visible")
document.querySelector("#timeOver").classList.remove("visible")
document.querySelector("#subeNivel").classList.remove("visible")

document.querySelectorAll(".tarjeta").forEach(element =>{
    element.addEventListener("click",nonono)
})

if (!modoRelax) {
    iniciarCronometro()
} else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto")
}

}

function reiniciar (){
    nivelActual = 0
    actualizaNivel()
    iniciar()
    actualizaContador()
}

function iniciaJuegoNormal(){
    modoRelax = false
    document.querySelector("#bienvenida").classList.remove("visible")
    iniciar()
    document.querySelector(".control-nivel").classList.add(".oculto")
}


function iniciaJuegoRelax(){
    modoRelax = true
    document.querySelector("#bienvenida").classList.remove("visible")
    iniciar()
}
