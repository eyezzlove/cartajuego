function iniciarCronometro(){
var segundos = 0 
var minutos= 3
var segundosTexto
var minutosTexto
var cronometro

function actualizaContador(){
    segundos--
    if (segundos<0) {
        segundos = 59
        minutos--}

    if (minutos<0) {
        segundos = 0
        minutos = 0
        clearInterval(cronometro)
        timeOver()
    }
segundosTexto = segundos
minutosTexto = minutos
    if (segundosTexto<10) {
        segundosTexto = "0" + segundos
    }

    if (minutos<10) {
        minutosTexto = "0" + minutos
    }
    document.querySelector("#segundos").innerText = segundosTexto
    document.querySelector("#minutos").innerText = minutosTexto
        
}
cronometro = setInterval(actualizaContador, 1000)

}


