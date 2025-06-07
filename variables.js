let modoRelax = false
let cronometro
movimientos = 0

let grupoTarjeta = [["el.png", "elemental1.png"], ["elemental2.png", "g312.png"], ["g855.png", "g951.png"], ["g1026.png", "g1041-7.png"] ]

let nivelActual = 0
let niveles = [


    {tarjeta:grupoTarjeta[0],
        movimientosMax:3

    },
    {tarjeta:grupoTarjeta[0].concat(grupoTarjeta[1]),
        movimientosMax:8
        
    },
    {tarjeta:grupoTarjeta[0].concat(grupoTarjeta[1]).concat(grupoTarjeta[2]),
        movimientosMax:15
    },

    {tarjeta:grupoTarjeta[0].concat(grupoTarjeta[1]).concat(grupoTarjeta[2].concat(grupoTarjeta[3])),
        movimientosMax:25
    }


]