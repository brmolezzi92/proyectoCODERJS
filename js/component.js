let compCreado = undefined;
export const COMPS = [
{
    id:1,
    nombre:"Boton 1",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},
{
    id:2,
    nombre:"Boton 2",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},
{
    id:3,
    nombre:"Card 1",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},
{
    id:4,
    nombre:"Card 2",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},
{
    id:5,
    nombre:"Seccion 1",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},
{
    id:6,
    nombre:"Seccion 2",
    codeHTML:"CODIGO HTML EN CONSTRUCCION",
    codeCSS:"CODIGO CSS EN CONSTRUCCION"
},

]


export class Component {
    constructor(id, nombre, codeHTML, codeCSS){
        this.id = id;
        this.nombre = nombre;
        this.codeHTML = codeHTML;
        this.codeCSS = codeCSS;
    }
}

let crear = prompt("Desea crear un nuevo componente?");
if(crear == "1"){
compCreado = new Component(COMPS[0].id,COMPS[0].nombre,COMPS[0].codeHTML,COMPS[0].codeCSS)
}
console.log(compCreado);