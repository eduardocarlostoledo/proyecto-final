function laCajaDePandora(numero){
    //proximamente escribiremos codigo aquí
    /* que reciba como parámetro un número entero. Si es un número par, debe convertirlo a binario y retornarlo, y si es impar, convertirlo a hexadecimal y retornarlo. */
    return (numero % 2 === 0) ? parToBinario(numero) : imparToHexa(numero)

}

let imparToHexa = (num) => {
    var result = ''
    var numero = num
    while(numero > 0) {
         result = numero % 16
         numero/=16
    }
    return result
    
}

function parToBinario(num) {
    // tu codigo aca
    var result = '';
    var numero = num;
    while(numero > 0){
      result = numero % 2 + result;
      numero = Math.floor(numero / 2);
    }
    return result;
  }



console.log(laCajaDePandora(4))
console.log(laCajaDePandora(123))
console.log(laCajaDePandora(3))



function nameAgeAndNacionality (){
    let data = [
        {
            name: 'Lucia',
            age: 31,
            nacionality: 'Argentina'
        }
    ]
    return {data}
}

console.log(nameAgeAndNacionality())