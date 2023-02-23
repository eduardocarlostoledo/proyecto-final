function laCajaDePandora(numero){
    //proximamente escribiremos codigo aquí
    let result=[];
    if(numero%2===0){
        while(numero>1){
            result.unshift(numero%2);
            numero=Math.floor(numero/2);
        }
        result.unshift(1);
    }
    else{
        while(numero>1){
            result.unshift(numero%16);
            numero=Math.floor(numero/16);
            switch(numero%16){
                case 10: result.unshift("A");
                case 11: result.unshift("B");
                case 12: result.unshift("C");
                case 13: result.unshift("D");
                case 14: result.unshift("E");
                case 15: result.unshift("F"); 
                default: result.unshift(numero%16)
            }
        }
    }
    return result.join("");
}

const Claudio=()=>{
    return {
        nombre: "Claudio",
        edad:24,
        nacionalidad:"argentino"
    }
}