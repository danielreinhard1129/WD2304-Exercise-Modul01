// celcius to fahrenheit
// let celcius = 60;
// const celToFah = celcius * 9 / 5 + 32;
// console.log(`${celcius} C = ${celToFah} F`);

// fahrenheit to celcius
// let fahrenheit = 185;
// const fahToCel = (fahrenheit - 32) * 5 / 9;
// console.log(`${fahrenheit} C = ${fahToCel} F`);

// odd or even
// let angka = 25;
// if( angka % 2 == 0){
//     console.log('Angka ' + angka + ' Genap');
// } else {
//     console.log('Angka ' + angka + ' Ganjil');
// }

// prime number or not, bil prima = bil yg di bagi 2 sisa nya 1.
// cara 1
// let num1 = 13;
// let bool = true;
// for(let i = 2; i < num1; i++){
//     if(num1 % i == 0){
//         bool = false;
//         break;
//     }
// }
// console.log(bool ? `${num1} is prime number` : `${num1} is not a prime number`);


// cara 2
// let angka = 5;
// let prima = true;
// if(angka > 1){
//     for(let i = 2; i < angka; i++){
//         if(angka % i == 0){
//             prima = false;
//             break;
//         }
//     }
//     if(prima){
//         console.log('Angka ' + angka + '  bilangan prima.');
//     } else {
//         console.log('Angka ' + angka + ' bukan bilangan prima.');
//     }
// }

// 1 to N (penjumlahan)
// cara 1
// let angka = 5;
// let res = (angka * (angka+1)) / 2;
// console.log(res);

// cara 2
// let angka = 10;
// let sum = 0;
// let message = "";
// let i = 0;
// for(i = 1; i <= angka; i++){
//     sum += i;
//     if (i != 1){
//         message += '-> '
//     }
//     message += `${i} `;
//     console.log(i)
// }
// console.log(`sum of the number ${message} = ${sum}`);

// factorial (perkalian)
// let angka = 5;
// let message;
// if(angka < 0){
//     console.log('error')
// } else {
//     let factorial = 1;
//     for(i = 1; i <= angka; i++){
//         factorial *= i;
//         console.log(factorial);
//     }
// }

// fibonacci
const angka = 8;
let a = 0, b = 1, next;
for (let i = 1; i <= angka; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
}

