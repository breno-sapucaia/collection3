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
  if (texto.includes("'")) {
    texto = replaceAll("'", "", texto);
    console.log('Aspas simples retiradas');
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
  if( texto.includes(":")){
    texto = replaceAll(":","",texto);
    console.log("dois pontos retirado")
  }
  if( texto.includes("/")){
    texto = replaceAll("/","",texto);
    console.log("barra retirada retirado")
  }
  if( texto.includes("[")){
    texto = replaceAll("[","",texto);
    console.log("[ retirado")
  }  
  
  if( texto.includes("]")){
    texto = replaceAll("]","",texto);
    console.log("] retirado")
  }  

  if( texto.includes("#")){
    texto = replaceAll("#","sharp",texto);
    console.log("# to sharp")
  }
  if( texto.includes("=")){
    texto = replaceAll("=","é igual a",texto);
    console.log("= tratado")
  }
  if( texto.includes("-")){
    texto = replaceAll("-","menos",texto);
    console.log("- tratado")
  }
  if( texto.includes("")){
    texto = replaceAll("-","",texto);
    console.log("- tratado")
  }
  if( texto.includes("“")){
    texto = replaceAll("“","",texto);
    console.log("“ tratado")
  }
  
  if( texto.includes("”")){
    texto = replaceAll("”","",texto);
    console.log("” tratado")
  }
  if( texto.includes("\\")){
    texto = replaceAll("\\","",texto);
    console.log("\\ tratado")
  }
  
  return texto;
};
