const presentacionEscribiendo = document.querySelector('#presentacionEscribiendo')

function imprimirPresentacion (){
    const presentacion = `
    <p class="presentacion__nombre">Hola, mi nombre es Sebastián D'Alessandro</p>
    `
    presentacionEscribiendo.innerHTML = presentacion
    setTimeout(() => {
        imprimirPresentacion()
    }, 6000);
}

imprimirPresentacion()

