function mezclar(lasTarjetas){
    let barajea
    let totalgrupoTarjeta = lasTarjetas.concat(lasTarjetas)
    barajea = totalgrupoTarjeta.sort(function(){
        return 0.5 - Math.random()
    })

    return barajea
}

function tosteca(lasTarjetas){
    let mesa = document.querySelector("#mesa")
    let dorito = mezclar(lasTarjetas)
    mesa.innerHTML= ""

    dorito.forEach(element => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = "<div class='tarjeta'>"+
                            "<div class='tarjeta__contenido'>"+
                            " <img src='"+element+"'>"+
                            "</div>"+
                            "</div>"
        
        mesa.appendChild(tarjeta)

    });
}