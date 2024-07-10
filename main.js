var elSiteName = document.querySelector(".heading-js");
var number = prompt("Biror son kiriting");

if (number % 3 == 0){
  elSiteName.textContent = "Fizz";
}
if (number % 5 == 0){
  elSiteName.textContent = "Buzz";
}
if (number % 15 == 0){
  elSiteName.textContent = "Fizz Buzz";
}