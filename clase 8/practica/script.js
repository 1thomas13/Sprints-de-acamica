class user{
    constructor(name,lastname,email,country,pass,repass){
        this.name=name
        this.lastname=lastname
        this.email=email
        this.country=country
        this.pass=pass
        this.repass=repass
    }
}

userArray=[]

document.getElementById("register").addEventListener("click",function() {
    const name =document.getElementById("name").value
    const lastname =document.getElementById("lastname").value
    const email =document.getElementById("email").value
    const country =document.getElementById("country").value
    const pass =document.getElementById("repass").value
    const repass =document.getElementById("pass").value

    if(name==""|| lastname=="" || email=="" || country=="" || pass=="" || repass==""){
        alert("Debe completar todos los campos")
        return
    }
    if(pass!==repass){
        alert("La contraseña y repitir contraseña deben coincidir")
        return
     }
    for(i=0;i<userArray.length;i++){
        if(email==userArray[i].email){
        alert("El email no puede estar duplicado")
        return
        }
    }
    const newUser = new user (name,lastname,email,country,pass,repass)
    userArray.push(newUser)
    console.log("Usuario registrado con exito")
})

document.getElementById("login").addEventListener("click",function() {
    const email = document.getElementById("email-login").value
    const pass = document.getElementById("pass-login").value
   let flag=false
    for(let i=0;userArray.length;i++){
        if(email==userArray[i].email){
            if(pass==userArray[i].pass){
                flag=true
                console.log("Ingreso exitoso, bienvenido "+userArray[i].name)
                return console.log(i)
               
            }
        }
    }
    if(flag==false){
        console.log("Compruebe la contraseña o el mail")
        return false
    }
})

