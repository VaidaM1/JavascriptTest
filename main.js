/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

*/
// console.log(data);

cauntCafes(data);
countKaunoCafes(data);
howFirstCafeHasDishes(data);
thePriceOfTheDish(data);
veganDishesOfPercent(data);

function cauntCafes(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].length);
    // let cafes = data[i].kavine;
    // let counter = 0;
    //     for (let i = 0; i < cafes; i++) {
    //          if (storage[i].status) counter++;
    // }
    // console.log(counter);
  }
}

function countKaunoCafes(data) {
  for (let i = 0; i < data.length; i++) {
    let address = data.adresas;
    console.log(address);
  }
}

function howFirstCafeHasDishes(data) {
  let dishes = data.meniu;
  for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i].length);
  }
}

// function thePriceOfTheDish(data) {
//     for (let i = 0; i < data.length; i++) {
//         console.log(data.menu)
//         let menu = data.menu;
//         keys = Object.keys(menu);
//         console.log(menu);
//     }

// }

// function veganDishesOfPercent(data) {
//     var percents={};

// data.forEach(function(item){
//   totals[item.quater] = (totals[item.quater] || 0 ) + item.y;
// });

// data.forEach(function(item){
//    item.percent = 100 * item.y / totals[item.quater];
// });
// }

// Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

SequenceOfNumbers(10);

function SequenceOfNumbers(counter) {
  if (counter > 1) {
    SequenceOfNumbers(counter - 1);
  }
  console.log(counter);
}
