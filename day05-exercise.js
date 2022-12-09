// Exercise 08-12-2022
// 1. get lowest, highest, and average value in array (with & without sort function)
let arrValue = [2,1,8,9,0,22,27,18,12];

const coba1 = (angka) => {

    let lowest;
    let highest;
    let average = 0;
    let totalNumber = 0;

    angka.sort((a,b) => a-b); // a,b a-b untuk jika ada isi array yg puluhan tetap bisa di sort sesuai dengan besarnya
    console.log(angka)
    lowest = angka[0]
    highest = angka[angka.length - 1];
    // for(let i = 0; i < angka.length; i++){
    //     totalNumber += angka[i];
    //     average = totalNumber / angka.length; 
    // }
    angka.forEach(element => {
        totalNumber += element
    })
    return `low = ${lowest}, High = ${highest}, Avg = ${totalNumber / angka.length}`; //kalo pake forloop Avg = ${average}

}
console.log(coba1(arrValue))

const coba2 = (angka) => {
    let lowest = Math.min(...angka);
    let highest = Math.max(...angka);
    let totalIsiArray = angka.reduce((accumulator, currentValue) => { // currentValue adalah angka atau arrValue
       return accumulator + currentValue
    }, 0); // 0 adalah accumulator ex: let number = 0

    return `low = ${lowest}, High = ${highest}, Avg = ${totalIsiArray / angka.length}`;
}
console.log(coba2(arrValue))

// 2. concenating
let kata = ['Hiu', 'Paus', 'Ikan Pari', 'Belut'];

const coba3 = (kata) => {
    // cara 1
    let print = "";
    for(i = 0; i < kata.length; i++){
        if(kata[i] == kata[kata.length - 1]){
            print += " and " + kata[i];
        } else if(kata[i] == kata[kata.length - 2]){
            print += kata[i] + " ";
        } else {
            print += kata[i] + ", "
        }
    }
    return print;

    // cara 2
    // return kata.slice(0, kata.length -1).join(', ') + ` and ${kata[kata.length -1]}`
}
console.log(coba3(kata));

// 3. calculate each element from two arrays
let arr1 = [1,2,3];
let arr2 = [3,2,1,7];
let length = arr1.length > arr2.length ? arr1.length : arr2.length;

const jumlahin = (arr1, arr2) => {
    let arr3 = [];
    for(i = 0; i < length; i++){
        arr3.push((arr1[i]  || 0) + (arr2[i] || 0)) // || untuk mengecek index arr1 true/false kalau true menggunakan arr[i] kalau false pake 0
    }
    return arr3;
}
console.log(jumlahin(arr1,arr2));

// 4. add element to the end of array but the element shoul
let element = 4;
let array = [1,2,3];

const fungsi1 = (element, array) => {
    for(i = 0; i < array.length; i++){
        if(element === array[i]){
            return "Angka sudah ada";
        }
    }
    array.push(element);
    // array[array.length] = element // cara tanpa menggunakan push
    return array;
}
console.log(fungsi1(element, array))