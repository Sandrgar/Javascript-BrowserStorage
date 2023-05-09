// Starting with the previous exercise, write a method that recover the data saved in `localStorage` and print them in the console

// Tips:

// - Remember to use the available `JSON methods` (parse, stringify)


const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveUser(obj){
  localStorage.setItem(`user`, JSON.stringify(obj));
  
}

function getUser(){
  let userJson = localStorage.getItem(`user`)
  let user = JSON.parse(userJson)
  return user
}

console.log(getUser())