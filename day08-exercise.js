// 1. Employee Salary

class Employee {
  constructor(nama) {
    this.nama = nama;
  }
}

class FulltimeEmployee extends Employee {
  constructor(nama) {
    super(nama);
    this.totalJam = 0;
    this.gaji = 0;
    this.data = [];
    this.totalSalary = 0;
  }

  addWorkHour(checkIn, checkOut) {
    this.totalJam = checkOut.split(":")[0] - checkIn.split(":")[0];
    console.log(this.totalJam);
    this.data.push({
      nama: this.nama,
      dailyhour: this.totalJam,
      dailySalary:
        this.totalJam > 6 ? this.totalJam * 75000 : this.totalJam * 100000,
    });
    return this.data;
  }

  calculateSalary() {
    let amount = 0;
    this.data.forEach((val) => (amount += val.dailySalary));
    this.totalSalary = amount;
    return `Your total salary Rp. ${this.totalSalary.toLocaleString("id")}`;
  }
}

class ParttimeEmployee extends Employee {
  constructor(nama) {
    super(nama);
    this.totalJam = 0;
    this.gaji = 0;
    this.data = [];
    this.totalSalary = 0;
  }

  addWorkHour(checkIn, checkOut) {
    this.totalJam = checkOut.split(":")[0] - checkIn.split(":")[0];
    console.log(this.totalJam);
    this.data.push({
      nama: this.nama,
      dailyhour: this.totalJam,
      dailySalary:
        this.totalJam > 6 ? this.totalJam * 30000 : this.totalJam * 50000,
    });
    return this.data;
  }

  calculateSalary() {
    let amount = 0;
    this.data.forEach((val) => (amount += val.dailySalary));
    this.totalSalary = amount;
    return `Your total salary Rp. ${this.totalSalary.toLocaleString("id")}`;
  }
}
let fulltimeEmployee = new FulltimeEmployee("Daniel");
console.log(fulltimeEmployee.addWorkHour("09:00", "15:00"));
console.log(fulltimeEmployee.addWorkHour("09:00", "16:00"));
console.log(fulltimeEmployee.calculateSalary());

let parttimeEmployee = new ParttimeEmployee("Budi");
console.log(parttimeEmployee.addWorkHour("09:00", "15:00"));
console.log(parttimeEmployee.addWorkHour("09:00", "16:00"));
console.log(parttimeEmployee.calculateSalary());

// Cara 2 mas abdi
// class Employee {
//   constructor(_name) {
//       this.name = _name;
//   }
// }

// class FullTime extends Employee {
//   constructor(_name) {
//       super(_name);
//       this.working = [];
//       this.fullTime = {
//           salaryA: 100000,
//           salaryB: 75000
//       }
//   }

//   addWorking = (_checkIn, _checkOut) => {
//       console.log(parseInt(_checkIn.split(':')[0]));
//       console.log(parseInt(_checkOut.split(':')[0]));
//       console.log(parseInt(_checkOut.split(':')[0]) - parseInt(_checkIn.split(':')[0]));
//       let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) + (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60;
//       let overtime = dayliHour - 6;
//       console.log(overtime);
//       let mainSalary = overtime > 0 ? 6 * this.fullTime.salaryA : dayliHour * this.fullTime.salaryA;
//       console.log(mainSalary);
//       let overSalary = overtime > 0 ? overtime * this.fullTime.salaryB : 0;
//       console.log(overSalary);
//       this.working.push({
//           name: this.name,
//           dayliHour,
//           dayliSalary: mainSalary + overSalary
//       })
//       console.log(this.working);
//   }

//   totalSalary = () => {
//       let amount = 0;
//       console.log(this.working);
//       this.working.forEach(val => amount += val.dayliSalary)
//       return amount;
//   }

// }

// class PartTime extends Employee {
//   constructor(_name) {
//       super(_name);
//       this.working = [];
//       this.partTime = {
//           salaryA: 50000,
//           salaryB: 30000
//       }
//   }

