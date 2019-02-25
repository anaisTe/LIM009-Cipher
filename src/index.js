



let texto_ingresado;
let des;

document.getElementById("botVamos").addEventListener("click", divCifrar);

function divCifrar(){
  document.getElementById("divCifrar").className += "show"; 
}

document.getElementById("cipher").addEventListener("click", cipherText);

function cipherText(){
  document.getElementById("area2").value = '';

  texto_ingresado = document.getElementById("area1").value.toUpperCase();
  des = document.getElementById("desplazamiento").value;
  const result = cipher.encode(des, texto_ingresado);
  document.getElementById("area2").value = result;
}

document.getElementById('clean').addEventListener("click", function() {
  document.getElementById("area1").value = "";
  document.getElementById("area2").value = "";
  document.getElementById("desplazamiento").value = "";
});

//Div de decifrado
let decode_texto;
let saltos;
document.getElementById("botComenzar").addEventListener("click", divDecifrar);
function divDecifrar(){
  document.getElementById("divDecifrar").className += "show";
}

document.getElementById("decode").addEventListener("click", divDecode);
function divDecode(){
  document.getElementById("caja2").value = '';
  decode_texto = document.getElementById("caja1").value.toUpperCase();
  saltos = document.getElementById("salto").value;
  const total = cipher.decode(saltos, decode_texto);
  document.getElementById("caja2").value = total;
}


  document.getElementById("cleaner").addEventListener("click", clean_1);
  function clean_1(){
    document.getElementById("caja1").value = "";
    document.getElementById("caja2").value = "";
    document.getElementById("salto").value = "";
  }

