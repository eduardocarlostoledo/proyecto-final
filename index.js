function laCajaDePandora(numero){
    //proximamente escribiremos codigo aquí
    let result=[];
    //si el numero es par:
    if(numero%2===0){
     while(numero>1){
        result.unshift(numero%2);
        numero=Math.floor(numero/2);
     }
     result.unshift(1)
    }else{
        while(numero>0) {
            switch(numero%16){
                case 10: result.unshift("A"); break;
                case 11: result.unshift("B"); break;
                case 12: result.unshift("C"); break;
                case 13: result.unshift("D"); break;
                case 14: result.unshift("E"); break;
                case 15: result.unshift("F"); break;
                default:result.unshift(numero%16)
            }
            numero=Math.floor(numero/16);
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