
let numero = 0;

const calcularCuadrado=(numero)=>{
    return numero*numero;
}
    console.log("El resultado del cuadrado es: " +calcularCuadrado(5))    

function calcularFactorial(numero) {
    let resultado = numero;
    for(i=numero-1;i!=1;i--){
        resultado=resultado* i;
    }
    return resultado;
}

console.log("El resultado del factorial es: "+calcularFactorial(7)); 

const calcularAreaCirculo=(numero)=>{

    const pi = 3.1416;

    resultado= pi * (numero*numero);
    
    return resultado;

}
console.log("El resultado del area del circulo es: "+calcularAreaCirculo(7)); 

function validarArray(){

    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    let user_password =[["hola","mundo"],["1thomas13","1234"],["asdf","contraseña"],]

    console.log(user_password)

    for(i=0;i<user_password.length;i++){
        if(user_password[i][0]==user){
            
            if(user_password[i][1]==password){
                console.log("El usuario "+user_password[i][0]+" Ingreso con exito");
                return true;
            }
        }
        else{
            console.log("Este usuario no existe");
        }
    }
}
console.log(validarArray())

document.getElementById("validacion").addEventListener("click", function(){

    document.getElementById("div").innerHTML=validarArray();
})