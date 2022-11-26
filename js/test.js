const USER = "demo";
const PASSWORD = "demo123";
let compCreado = undefined;
//ARRAY DE COMPONENTES ------ ESTILOS Y ESTRUCTURA EN CONSTRUCCION.
const COMPS = [{
        id: 1,
        nombre: "button1",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },
    {
        id: 2,
        nombre: "button2",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },
    {
        id: 3,
        nombre: "Card 1",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },
    {
        id: 4,
        nombre: "Card 2",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },
    {
        id: 5,
        nombre: "Seccion 1",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },
    {
        id: 6,
        nombre: "Seccion 2",
        codeHTML: "CODIGO HTML EN CONSTRUCCION",
        codeCSS: "CODIGO CSS EN CONSTRUCCION"
    },

]

//CONSTRUCTOR DE OBJETOS
class Component {
    constructor(id, nombre, codeHTML, codeCSS) {
        this.id = id;
        this.nombre = nombre;
        this.codeHTML = codeHTML;
        this.codeCSS = codeCSS;
    }
}

//MUESTRA TODOS LOS COMPONENTES CON OPCION DE EXPORTAR UNITARIAMENTE.
//Recorrido For - Sentencia de exportacion
function mostrarComponentes() {
    for (i = 0; i < COMPS.length; i++) { //Inicio del recorrido
        nombre = COMPS[i].nombre
        alert(nombre);
        alert(`ID: ${compCreado.id}\nNOMBRE: ${compCreado.nombre}\nHTML: ${compCreado.codeHTML}\nCSS: ${compCreado.codeCSS}\n`);
        let exportar = prompt("¿Desea Exportar este componente?\n1-Si"); // Desea exportar?
        if (exportar == "1") {
            compCreado = new Component(COMPS[i].id, COMPS[i].nombre, COMPS[i].codeHTML, COMPS[i].codeCSS);
            console.log(`ID: ${compCreado.id}\nNOMBRE: ${compCreado.nombre}\nHTML: ${compCreado.codeHTML}\nCSS: ${compCreado.codeCSS}\n`);

            console.log(compCreado) // Visualiza en consola el objeto creado con la coleccion de datos
        } else {
            alert("Adios")
        }
    }
}

//FUNCION FILTRA COMPONENTES // BTN // CARD // SECTION
function busquedaComponentes(filtro) {
    if (filtro == "1") {
        const botones = COMPS.slice(0, 2)


        btn1 = new Component(botones[0].id, botones[0].nombre, botones[0].codeHTML, botones[0].codeCSS);
        alert(`ID: ${btn1.id}\nNOMBRE: ${btn1.nombre}\nHTML: ${btn1.codeHTML}\nCSS: ${btn1.codeCSS}\n`);

        btn2 = new Component(botones[1].id, botones[1].nombre, botones[1].codeHTML, botones[1].codeCSS);
        alert(`ID: ${btn2.id}\nNOMBRE: ${btn2.nombre}\nHTML: ${btn2.codeHTML}\nCSS: ${btn2.codeCSS}\n`);

    } else if (filtro == "2") {
        const cards = COMPS.slice(2, 4);

        card1 = new Component(cards[0].id, cards[0].nombre, cards[0].codeHTML, cards[0].codeCSS);
        alert(`ID: ${card1.id}\nNOMBRE: ${card1.nombre}\nHTML: ${card1.codeHTML}\nCSS: ${card1.codeCSS}\n`);

        card2 = new Component(cards[1].id, cards[1].nombre, cards[1].codeHTML, cards[1].codeCSS);
        alert(`ID: ${card2.id}\nNOMBRE: ${card2.nombre}\nHTML: ${card2.codeHTML}\nCSS: ${card2.codeCSS}\n`);

    } else if (filtro == "3") {
        const section = COMPS.slice(4, 7);

        section1 = new Component(section[0].id, section[0].nombre, section[0].codeHTML, section[0].codeCSS);
        alert(`ID: ${section1.id}\nNOMBRE: ${section1.nombre}\nHTML: ${section1.codeHTML}\nCSS: ${section1.codeCSS}\n`);

        section2 = new Component(section[1].id, section[1].nombre, section[1].codeHTML, section[1].codeCSS);
        alert(`ID: ${section2.id}\nNOMBRE: ${section2.nombre}\nHTML: ${section2.codeHTML}\nCSS: ${section2.codeCSS}\n`);
    } else {
        prompt("Opcion incorrecta");
    }
}

//FUNCION PRINCIPAL DE COMPONENTES
function compIntro() {
    let opcionUser = prompt("Selecciona alguna de las siguientes opciones. \n1- Ver todos los componentes.\n2- Filtrar componentes.\n");

    if (opcionUser == "1") {
        mostrarComponentes();
    } else if (opcionUser == "2") {
        let filtro = prompt(`Seleccione que elementos desea ver.\n
        1- Botones\n
        2- Cards\n
        3- Secciones`);
        busquedaComponentes(filtro);
    }
}
//FUNCION PRINCIPAL
function logIn() {


    let userUsing = false;

    alert("Bienvenido al constructor de componentes webs!");

    let userChoice = parseInt(prompt("Desea usar el constructor o salir del programa? \n 1)Usar constructor. \n 2)Salir."));
    if (userChoice == 1) {
        userUsing = true;
        while (userUsing) {
            let userLogin = prompt("Ingrese el nombre de usuario").toLowerCase();
            let userPass = prompt("Ingrese la contraseña");

            if (userLogin === USER && userPass === PASSWORD) {
                compIntro();
                userUsing = false;
            } else {
                alert("Usuario o contraseña incorrecta");
            }
        }
    } else if (userChoice == 2) {
        alert("Adios");
    } else {
        alert("Opcion Incorrecta");
    }
    return userChoice;
}

logIn();