function printName(){
    let helloName = "Hello John";
    function inner(){
        console.log(helloName);
    }
    return inner;
}

const print = printName();

setTimeout(() => {
    print();
}, 1000);
