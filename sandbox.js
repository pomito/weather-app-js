// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get data from local localStorage

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

// updating data

localStorage.setItem('name', 'luigi');
name = localStorage.getItem('name');

// deleting data from local localStorage

localStorage.removeItem('name');
localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');

// console.log(name, age)