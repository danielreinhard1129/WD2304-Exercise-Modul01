// 1. 
class Student {
    
    constructor(nama, email, birth, score){
        this.nama = nama;
        this.email = email;
        this.birth = birth;
        this.score = score;
        this.age = this.getAge();
    }

    getAge = () => {
        let birthYear = parseInt(this.birth.split('-')[0]);
        console.log(birthYear);
        let date = new Date();
        return date.getFullYear() - birthYear;
    }

}

let dbStudent = [
    new Student("Edo", "edo@gmail.com", "1997-04-25", 85),
    new Student("Andrew", "and@gmail.com", "1998-11-12", 100),
    new Student("Zafran", "zaf@gmail.com", "1992-02-01", 80),
    new Student("Budi", "budi@gmail.com", "1996-11-11", 75),
];


let tampil = () => {
    let max, min, avg, maxAge, minAge, avgAge;

    let sortedSiswaMax = dbStudent.sort((a, b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0); // pakai ternary operator 
    max = sortedSiswaMax[0];
    console.log(max);
    
    let sortedSiswaMin = dbStudent.sort((a, b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0);
    min = sortedSiswaMin[sortedSiswaMax.length - 1];
    console.log(min);

    let totalSiswa = dbStudent.reduce(function (acc, obj) { return acc + obj.score; }, 0);
    console.log(totalSiswa)
    avg = totalSiswa / dbStudent.length;
    console.log(avg);
// ==========================================================================================================================================================
    let sortedAgeMax = dbStudent.sort((a, b) => (a.age - b.age)); // langsung tanpa ternary operator
    maxAge = sortedAgeMax[0];
    console.log(maxAge);

    let sortedAgeMin = dbStudent.sort((a, b) => (a.age - b.age));
    minAge = sortedAgeMin[sortedAgeMax.length - 1];
    console.log(minAge);

    let totalSiswaAge = dbStudent.reduce(function (acc, obj) { return acc + obj.age; }, 0);
    console.log(totalSiswaAge)
    avgAge = totalSiswaAge / dbStudent.length;
    console.log(avgAge);


    return {
        score: {
            highest:max,
            lowest:min,
            average: avg
        },
        age: {
            highest:maxAge,
            lowest:minAge,
            average: avgAge
        }
    }
    
};
console.log(tampil(dbStudent))

// 2. 
class Product {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}

let dbProduct = [
    new Product("Apel", 5000),
    new Product("Lemon", 10000)
];

class Transaction {
    constructor() {
        this.cart = [];
        this.total = 0;
    }

    addToCart = (product = '', qty = 1) => {
        let amount = 0;
        this.cart.push({
            product: { ...product, qty },
            subTotal: qty * product?.price // tanda ? untuk mengetahui di class product ada object price atau tidak (hanya sebagai proteksi)
        })
        this.cart.forEach(val => amount += val.subTotal)
        this.total = amount;
    }

    show = () => {
        return 'Your total transaction Rp.' + this.total.toLocaleString('id');
    }
    

    checkout = () => {
        let print = '';
        this.cart.forEach((val, idx) => {
            print += `${idx + 1}. ${val.product.name}, ${val.product.price.toLocaleString('id', { style: "currency", currency: "IDR" })}, Qty: ${val.product.qty}, ${val.subTotal.toLocaleString('id', { style: "currency", currency: "IDR" })}\n`;
        })
        print += `Total payment : ${this.total.toLocaleString('id', { style: "currency", currency: "IDR" })}`

        this.cart = [];
        return print;
    }
}

let transaction = new Transaction()
console.log(dbProduct);
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 3);
console.log(transaction.show());
console.log(transaction.checkout());











