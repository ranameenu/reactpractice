// // CLASS --Constructor

// class Burger {
//   constructor(fName, lName) {
//     // class var, instance var or properties
//     this.firstName = fName;
//     this.lastName = lName;
//     this.a = 10;
//     this.b = 20;
//     this.c = this.a + this.b;

//     this.getSum();
//   }

//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName);
//   }

//   getSum() {
//     console.log('Sum is: ' + this.c);
//   }
// }

// b1 = new Burger('John', 'Doe');
// b1.fullName();

// b2 = new Burger('Marie', 'Jackson');
// b2.fullName();

// class car {
//   constructor(Ename) {
//     this.name = Ename;
//     this.show();
//   }

//   show() {
//     console.log('hello world');
//   }
// }

// class model extends car {
//   constructor(Ename, Dnation) {
//     this.designation = Dnation;
//     super(Ename);
//     console.log('hello india i am' + ' ' + Ename + 'and i am a ' + Dnation);
//     this.calculate();
//   }
//   calculate() {
//     this.a = 10;
//     this.b = 20;
//     this.c = this.a + this.b;
//     console.log(this.c);
//   }
// }

// mycar = new car('john doe', 'developer');

// Class Constructor
class Car {
  constructor(brand) {
    this.carname = brand;
    this.present();
  }

  present() {
    console.log('I have a ' + this.carname);
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
    this.show();
  }

  show() {
    console.log(this.carname + ', it is a ' + this.model);
  }
}

let m1 = new Model('Ford', 'Mustang');
