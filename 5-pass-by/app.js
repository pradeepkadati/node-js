// pass by value

var a = 1;

function changeValue(b){
    b = 2;
}

console.log(a);


// pass by reference 

var c = {};

c.prop1 = {};

function changeByRef(d){
    d.prop1 = function () {};
    d.prop2 = {};
}

console.log("before passing object");
console.log(c);

changeByRef(c);
console.log("after passing object");
console.log(c);