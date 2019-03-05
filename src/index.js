// VanillaJS v1.0
// Released into the Public Domain
// Your code goes here:



let texto_ingresado = ' ';
let offset;

  document.getElementById("cipher").addEventListener("click", cipherText);
  function cipherText(){
    document.getElementById("area2").value = '';
    texto_ingresado = document.getElementById("area1").value;
    offset = document.getElementById("desplazamiento").value;
    const result = cipher.encode(offset,texto_ingresado);
    document.getElementById("area2").innerHTML = result;
  }
  
  document.getElementById('clean').addEventListener("click", function() {
    document.getElementById("area1").value = "";
    document.getElementById("area2").innerHTML = "";
    document.getElementById("desplazamiento").value = "";
  });

  //Div de decifrado
  let decode_texto =' ';
  let salida;

  document.getElementById("decode").addEventListener("click", divDecode);
  function divDecode(){
    document.getElementById("caja2").value = '';
    decode_texto = document.getElementById("caja1").value;
    salida = document.getElementById("salto").value;
    const total = cipher.decode(salida,decode_texto);
    document.getElementById("caja2").innerHTML = total;
  }
  
  document.getElementById("cleaner").addEventListener("click", clean_1);
    function clean_1(){
      document.getElementById("caja1").value = "";
      document.getElementById("caja2").innerHTML = "";
      document.getElementById("salto").value = "";
  }