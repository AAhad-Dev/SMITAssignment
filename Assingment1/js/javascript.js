function sum(num) {
    return function(num2) {
      return num2 + num;
    }
  }
  
  let num3 = sum(5);
  console.log(num3(10));
