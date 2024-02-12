class Persona {

constructor (nombre, apellido ,edad, correo) {
    this.nombre = nombre;
    this.apellido - apellido;
    this.edad = edad;
    this.correo = correo;
} 

Saludar () {
    console.log('Hola mi nombre es '+ this.nombre+''+this.apellido);
}
}

let persona1 = new Persona('Juan','Perez',33,'ejemplo@ejemplo.com');
let persona2 = new Persona('pepita','perez',23,'ejemplo2@ejemplo.com');
let persona3 = new Persona('ANA',34,'ejemplo3@ejemplo.com');
let persona4 = new Persona();

