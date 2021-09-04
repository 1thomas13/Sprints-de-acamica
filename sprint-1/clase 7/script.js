
class estudiante{
    constructor(nombre,cuidad,edad){
        this.nombre=nombre;
        this.cuidad=cuidad;
        this.edad=edad;
    }
    verInfo(){
        console.log("Nombre: "+this.nombre+" Cuidad: "+this.cuidad+" Edad: "+this.edad)
    }
    verEdad(){
        if(this.edad>=18){
            console.log("Es mayor de edad")
        }
        else{
            console.log("Es menor de edad")
        }
    }
}

const estudiante1 = new estudiante ("Thomas barreto","Rio Grande",18);
const estudiante2 = new estudiante ("asdf","chaco",13);
const estudiante3 = new estudiante ("Marta","Buenos Aires",57);

estudiante1.verInfo();
estudiante1.verEdad();

estudiante2.verInfo();
estudiante2.verEdad();

estudiante3.verInfo();
estudiante3.verEdad();