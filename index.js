function laCajaDePandora(numero){
return (numero%2 === 0) ? parToBinario(numero) : imparToHexa(numero)
    //proximamente escribiremos codigo aquí
}

function imparToHexa(num) {
return Number(parseInt(num,16));
}

function parToBinario(num) {
return Number(num.toString(2));
}

console.log(laCajaDePandora(20))

function EduardoToledo () {
    let datos = [ 
        {name: "Eduardo",
        edad: 39,
        nacionalidad: "Argentino"
}]
    return {datos}
}

console.log(EduardoToledo())