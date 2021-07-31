function Greetr(){
    this.greetings = 'Hello !!!';
    this.greet = function(){
        console.log(this.greetings );
    }
}

module.exports = new Greetr();