var firstname = 'Pradeep';
(function (lastname){
    
    // Scope of firstname is with in the function

    var firstname = 'Yogesh'
    console.log(firstname);
    console.log(lastname);

}('Kadati'));

console.log(firstname);

