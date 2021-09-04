

class perro{
    constructor(nombre,raza,estado){

        this.nombre=nombre
        this.raza=raza
        this.estado=estado
    }
    modificarEStadoAdopcion(estado){
        this.estado=estado
    }
    informarEstadoAdopcion(){
        return this.estado
    }
}

const perro1 = new perro("nombre","bulldog","En adopcion")

perrera=[]

document.getElementById("cargar").addEventListener("click", function(){
    do{
        let nombre= prompt("Ingrese el nombre del perro: ")
        let raza= prompt("Ingrese la raza del perro: ")
        let estado= prompt("Ingrese el estado del perro(1-En adopcion 2-Proceso de adopcion 3-Adoptado)")
        perroAgregado = new perro(nombre,raza,estado)

        perrera.push(perroAgregado)
    }while(window.confirm("¿Quiere cargar otro perro?"))
})

function listarPerros(){
    for(i=0;i<perrera.length;i++){
        console.log("Perro: ",perrera[i].nombre,"raza: ",perrera[i].raza,"Estado: (1-En adopcion 2-Proceso de adopcion 3-Adoptado)",perrera[i].estado)
    }
}

document.getElementById("modificar").addEventListener("click", function(){

    if(perrera.length>0){
        let nombre =prompt("Ingrese el nombre del perro que desea modificar")
        for(i=0;i<perrera.length;i++){
           if(perrera[i].nombre==nombre){
               perrera[i].estado=prompt("Ingrese el nuevo estado del perro")
           }
           else{
               console.log("El nombre ingresado no existe")
           }
        }
    }
    else{
        console.log("No tiene perros para modificar")
    }
})