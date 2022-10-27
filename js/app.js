<<<<<<< HEAD
=======
console.log("link");
>>>>>>> appFirst
const USER = "demo";
const PASSWORD = "demo123";

let userUsing = false;

alert("Bienvenido al constructor de componentes webs!");
userChoice = parseInt(prompt("Desea usar el constructor o salir del programa? 1)Usar constructor. 2)Salir"));

if(userChoice== 1){
    userUsing = true;
    while(userUsing == true){
        let userLogin = prompt("Ingrese el nombre de usuario").toLowerCase();
        let userPass = prompt("Ingrese la contraseña");
        
        if(userLogin === USER && userPass === PASSWORD){
<<<<<<< HEAD
            
=======
            seleccionBoton();
            alert("Revisa la consola");
            userUsing = false;
>>>>>>> appFirst
        }else{
            alert("Usuario o contraseña incorrecta");
        }
    }
}else if(userChoice==2){
    alert("Adios");
}else{
    alert("Opcion Incorrecta");
}



<<<<<<< HEAD
=======

>>>>>>> appFirst
