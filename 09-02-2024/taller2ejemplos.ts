
let numerico: number = 2; /* declaracion de tupo numerico */
let cadenas: string = "hola mundi"; /* declaracion string o cadena de caracteres */
let booleanos:boolean= true; /*¨declaracion de tupo booleano tru o false */

let arreglo: number [] = [1, 2, 3, 4] /*corchetes curadados son para arreglos eb typescript*/
type TipoObjeto = { a: string, b: number, c:boolean, d: any, f:string[] }
let variableobjeto: TipoObjeto = {a: "nathalia", b:52, c: false, d:"@hioo", f :["A","B","C"] };
console.log('Tengo ${numerico} mascotas y un loro  ${cadenas} cada ${arreglo[2]} horas');
console.log(variableobjeto)