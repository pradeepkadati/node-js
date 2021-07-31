// function constructor
function Person(firstname,lastname){

    this.firstname = firstname;
    this.lastname = lastname;
}
// prototype inheritence is on the object
Person.prototype.greet = function(){

    console.log("Hello "+this.firstname+ " "+this.lastname);
};

var pradeep = new Person("pradeep","kadati");

console.log(pradeep.firstname);

pradeep.greet();

var yogesh = new Person("Yogesh","Kadati");
yogesh.greet();

console.log(pradeep.__proto__);
console.log(yogesh.__proto__);
console.log(yogesh.__proto__ === pradeep.__proto__);