//   addWorking = (_checkIn, _checkOut) => {
//       let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) + (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60;
//       let overtime = dayliHour - 6;
//       let mainSalary = overtime > 0 ? 6 * this.partTime.salaryA : dayliHour * this.partTime.salaryA;
//       let overSalary = overtime > 0 ? overtime * this.partTime.salaryB : 0
//       this.working.push({
//           name: this.name,
//           dayliHour,
//           dayliSalary: mainSalary + overSalary
//       })
//       console.log(this.working);
//   }

//   totalSalary = () => {
//       let amount = 0;
//       this.working.forEach(val => amount += val.dayliSalary)
//       return amount;
//   }

// }

// let attendanceFT = new FullTime("Ade");
// let attendancePT = new PartTime("Edo");
// attendanceFT.addWorking("09:00", "16:00"); // day01
// attendanceFT.addWorking("09:00", "15:00"); // day02
// attendancePT.addWorking("09:00", "18:00"); // day01-part-time
// attendancePT.addWorking("09:00", "18:00"); // day02-part-time
// attendancePT.addWorking("09:00", "18:00"); // day03-part-time
// attendancePT.addWorking("09:00", "18:00"); // day04-part-time
// attendancePT.addWorking("09:00", "18:00"); // day05-part-time
// console.log(attendanceFT.working);
// console.log(attendanceFT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
// console.log(attendancePT.working);
// console.log(attendancePT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
// let printWorking = attendancePT.working.map((val,idx)=>`Day-${idx+1} ${val.name} working ${val.dayliHour}hr and dayli salary ${val.dayliSalary}`)
// console.log(printWorking.join('\n'));

// 2. Shooting Game
// Cara 1 (martin)
class Player {
  // deklarasi class 'Player'
  constructor(nama) {
    // constructor adalah metode untuk membuat dan menginisialisasi objek dalam sebuah class
    // parameter untuk class 'Player' adalah nama
    this.nama = nama;
    // deklarasi 'nama' sebagai property dalam class 'Player'
    this.health = 100;
    // deklarasi 'health' sebagai property dalam class 'Player' dengan 100 sebagai value default (lihat soal)
    this.power = 10;
    // deklarasi 'power' sebagai property dalam class 'Player' dengan 10 sebagai value default (lihat soal)
  }
  hit(damage) {
    // method 'hit' digunakan untuk mengurangi health dari player/pemain
    this.health -= damage;
    // deklarasi pekerjaan yang dilakukan apabila method 'hit' dipanggil
  }
  useItem(item) {
    // let health = 0;
    // let power = 0;
    // method 'useItem' digunakan untuk memberi item kepada player/pemain
    this.health += item.health;
    // nilai health ditambah dengan nilai power dari item yang diberikan kepada player/pemain
    this.power += item.power;
    // nilai power ditambah dengan nilai power dari item yang diberikan kepada player/pemain
  }
  showStatus() {
    // method 'showStatus' digunakan untuk mencetak status player/pemain
    console.log(
      `${this.nama} (Health => ${this.health}, Power => ${this.power})`
    );
    // console.log sebagai perintah yang akan dijalankan ketika method 'showStatus' dipanggil
  }
  getNama() {
    // method 'getNama' digunakan untuk memanggil nama dari player/pemain
    return this.nama;
    // perintah dimana method getNama akan mengakses & mengembalikan nama dari player/pemain
  }
  getHealth() {
    // method 'getHealth' digunakan untuk memanggil health dari player/pemain
    return this.health;
    // perintah dimana method getHealth akan mengakses & mengembalikan health dari player/pemain
  }
  getPower() {
    // method 'getPower' digunakan untuk memanggil power dari player/pemain
    return this.power;
    // perintah dimana method getPower akan mengakses & mengembalikan power dari player/pemain
  }
}

