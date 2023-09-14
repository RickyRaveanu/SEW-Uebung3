const fs = require('fs');

let exercises = ['./01uebung.js', './02uebung.js', './03uebung.js', './04uebung.js', './05uebung.js', './06uebung.js'];

for (let exercise of exercises){
    let content = fs.readFileSync(exercise, 'utf-8');
    let line = content.split('\n');
    console.log(line[2]);
}
