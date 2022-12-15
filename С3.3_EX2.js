// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта 
// свойство с данным именем. 
// Функция должна возвращать true или false.

const test_obj = {
    text: "ssjsglsl",
    help: 5390
  }
  
  function test(string, obj) {
    return (string in obj);
  }
  
  console.log(test("help", test_obj))