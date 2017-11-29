

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 100));


const user = {
  name: 'Maksim',
  cities: ['Minsk', 'Gomel', 'SomeElse'],
  printPlacesLived () {

      return this.cities.map((city) => this.name + ' has lived in' + city);

  }
};

console.log(user.printPlacesLived());


const multipliesr = {

    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multipliesr.multiply());
