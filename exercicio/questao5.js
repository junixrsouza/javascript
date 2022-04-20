function clicou(){
    var a=parseFloat(prompt("digite o primeiro numero: "));
    var b=parseFloat(prompt("digite o segundo numero: "));
    document.querySelector("#somar").innerHTML=" a soma dos valores é: "+(a+b);
    document.querySelector("#multiplicar").innerHTML=" a multiplicação dos valores é: "+(a*b);
    document.querySelector("#dividir").innerHTML=" a divisão dos valores é: "+(a%b);
    document.querySelector("#subtrair").innerHTML=" a subtração dos valores é: "+(a-b);
}