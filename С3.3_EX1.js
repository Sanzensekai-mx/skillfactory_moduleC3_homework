// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.
const protoobj = {
    init: 500,
    kin: 100
  }
  
  
  const test_obj = Object.create(protoobj);
  test_obj.own_property = 1;
  
  function ownProperty(obj) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        console.log(property, obj[property]);
      }
    }
  }
  
  ownProperty(test_obj)
  
  