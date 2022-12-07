// 1. multiplication table
// let angka = 9;
// for(let i = 1; i <= 10; i++){
//     const hasil = i * angka;
//     console.log(
//         `${angka} x ${i} = ${hasil}`);
// }

// 2. palindrome or not
// let kata = 'madam';
// let reverseString = kata.split("").reverse().join("");
// if (kata === reverseString){
//     console.log('kata ' + kata + ' = palindrome');
// } else {
//     console.log('kata ' + kata + ' = bukan palindrome');
// };

// 3. cm to km
// let cm = 1000;
// let cmToKm = cm / 100000.0;

// console.log(cmToKm + ' km');

// 4. number to currency
// cara 1
// const harga = 1000;
// let rupiah = new Intl.NumberFormat('id-ID', {
//     style : "currency",
//     currency : "IDR"
// });
// console.log(rupiah.format(harga));

// cara 2
// let num = 1000;
// let str = num.toFixed(2).replace(".", ",");
// console.log(`Rp. ${str}`);

// 5. remove the first occurrence of a given “search string” from a string
// cara 1
// let kalimat = "daniel";
// const hilangin = kalimat.replace('ie', '');
// console.log(hilangin);


// 6. capitalize the first letter of each word in a string
// let kalimat = "purwadhika jakarta on campus";
// let kata = kalimat.split(" "); 
// // di ubah ke array dulu (menghilangkan spasi dan diubah ke koma)
// console.log(kata);

// // kata.length untuk mengetahui ada berapa isi dalam array.
// for (let i = 0; i < kata.length; i++) {
//     // console.log(kata[i],kata[i][0], i)
//     // hanya index ke 0 dari kata yang di ubah ke huruf besar + ambil kata dari index 1 sampir akhir
//     kata[i] = kata[i][0].toUpperCase() + kata[i].slice(1); 
// }

// // // join = mengubah isi array ke bentuk string
// console.log(kata.join(" ")); 

// 7. reverse a string
// cara 1 
// let kata = 'daniel';
// let reverseString = kata.split("").reverse().join(""); 
// // split = membagi string ke dalam array, reverse = membalikkan index dari depan ke belakang, join = menggabungkan isi array menjadi string.

// console.log(kata + " = " + reverseString);

// cara 2
let str = "daniel" 
let temp = "";
console.log(str.length);

for(let i = 0; i < str.length; i++){
    temp = temp + str[str.length - 1 - i]; // str[] -> kalimat dari index paling belakang. kenapa di -1 krn index di hitung dari 0
}
console.log(temp);


