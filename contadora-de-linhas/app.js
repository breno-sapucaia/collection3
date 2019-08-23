const fs = require('fs');

function start(){
    return new Promise((resolve,reject)=>{
        try{
            let str = fs.readFileSync("./coleta.txt",'utf8')
            resolve(str);
        }catch{
            fs.writeFileSync("./coleta.txt", "","utf8")
            let str = fs.readFileSync("./coleta.txt",'utf8')
            resolve(str);
        }
    })
}

function lerLinhas(str){
    let vetor = str.split(".");
    console.log(vetor.length) 
}
start()
    .then(str => lerLinhas(str))