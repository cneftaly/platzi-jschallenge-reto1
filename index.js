const plataformas = {
    Netflix : 139,
    HBOMax: 99,
    Amazon: 99,
    Disney: 159,
    Apple: 69,
    Claro: 115
}

const btn = document.getElementById('BotonEnviar')
const peliculasPorMes = document.getElementById('PeliculasPorMes')
const costoPorBoleto = document.getElementById('CostoPorBoleto')
const mensaje = document.getElementById('Mensaje')

btn.onclick = () => {
    const formulario = document.getElementById('formulario')
    if (!formulario.reportValidity()) return

    let costoCine = peliculasPorMes.value * costoPorBoleto.value
    let costoPlataformas = obtenerTotalPlataformas()

    if (costoPlataformas === 0) {
        mensaje.innerText = "Elige una o mas plataformas para continuar"
        return
    }

    if (costoCine > costoPlataformas) {
        mensaje.innerText = 'Definitivo, prepara tu sofá y disfruta mejor el cine desde tu sala 📺'
    } else {
        mensaje.innerText = 'Corre al cine que ya empieza la función 🍿'
    }
}

function obtenerTotalPlataformas() {
    const plataformasSeleccionadas = document.querySelectorAll('section input')

    let total = 0
    plataformasSeleccionadas.forEach((elemento) => {
        if(elemento.checked) {
            total += plataformas[elemento.id] || 0
        }
    })

    return total
}
