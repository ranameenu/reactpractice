// CLASS --Constructor

class Burger {
  constructor(fName, lName) {
    // class var, instance var or properties
    this.firstName = fName;
    this.lastName = lName;
    this.a = 10;
    this.b = 20;
    this.c = this.a + this.b;

    this.getSum();
  }

  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  }

  getSum() {
    console.log('Sum is: ' + this.c);
  }
}

b1 = new Burger('John', 'Doe');
b1.fullName();

b2 = new Burger('Marie', 'Jackson');
b2.fullName();
