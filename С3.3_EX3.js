// Написать функцию, которая создает пустой объект, но без прототипа.

function create_empty() {
    return Object.create(null);
  }
  
  console.log(create_empty())