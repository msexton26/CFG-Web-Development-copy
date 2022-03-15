var a = parseInt(prompt());
var b = parseInt(prompt());
var sym = prompt("Pick a operator(+,-,/,*,%)");
if(sym == "+"){
    add(a,b);
} else if(sym == "-"){
    sub(a,b);
} else if(sym == "*"){
    mul(a,b);
} else if(sym == "/"){
    div(a,b);
} else if(sym == "%"){
    mod(a,b);
} else{
    alert("That is not part of the option");
}

function add(a,b){
    console.log(a+b);
    alert(a+b);
}
function sub(a,b){
    console.log(a-b);
    alert(a-b);
}
function mul(a,b){
    console.log(a*b);
    alert(a*b);
}
function div(a,b){
    console.log(a/b);
    alert(a/b);
}
function mod(a,b){
    console.log(a%b);
    alert(a%b);
}