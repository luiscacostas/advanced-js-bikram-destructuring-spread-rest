//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let ana = {};
for(let i = 0; i < empleados.length; i++){
    if(empleados[i].name === 'Ana'){
        ana = {name : empleados[i].name , email : empleados[i].email};
        break;
    }
}
console.log(ana)
// Otra forma const ana = empleados.find(empleado => empleado.name === 'Ana');

let emailLuis = {};
for(let i = 0; i < empleados.length; i++){
    if(empleados[i].name === 'Luis'){
        emailLuis = empleados[i].email;
        break;
    }
}
console.log(emailLuis);

let a = 5;              //cambiar la posicion
let b = 3;
//Usando destructuring
[a , b] = [b , a];
console.log(a, b)

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

let { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

const sumEveryOther = (...numeros)=>{
    let resultado = 0;
    numeros.forEach((e)=>{
        resultado += e;
    })
    return resultado;
}
console.log(sumEveryOther(6,8,2,3,1));

const addOnlyNums =(...arg)=>{
    return arg.filter(arg => typeof arg === 'number').reduce((sum, numero)=> sum + numero, 0)
}
console.log(addOnlyNums(1, 'perro', 2, 4))

const countTheArgs = (...arg)=>{ //numero indefinido de argumentos en forma de array(rest)
    let countArg = arg.length;
    return countArg;
}
console.log(countTheArgs("gato", "perro"))

//8 Combinar dos arrays
const combineTwoArrays = (arr1, arr2)=>{//Toma dos parametros de arrays
    let arrCombinado = [...arr1, ...arr2]; //expandimos  los elementos de los array en otro
    return arrCombinado;
}
console.log(combineTwoArrays(['pedro', 'peter', 'pablo'], ['ana', 'maria', 'lucia']));

//Ejercicio 10 Combinar todos los arrays que recibe
const combineAllArrays = (...allArrays)=>{
    let arrCombinado = [];

    allArrays.forEach((array)=>{
        arrCombinado.push(...array)
    })
    return arrCombinado;
}
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);
// const combineAllArrays = (...arrs)=>{
//     return arrs.flat();
// }

//Ejercicio 11 Elevar al cuadrado y devuelva la suma
const sumAndSquare = (...numeros)=>{
    let resultado = 0;
    numeros.forEach((n)=>{
       resultado += Math.pow(n, 2)//n base, 2 exponencial
    })
    return resultado;
}
sumAndSquare(2, 3, 4, 5, 6, 7);

function onlyUniques(...arg) {
    return arg.filter((iactual, iocurrencia) => arg.indexOf(iactual) === iocurrencia);
}
// const sumAndSquare = (...numeros)=>{
//     return numeros.reduce((acc, num)=> acc + num*num, 0)
// }


