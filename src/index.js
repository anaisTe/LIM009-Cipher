let texto_ingresado;
let des;
let result = 0;

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