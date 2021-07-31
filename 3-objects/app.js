var person = {

    firstname: "pradeep",
    lastname:"kadati",
    greet : function(){
        console.log("Hello Welcome "+ this.firstname+ " "+this.lastname);
    }
};

person.greet();

console.log(person['firstname']);