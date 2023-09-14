const fs = require('fs');

let data = fs.readFileSync('01uebung.js', 'utf-8');
console.log(data);

try{
    let data2 = fs.readFileSync('loesung12.js', 'utf-8');
    console.log(data2);
}
catch(err){
    console.log(err);
}