class ShootingGame {
  // deklarasi class 'ShootingGame'
  constructor(player1, player2) {
    // constructor adalah metode untuk membuat dan menginisialisasi objek dalam sebuah class
    // parameter untuk class 'ShootingGame' adalah player1 & player2
    this.player1 = player1;
    // deklarasi 'player1' sebagai property dalam class 'ShootingGame'
    this.player2 = player2;
    // deklarasi 'player2' sebagai property dalam class 'ShootingGame'
  }
  getRandomItem() {
    // method 'getRandomItem' digunakan untuk memberikan item random kepada player, yaitu
    // health: 0 atau 10 dan power 0 atau 10)
    let health = 0;
    // deklarasi nilai health dalam bentuk number
    let power = 0;
    // deklarasi nilai power dalam bentuk number
    let x = Math.random();
    // deklarasi nilai x dengan angka random dari 0-1
    if (x >= 0.5) {
      health = 10;
    } else {
      power = 10;
    }
    // -> 50-50 chance untuk mendapatkan item random health 10 atau power 10
    return {
      health: health,
      power: power,
    };
    // mengembalikan nilai health dan power sesuai nilai random x
  }
  start() {
    // method 'start' digunakan untuk menjalankan Shooting Game
    while (this.player1.getHealth() >= 0 && this.player2.getHealth() >= 0) {
      // menggunakan while loop karena mengetahui kondisi batasan secara pasti
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      // 'this.getRandomItem' digunakan sebagai parameter untuk menjalankan method 'useItem'
      // menjalankan method 'useItem' dengan value yang didapatkan dari method 'getRandomItem'
      this.player1.showStatus();
      // menjalankan method 'showStatus' untuk property 'this.player1'
      this.player2.showStatus();
      // menjalankan method 'showStatus' untuk property 'this.player2'
      this.player1.hit(this.player2.getPower());
      this.player2.hit(this.player1.getPower());
      // 'this.player2.getPower()' digunakan sebagai parameter untuk menjalankan method 'hit'
      // menjalankan method 'hit' dengan value yang didapatkan dari method 'this.player2.getPower()'
    }
    // while loop akan berjalan sampai health salah satu player = 0
    if (this.player1.getHealth() <= 0) {
      console.log(`${this.player2.getNama()} is the winner.`);
    } else {
      console.log(`${this.player1.getNama()} is the winner.`);
    }
    // Jika salah satu pemain kehabisan health, maka method 'start' akan mencetak pemenang dari game ini
  }
}

let game = new ShootingGame(new Player("XLR8"), new Player("TenZ"));
// deklarasi game, nama player1, nama player2
game.start();
// menjalankan game menggunakan method 'start()'

// Cara 2 (mas abdi)
class Player {
  constructor(_name, _health = 100, _power = 10) {
    this.name = _name;
    this.health = _health;
    this.power = _power;
  }

  hit = (pwr) => {
    this.health -= pwr;
    return `Health reduce by ${pwr}`;
  };

  useItem = (item) => {
    this.health += item?.health || 0;
    this.power += item?.power || 0;
    return `Update Health => ${this.health}, Power => ${this.power}`;
  };

  showStatus = () => {
    return `Player ${this.name} (Health=>${this.health} | Power=>${this.power})`;
  };
}

class ShootingGame {
  constructor(_playerA, _playerB) {
    this.playerA = _playerA;
    this.playerB = _playerB;
  }

  getRandomItem = () => {
    let item = ["health", "power"];
    let getIdx = Math.round(Math.random());
    return {
      [item[getIdx]]: 10,
    };
  };

  start = () => {
    // console.log(this.playerA.showStatus());
    // console.log(this.playerB.showStatus());
    while (true) {
      console.log(
        "BEFORE",
        `${this.playerA.showStatus()}\n${this.playerB.showStatus()}`
      );
      this.playerA.useItem(this.getRandomItem());
      this.playerB.useItem(this.getRandomItem());
      this.playerA.hit(this.playerB.power);
      this.playerB.hit(this.playerA.power);
      console.log(
        "AFTER",
        `${this.playerA.showStatus()}\n${this.playerB.showStatus()}`
      );
      if (this.playerA.health <= 0) {
        return `WINNER ${this.playerB.name}`;
      }
      if (this.playerB.health <= 0) {
        return `WINNER ${this.playerA.name}`;
      }
    }
  };
}

let playerA = new Player("Edo");
let playerB = new Player("Andrew");
let shooting = new ShootingGame(playerA, playerB);
console.log(shooting.start());
