function ausgabe(value) {
    //Takes user input and logs it to the console
    console.log(`Input: ${value}`);
}

ausgabe("hello world");
ausgabe();
ausgabe(true);
ausgabe(5);
ausgabe(["drei", "vier"]);
ausgabe({});
ausgabe(ausgabe);

ausgabe(5 + 2);
ausgabe(5 + "2");
ausgabe(undefined);
let obj = { prop1: "foo", prop2: "bar" };
console.log(obj);
ausgabe(obj);
ausgabe(ausgabe());

function ausgabeMitReturn(value) {
    console.log(`Input: ${value}`);
    return "OK";
}

console.log(ausgabeMitReturn("test"));