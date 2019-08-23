const fs = require('fs');

function start(){
    return new Promise((resolve,reject)=>{
        let str = fs.readFileSync("./coleta.docx",'utf8')
        resolve(str);
    })
}

function lerLinhas(str){
    let vetor = str.split(".");
    console.log(vetor.length) 
}
start()
    .then(str => lerLinhas(str))