// luas persegi panjang
// let p = 10;
// let l = 5;
// const luas = p*l;
// console.log('luas persegi panjang : ' + luas);

// keliling persegi panjang
// let a = 10;
// let b = 5;
// const keliling = 2 * (a+b);

// console.log('keliling persegi panjang : ' + keliling);

// diameter lingkaran
// let r = 7;
// let diameter = 2*r;
// console.log('diameter lingkaran : ' + diameter);
// // keliling lingkaran
// const p = 3.14;
// let keliling = p * diameter;
// console.log('keliling lingkaran : ' + keliling);
// // luas lingkaran
// let luasLingkaran = p * r ** 2;
// console.log('luas lingkaran : ' + luasLingkaran);

// mencari sudut ketiga dari segitiga
// let a = 80;
// let b = 65;
// let c = 180 - (a + b);
// console.log('sudut c adalah  : ' + c);

// perbandingan 2 tanggal
// let date1 = new Date("2022-01-29");
// let date2 = new Date("2022-01-31");
// let bedaTanggal = Math.abs(date1 - date2); //math absolute hasilnya akan selalu positif
// console.log(bedaTanggal)
// let bedaHari = Math.round(bedaTanggal / (1000*3600*24)); // math round untuk membulatkan angka | (default 1 hari)
// console.log('perbedaan hari tanggal 1 dan tanggal 2 : ' + bedaHari);

// conver hari ke tahun, bulan, hari
// cara pertama
// let hari = 3600;
// let tahun = Math.floor(hari/365);
// let bulan = Math.floor((hari % 365) / 30);
// let tanggal = Math.floor((hari % 365) % 30);
// console.log(tahun + ' tahun, ' + bulan + ' bulan, ' + hari + ' hari.');

// cara kedua pake loop
// const hari = 500;
// const hitung = h => {
//     let tahun = 0, bulan = 0, hari = 0;
//     while(h){
//        if(h >= 365){
//           tahun++;
//           h -= 365;
//         } else if(h >= 30) {
//           bulan++;
//           h -= 30;
//         } else {
//           hari++;
//           h--;
//         }
//     };
//     return {
//        tahun, bulan, hari
//     };
//  };
//  console.log(hitung(hari));