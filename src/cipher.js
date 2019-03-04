window.cipher = {
  encode: (offset,texto_ingresado) => {
    /* Acá va tu código */
    let text_result = 'A';
    let number;
    for (let i = 0; i < texto_ingresado.length; i++) {
        number = texto_ingresado.charCodeAt(i);
      if(number >= 65 && number <= 90) {
        text_result += String.fromCharCode((number-65+parseInt(offset))%26+65);
      }
      else if(number === 32){
        text_result += ' ';
      }
      else if(number >=97 && number <=122){
        text_result += String.fromCharCode((number-97+parseInt(offset))%26+97);
      }else{
        text_result = "olvidaste colocar tu mensaje" ;
      }
    }
    return text_result;
  },
      
  decode: (salida,decode_texto) => {
    /* Acá va tu código */
    let descifrado = '';
    let number1;
      for (let i = 0; i < decode_texto.length; i++) {
        number1 = decode_texto.charCodeAt(i);
        if(number1 >= 65 && number1 <= 90) {
        descifrado += String.fromCharCode((number1-90-parseInt(salida))%26+90);
      } 
      else if(number1 === 32){
        descifrado += ' ';
      }
      else if(number1 >=97 && number1 <=122){
        descifrado += String.fromCharCode((number1-122-parseInt(salida))%26+122);
      }else{
        descifrado = "olvidaste colocar tu mensaje";
      }
    }
    return descifrado;
  }
}