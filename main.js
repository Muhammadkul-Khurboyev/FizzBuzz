var elSiteHeading = document.querySelector(".heading-js");

function checkFizzBuzz(number){
  if (number % 3 == 0 && number % 5 != 0){
    elSiteHeading.textContent = "Fizz"
    return elSiteHeading;
  }
  if (number % 5 == 0 && number % 3 != 0){
    elSiteHeading.textContent = "Buzz"
    return elSiteHeading;
  }
  if (number % 15 ==0){
    elSiteHeading.textContent = "FizzBuzz"
    return elSiteHeading;
  }
}
num = prompt("son kiriting");

console.log(checkFizzBuzz(num));
