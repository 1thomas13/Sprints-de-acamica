//para estar habilitada/o debe cumplir con las 
//siguientes condiciones:
//Todos los campos son obligatorios
//Ser mayor de 18 años
//Tener licencia de conducir
//Que la licencia no haya caducado

document.getElementById("enviar").addEventListener("click", function(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const opcion = document.getElementById("opcion").value;
    const caducidad = document.getElementById("caducidad").value;

    if(nombre === "" || apellido=== ""|| edad==="" || opcion==="" || caducidad===""){
        console.log("Debe completar todos los campos");
    }
   
    if(edad >= 18 && opcion=="si" && caducidad>20200712){
        console.log("Puede conducir");
    }
    else{
        console.log("No comple con todos los requisitos, NO puede conducir")
    }

})