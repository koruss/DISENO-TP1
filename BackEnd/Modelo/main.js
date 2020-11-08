var Direccion = require('./Direccion');
var LeafPersona = require('./LeafPersona');
var CompositePersona = require('./CompositePersona');

function clientCode(component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}
//------------- TODO
//TODO: CAMBIAR EL TIPO A UN ENUM POR EJEMPLO "JEFE", "ZONA" ETC ETC
var direccion_persona = new Direccion("provincia", "canton", "distrito", "senas", "zona");
var persona1 = new LeafPersona(33,"Juan","activo",50095967,"josue2@gmail.com",direccion_persona,"Jefe");
var persona2 = new LeafPersona(34,"Anner","activo",777777,"anner@gmail.com",direccion_persona,"Jefe");

var zona = new CompositePersona(1,"Zona miedo","Activa",3223232,"Zona1@gmail.com",direccion_persona,"Zona"); 
var rama = new CompositePersona(1,"Rama miedo","Activa",3223232,"Rama1@gmail.com",direccion_persona,"Rama")
rama.anadirHijo(persona1);
rama.anadirHijo(persona2);
zona.anadirHijo(rama);

console.log('-----------');
console.log('Composicion');
clientCode(zona);
console.log('-----------');



//------------- TODO
//TODO: BORRAR ESTO CUANDO SE DEJE DE NECESITAR 
/*
function clientCode(component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

const simple = new LeafPersona();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('-----------');

var tree = new CompositePersona();
const branch1 = new CompositePersona();
branch1.anadirHijo(new LeafPersona());
branch1.anadirHijo(new LeafPersona());
const branch2 = new CompositePersona();
branch2.anadirHijo(new LeafPersona());
tree.anadirHijo(branch1);
tree.anadirHijo(branch2);
clientCode(tree);
console.log('-------------');


function clientCode2(component1, component2) {
    if (component1.isComposite()) {
        component1.anadirHijo(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
}


clientCode2(tree, simple);*/