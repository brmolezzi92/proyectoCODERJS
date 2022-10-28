console.log("link");
const USER = "demo";
const PASSWORD = "demo123";

let userUsing = false;

alert("Bienvenido al constructor de componentes webs!");
let userChoice = parseInt(prompt("Desea usar el constructor o salir del programa? \n 1)Usar constructor. \n 2)Salir."));

//FUNCION SELECCION DE COMPONENTE
//FUNCION SELECCION DE COMPONENTE

function seleccionBoton(){
    let selecBtn = parseInt(prompt(`Selecciona un componente\n1)Boton Neon\n2)Boton Animado\n3)Boton Lineas`));
    switch (selecBtn) {
        case 1:
            console.log("funcionando")
            console.log(`<!-- Copia y pega HTML -->
            <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            BOTON
            </button>
            `)
            console.log(` /* Copia y pega CSS */
            body{
                display: flex;
                align-items: center;
                height:100vh;
                width:100vw;
                justify-content: center;
                gap: 300px;
                background-color: blueviolet;
            }
            
            button{
                position: relative;
                font-size: 1.25rem;
                width: 200px;
                height: 80px;
                outline: none;
                border: none;
                background-color: rgb(100, 26, 169);
                color: rgb(242, 161, 249);
                cursor: pointer;
                transition: .5s;
                overflow: hidden;
            }
            
            button:hover{
            color: white;
            }
            
            button>span{
                position: absolute;
                background: white;
                transition: .5s;
            }
            
            button span:nth-child(1){
                width: 100%;
                height: 1px;
                top: 0;
                left: -100%;
            }
            
            button span:nth-child(2){
                width: 100%;
                height: 1px;
                bottom: 0;
                right: -100%;
            }
            button span:nth-child(3){
                width: 1px;
                height: 100%;
                top: -100%;
                right: 0;
            }
            button span:nth-child(4){
                width: 1px;
                height: 100%;
                bottom: -100%;
                left: 0;
            }
            
            button:hover span:nth-child(1){
                left: 0;
            }
            button:hover span:nth-child(2){
                right: 0;
            }
            button:hover span:nth-child(3){
                top: 0;
            }
            button:hover span:nth-child(4){
                bottom: 0;
            }
            `)
            break;
        case 2:
            console.log(`<!-- Copia y pega HTML -->
                
                `)
                console.log(` /* Copia y pega CSS */
                
                `)
                break;    
        case 3:
            console.log(`<!-- Copia y pega HTML -->
            
            `)
            console.log(`/* Copia y pega CSS */
            
            `)
            break;
        default:
            alert("Opcion incorrecta")
            break;
    }
}

if(userChoice == 1){
    userUsing = true;
    while(userUsing){
        let userLogin = prompt("Ingrese el nombre de usuario").toLowerCase();
        let userPass = prompt("Ingrese la contraseña");
        
        if(userLogin === USER && userPass === PASSWORD){
            seleccionBoton();
            alert("Revisa la consola");
            userUsing = false;
        }else{
            alert("Usuario o contraseña incorrecta");
        }
    }
}else if(userChoice==2){
    alert("Adios");
}else{
    alert("Opcion Incorrecta");
}

