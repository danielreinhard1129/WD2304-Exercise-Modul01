// 1. triangle pattern
const segitiga = function(height){
    
    let string = "";
    let count = 1;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            if(count <= 9){
                string += "0" + count + " "; 
                count++;
            } else {
                string += count + " ";
                count++;
            }
        }
        string += "\n";
    }
    return string;
}
console.log(segitiga(5));


// 2. function that can loop the number of times according to the input

const game1 = function(n){

    message = "";

    for(let i = 1; i <= n; i++){ //mencetak angka 1 - angka yg kita masukan (n)
        
        if(i % 3 == 0 && i % 5 == 0){ // ini di taro di atas krn biar ini di cek deluan dan tidak di lewati 
             message +=  "FizzBuzz" + "\n";
        } else if (i % 5 == 0){
             message +=   "Buzz" + "\n";
        } else if(i % 3 == 0){
             message +=  "Fizz" + "\n"
        } else {
             message += i + "\n";
        }

    }

    return message;
}
console.log(game1(10))

// 3. BMI
// const bmi = function(weight, height){
//     let bmi = weight / (height/100) ** 2;
//     console.log(bmi);

//     if (bmi < 18.5){
//         return "less weight";
//     } else if (bmi < 24.9){
//         return "ideal";
//     } else if (bmi < 29.9){
//         return "overweight";
//     } else if (bmi < 39.9){
//         return " very overweight";
//     } else {
//         return "obesity";
//     }
// };
// console.log(bmi(70, 170));

// 4. function to remove all odd numbers in an array

// let angka = [1,2,3,4,5,6,7,8,9,];
// let genap = angka.filter(fungsi); // filter array diatas dengan function bernama fungsi

// function fungsi(angka){
//     return angka % 2 == 0;
// }
// console.log(genap);

// ------------------------------------------------------------------------------------

// // sama saja dengan cara diatas (filter)
// let genap = angka.filter(function(item) { // membuat array baru yang di filter
//        return (item % 2 == 0);
//     });

// 5. function to split a string and convert it into an array
// Cara 1 menggunakan split
// let kalimat = "Hello World";
// let kata = kalimat.split(" ");
// console.log(kata);

//=========================================

// 1. buat fungsi
// 2. buat tampungan array dan temporary string
// 3. loop kalimat dengan panjang kalimat
// 4. buat temporary string di isi per tiap kata dari kalimat
// 5. buat kondisi jika karakter mencapai spasi, push karakter yang sudah tertampung di temp string ke tampungan array kosong
// 6. kosongkan temporary string menjadi string kosong
// 7. return kata dan tampilkan

// Cara 2 tanpa Split
// const strToArray = function(kalimat){
//     let kata = [];
//     let tmpStr = "";

//     for(let i = 0; i < kalimat.length; i++){   
//         if(kalimat.charAt(i) == " "){
//             console.log(tmpStr);
//             kata.push(tmpStr);
//             tmpStr = ""; // dikosongkan untuk kata selanjutnya
//             continue;
//         }
//         console.log(kalimat.charAt(i))
//         tmpStr += kalimat.charAt(i); // memisahkan tiap huruf pada kalimat
//     }
//     kata.push(tmpStr); // push sisa karakter setelah temp string di kosongkan krn if tidak mendapat karakter spasi
//     return kata;
// }
// console.log(strToArray("Hello World Daniel"));

