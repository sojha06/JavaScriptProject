function greetHello(name){
    return "Hello " + name + "!";
}
console.log(greetHello("Shivam"));

const greetHi = function(name){
    console.log('Hi ' + name + '!');
};
greetHi('Megha');

const greetHiWithArrow = (name) => {
    console.log('Hi ' + name + ' With Arrow');
};
greetHiWithArrow('Megha');

const obj = {
    name : "Megha",
    regular : function(){
        console.log("regular Hi " + this.name);
    },
    withArrow : () => {
        console.log("regular Hi " + this.name);
    }
};