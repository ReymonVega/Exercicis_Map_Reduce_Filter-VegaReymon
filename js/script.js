
// ### Exercicis map, reduce, filter ###


//Ejercicio 1
function squaredArray(arr) { //check
    return arr.map(x => x * x);
  }
//Prueba - 1
num = [3,2,4,5,6]
 console.log(squaredArray(num))
//Ejercicio 2
  function sumOfPositive(arr) { // check
    return arr.filter(x => x > 0).reduce((acc, curr) => acc + curr, 0);
  }

  //Prueba - 2
num2 = [-1, 6,8, -9, 10];
console.log(sumOfPositive(num2))
//Ejercicio 3
  function factorial(num) {
    return Array.from(Array(num).keys()).reduce((acc, curr) => acc * (curr + 1), 1);
  }
//Prueba - 3
  num3 = 6;
  console.log(factorial(num3))

//Ejercicio 4
  function sizesOfArrays(arr) {
    return arr.map(x => x.length);
  }
  //Prueba - 4
  lista = [[1,2,3,5,6,],[7,8,9], [10,11]]

  console.log(sizesOfArrays(lista))

  //Ejercicio 6
  const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "David", salary: 70000, department: "IT" },
    ];

  function lessThan60K(arr) {
    return arr.filter(x => x.department === "IT" && x.salary < 60000).map(x => x.name);
  }

  //Prueba - 5
console.log(lessThan60K(employees))
 


