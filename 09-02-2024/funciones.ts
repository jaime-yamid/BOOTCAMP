
// //llamada a la funcion y uso del resultado

// // const resultado: number - sumar(5,3);
// // console.log("la suma es:", resultado);



// // const resultado2: number = sumar();
// // console.log("la suma es:", resultado2);

// function dividir(a: number, b: number): number{
//     const resultado3: number = a/b;
//     return resultado3;
// }
// //asi llamo la funcion
// dividir(12,3)
// console.log("la division es:", dividir(12,3))




// // Declaración de una función sin parámetros y sin tipo de retorno
// function saludo(): void {
//     console.log("¡Hola!");
//   }
  
// //   // Llamada a la función
//   saludo();
  
//   // Declaración de una función con parámetros y tipo de retorno
//   function sumar(a: number = 5, b: number = 10): number {
//     return a + b;
//   }
  
// //   // Llamada a la función y uso del resultado
//   const resultado: number = sumar(5, 3);
//   console.log("La suma es:", resultado);
//   const resultado2: number = sumar();
//   console.log("La suma es:", resultado2);

//   function dividir(a: number, b: number): number{
//     const resultado3: number = a/b;
//     return resultado3;
//   }
// // Así se llama la función 
//   dividir(12,3)
//   console.log("La division es:", dividir(12,3))
// //funcion con tipo de dato string y boleean
// function texto(a:string = "hola mundo", b: boolean = true, c: number, d: number = 12):any {
// return a
// }



function saludar(nombre: string, saludo?: string): void {
    if (saludo) {
      console.log(`${saludo}, ${nombre}!`);
    } else {
      console.log(`Hola, ${nombre}!`);
    }
  }

  saludar("tu nombre");
  saludar("Tu nombre","buen dia");


const lista:number[] = [1, 2, 5, 20, 2445,];
lista.forEach((numero, i)=> {
    console.log('EN la posicion bla bla')
})

// con for OF
for (const element of lista) {
    console.log(element);
  }

  // Convertir a for tradicional
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element);
  }

  // Destructuracion de objetos
const persona={nombre:'Juan'
  const{nombre, ciudad} = persona;

  console.log(nombre)