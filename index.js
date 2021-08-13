const plataformas = {
    Netflix : 139,
    HBOMax: 99,
    AmazonPrime: 99,
    DisneyPlus: 159,
    AppleTV: 69,
    ClaroVideo: 115
}

const btn = document.getElementById('BotonEnviar')
const peliculasPorMes = document.getElementById('PeliculasPorMes').value
const costoPorBoleto = document.getElementById('CostoPorBoleto').value
const mensaje = document.getElementById('Mensaje')

btn.onclick = () => {
    const formulario = document.getElementById('formulario')
    if (!formulario.reportValidity()) return

    let costoCine = peliculasPorMes * costoPorBoleto
    let costoPlataformas = obtenerTotalPlataformas(obtenerPlataformasSeleccionadas())

    if (costoCine > costoPlataformas) {
        mensaje.innerText = 'Definitivo, prepara tu sofá y disfruta mejor el cine desde tu sala'
    } else {
        mensaje.innerText = 'Corre al cine que ya empieza la función'
    }
}

function obtenerTotalPlataformas(plataformas) {
    let resultado = 0
    
    return resultado
}

function obtenerPlataformasSeleccionadas() {
    const plataformas = document.
}