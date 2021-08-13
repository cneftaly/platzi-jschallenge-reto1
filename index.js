const btn = document.getElementById('BotonEnviar')
const peliculasPorMes = document.getElementById('PeliculasPorMes')
const costoPorBoleto = document.getElementById('CostoPorBoleto')
const mensaje = document.getElementById('Mensaje')

btn.onclick = () => {
    mensaje.innerText = ""
    const formulario = document.getElementById('formulario')
    ajustarAtributoRequerido();
    if (!formulario.reportValidity()) return

    const costoCine = peliculasPorMes.value * costoPorBoleto.value
    const costoPlataformas = obtenerTotalPlataformas()

    if (costoPlataformas === 0) {
        mensaje.innerText = "Elige una o mas plataformas para continuar"
        return
    }

    if (costoCine === costoPlataformas) {
        mensaje.innerText = "Gastas lo mismo en ambos lados, así que tu decide 😉"
    } else if (costoCine > costoPlataformas) {
        mensaje.innerText = 'Definitivo, prepara tu sofá y disfruta el cine desde tu sala 📺'
    } else {
        mensaje.innerText = 'Corre al cine que ya empieza la función 🍿'
    }
}

function obtenerTotalPlataformas() {
    const plataformasSeleccionadas = document.querySelectorAll('section input[type="checkbox"]')

    let total = 0
    plataformasSeleccionadas.forEach((elemento) => {
        if(elemento.checked) {
            total += Number(document.getElementById('Costo' + elemento.id).value)
        }
    })

    return total
}

function ajustarAtributoRequerido() {
    const plataformasSeleccionadas = document.querySelectorAll('section input[type="checkbox"]')

    plataformasSeleccionadas.forEach((elemento) => {
        const elementoActual = document.getElementById('Costo' + elemento.id)
        if(elemento.checked) {
            elementoActual.setAttribute('required', true)
        } else {
            elementoActual.removeAttribute('required')
        }
    })
}
