let array=[3, 4, 5, 34, 19, 12];

array.push(88);

console.log(array);
console.log(array[2]);
console.log(array.length);
for (let output of array) {
    console.log(`value: ${output}`);
}

for (let index in array) {
    console.log(`idx: ${index} value: ${array[index]}`);
}


let firstElement = array.shift();
console.log(firstElement);
console.log(array);

let lastElement = array.pop();
console.log(lastElement);
console.log(array);

