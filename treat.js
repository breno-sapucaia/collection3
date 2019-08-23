const replaceAll = require("replaceAll");
module.exports = texto => {
  if (texto.includes("(")) {
    texto = replaceAll("(", "", texto);
    console.log('Parenteses "(" retirados');
  }
  if (texto.includes(")")) {
    texto = replaceAll(")", "", texto);
    console.log('Parenteses ")" retirados');
  }
  if (texto.includes('"')) {
    texto = replaceAll('"', "", texto);
    console.log('Aspas """ retiradas');
  }
  if (texto.includes(",")) {
    texto = replaceAll(",", "", texto);
    console.log("Virgulas ',' retiradas");
  }
  if (texto.includes("%")) {
    texto = replaceAll("%", "por cento", texto);
    console.log("porcentagem tratada");
  }
  if (texto.includes("$")){
      texto = replaceAll("$", "dólar", texto);
      console.log("dólar tratado")
  }
  if (texto.includes("&")){
    texto = replaceAll("&", "e", texto);
    console.log("& tratado");
  }
  if (texto.includes(";")){
    texto = replaceAll(";", "", texto);
    console.log("; retirado");
  }
  return texto;
};
