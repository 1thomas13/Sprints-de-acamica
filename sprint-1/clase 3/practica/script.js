document.getElementById("btn-suma").addEventListener("click",function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resultado = parseInt(n1)+ parseInt(n2);
    console.log("Resutado:", resultado);
    document.getElementById("resultado").innerHTML="El resultado es: " + resultado;
})

document.getElementById("btn-resta").addEventListener("click",function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resultado = parseInt(n1) - parseInt(n2);
    console.log("Resutado:", resultado);
    document.getElementById("resultado").innerHTML="El resultado es: " + resultado;
})

document.getElementById("btn-multiplicar").addEventListener("click",function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resultado = parseInt(n1) * parseInt(n2);
    console.log("Resutado:", resultado);
    document.getElementById("resultado").innerHTML="El resultado es: " + resultado;
})

document.getElementById("btn-dividir").addEventListener("click",function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resultado = parseInt(n1) / parseInt(n2);
    console.log("Resutado:", resultado);
    document.getElementById("resultado").innerHTML="El resultado es: " + resultado;
})

document.getElementById("btn-sumac").addEventListener("click",function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resultado = parseInt(n1*n1) + parseInt(n2*n2);
    console.log("Resutado:", resultado);
    document.getElementById("resultado").innerHTML="El resultado es: " + resultado;
})