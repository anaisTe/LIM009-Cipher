window.cipher = {
  encode: (offset,texto_ingresado) => {
    /* Acá va tu código */
    let text_result = '';
    for (let i = 0; i < texto_ingresado.length; i++) {
      let number = texto_ingresado.charCodeAt(i);
      if(number >= 65 && number <= 90) {
        let desplazamiento = parseInt(offset);
        let result = (number-65+desplazamiento)%26+65;
        let sum = String.fromCharCode(result); 
        text_result += sum;
      }
      if(number === 32){
        text_result += ' ';
      }
    }
    return text_result;
  },
      
  decode: (salida,decode_texto) => {
    /* Acá va tu código */
    let decifrado = '';
      for (let i = 0; i < decode_texto.length; i++) {
        let number1 = decode_texto.charCodeAt(i);
        if(number1 >= 65 && number1 <= 90) {
        let input_salto = parseInt(salida);
        let pen = (number1+65-input_salto)%26+65;
        let res = String.fromCharCode (pen);
        decifrado += res;
      } 
      if(number1 === 32){
        decifrado += ' ';
      }
    }
    return decifrado;
  }
}