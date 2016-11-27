var names = ['gareth', 'andy', 'stejay'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
//
// names.forEach((name) => console.log(name));

// arrow functions are used for anonymous functions
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Gareth'));

// var person = {
//   myName: 'Gareth',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.myName + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet()

// CHALLENGE AREA
function add(a, b) {
  return a + b;
}

// addstatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1,5));

// addexpression
var addExpression = (a, b) => a + b;
console.log(addExpression(5, 5));


// console.log(add(1, 3));
// console.log(add(9, 0));
