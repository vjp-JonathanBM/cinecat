const IVA = 0.21;
let mensaje = "Envio 5 €";

function calcularTotal(precios) {
    let total = 0;
    for (let i= 0; i<= precios.length; i++ ) {
        total += precios[i];
    }
    const ultimo = precios[precios.length -1];
    if (total > 100) {
        let mensaje = "Envio gratis";
    }
    return total*(1 + IVA);
}

function mostrarResumen(precios) {
    let ultimo = "EL ERROR";
    const total = calcularTotal(precios);
    console.log(`Total con IVA: ${total.toFixed(2)} €`);
    console.log(mensaje);
    console.log(`Ultimo producto: ${ultimo} €`);
}

mostrarResumen([40, 35, 30]);