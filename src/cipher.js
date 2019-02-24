window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código */
    let text_result = '';
    for (let i = 0; i < string.length; i++) {
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
  decode: () => {
    /* Acá va tu código */
    
  }
}