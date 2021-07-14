
let autos_array=[];

document.getElementById("agregar").addEventListener("click", function(){
    let auto= document.getElementById("marca").value;

    console.log(auto)
    
    autos_array.push(auto);

    console.log(autos_array);
})

