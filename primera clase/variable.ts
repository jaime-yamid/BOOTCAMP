const nombre: string = "mario"; //es mas sencillo por que es una constante 
console.log(nombre);

let fecha= new Date (1995, 11, 17);





type Persona = { nombre: string, edad: number };  //--->esto es un objeto como tal 
let persona: Persona = { nombre: "Ana", edad: 30 };

//las fehcas no se pueden tipo string es importante 
type Mascota= {nombre:string, edad:number, fCumple: Date, vacunas: string[], duenos:{nombre:string, mEdad:boolean}};
let Mascota1: Mascota = { nombre:"kushira", edad:6, fCumple:new Date(2018, 4, 20),
            vacunas:["rabia","moquillo", "leucemia", "otras"], duenos:{nombre:"Mario",mEdad: true,},};

console.log(Mascota1)


let tupla: [number, string, boolean];
tupla=[25, "hola", true]
let arreglos : string[]
arreglos=["german", "como estan", "bien o no", "@"]

// Declaración de la tupla
let tuplaDOS: [edad: number, nombre: string, activo: boolean];

// Asignación de valores a la tupla
tuplaDOS = [24, "german", false];

// Imprimir la tupla en la consola
console.log(tuplaDOS);




type tipo1 = [Number, string, boolean]
type tipo2 = []