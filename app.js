const fs = require("fs")
const readline =require("readline-sync")
const replaceall =require("replaceall")
const wn = require("written-number")
const treat = require('./treat')
wn.defaults.lang = 'ptPT';

function start(){
    return new Promise((resolve,reject) => {
        let str = fs.readFileSync('./file/in.txt', 'utf8');
        resolve(str.toString())
    })
}

function ask1(str){
    const index = readline.question("tem numero ? \n [1 - sim] \n [ 2 - nao] : ");
    const obj  = { str , resp: index};
    return obj;
}

function ask2(obj){
    if(parseInt(obj.resp) == 1){
        let number = readline.question("ate qual numero traduzir?")
        for(let i = 0; i<= number; i++){
            //implemenar lógica de subistituir número por cardinal
            var cardinal = wn(i);
            while(obj.str.includes(" "+i.toString()+" ")){
                obj.str = obj.str.replace(" "+i.toString()+" ", " "+cardinal+" ")
            }
        }
        return treat(obj.str); 
    }
    return treat(obj.str);
}

function save(str){
    return fs.appendFileSync('./file/out.txt', str.concat("\n"), { encoding: 'utf8'});
}

start()
    .then(str => ask1(str))
    .then(obj => ask2(obj))
    .then(obj => save(obj))


