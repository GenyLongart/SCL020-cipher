const cipher = {
  encode: function (texto, desplazamiento){
    let resultado= "";
    const abecedario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto){
        for (let i=0; i<texto.length; i++){
            if (abecedario.indexOf(texto[i]) !=-1){
                let posicion = ((abecedario.indexOf(texto[i])+desplazamiento)%26);
                resultado += abecedario[posicion];

            }
            else
            resultado += texto[i];
            
        }
    
    } 
    return resultado;

},

decode: function (texto, desplazamiento){
  if (!texto)
  return "";
const abecedario= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
desplazamiento = (desplazamiento % 26 - 26) % 26;
return texto.replace(/[A-Z]/ig, c=> abecedario[(abecedario.indexOf(c)-desplazamiento)%26]);

}


};

export default cipher;
