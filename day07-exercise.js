// 1. function to check if two object are equal
// cara 1
let data1 = {nama : 'Daniel', hobi : 'tidur'};
let data2 = {nama : 'Budi', hobi : 'makan'};

const compare = (data1,data2) => {
    let objKey1 = Object.keys(data1).toString();
    console.log(objKey1);
    let objKey2 = Object.keys(data2).toString();
    let message = "";
    if(objKey1 == objKey2){
        message = "Object property sama"
    } else {
       message = "Object property tidak sama"
    }
    return message;
};

console.log(compare(data1,data2));

// cara 2
const similarObject = (objA, objB) => {
    let propA = Object.keys(objA).sort();
    let propB = Object.keys(objB).sort();
    let length = propA.length > propB.length ? propA.length : propB.length;
    let same = true;

    for(let i= 0; i < length; i++){
        if(propA[i] !== propB[i]){
            same = false;
        }
    }
    return same;
}
console.log(similarObject(data1,data2));

// 2. 
// cara 1
// const intersection = (obj1, obj2) => {
//     let tampilinDuplikat = {};

//     for(let i in obj1){
//         if(obj1[i] == obj2[i]){
//             tampilinDuplikat[i] = obj1[i];
//         }
//     }
//     return tampilinDuplikat;
// }
// console.log(intersection(
//     {
//         a: 1, b: 2
//     },
//     {
//         a:1, c:3
//     }));
    
// cara 2 mas abdi
    const intersection = (obj1, obj2) => {
        let tampilinDuplikat = {};
    
        for(let i in obj1){
            if(obj1[i] == obj2[i]){
                // tampilinDuplikat = {...tampilinDuplikat, [i]: obj1[i]} // cara 1 manfaatin spread
                tampilinDuplikat[i] = obj1[i] // cara 2 tanpa spread
            }
        }
        return tampilinDuplikat;
    }
    console.log(intersection(
        {
            a: 1, b: 2
        },
        {
            a:1, c:3
        }));
// 3. function to merge two array of student data and remove duplicate data
let array1 = [
    {name: 'Student 1', email: 'student1@gmail.com'},
    {name: 'Student 2', email: 'student2@gmail.com'}
]
let array2 = [
    {name: 'Student 1', email: 'student1@gmail.com'},
    {name: 'Student 3', email: 'student3@gmail.com'}
]

const remove = (data1, data2) => {

    const gabung = data1.concat(data2);
    let temp = [];
    for(let i = 0; i < gabung.length; i++){
        let newArr = temp.filter((val) => { // menghasilkan array baru sesuai dengan kondisi
            return val.name == gabung[i].name //kondisi
        })
        console.log(newArr);
        if(newArr.length == 0){ // cek newArr ada isinya apa tidak, kalo ada data nnya di push
            temp.push(gabung[i]) 
            console.log(gabung[i]);
        }
        // console.log(temp);
    }
    return temp;
}
console.log(remove(array1, array2));

// 4.  function that can accept input as an array of objects and switch all values into property and property into value
let input1 = [{name: 'David', age: 20}, {name: "ray", age: 23}];

const terbalique = (data1) => {
    let tampil = [];
    
    data1.forEach((item) => {
        let temp = {};
        
        console.log(item);
        for(key in item){
            console.log(item)
            console.log(item[key])
            temp[item[key]] = key
        }

        tampil.push(temp)
    });
    return tampil
}
console.log(terbalique(input1));

// 5. buat fungsi rekursif
// rekursif -> fungsi yang memanggil dirinya terus menerus.
const rekursif = (angka) => {
    if(angka == 0){
        return 1;
    }else {
        return angka * rekursif(angka - 1); // memanggil dirinya terus menerus
    }
}
console.log(rekursif(5))

