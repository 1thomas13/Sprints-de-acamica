let autosArray=[];

document.getElementById("agregar").addEventListener("click",function(){

    let auto = document.getElementById("marca").value;

    autosArray.push(auto);

    console.log(autosArray);
    
    document.getElementById("lista").innerHTML="["+autosArray+"]";

})

document.getElementById("eliminarp").addEventListener("click",function(){

    let auto = document.getElementById("marca").value;

    autosArray.shift(auto);

    console.log(autosArray);
    
    document.getElementById("lista").innerHTML="["+autosArray+"]";
})

document.getElementById("eliminaru").addEventListener("click",function(){

    let auto = document.getElementById("marca").value;

    autosArray.pop(auto);

    console.log(autosArray);
    
    document.getElementById("lista").innerHTML="["+autosArray+"]";
})