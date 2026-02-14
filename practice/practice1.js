// write a program to check if a number is divisible by 7 or not

let num=35
if (num % 7===0){
  console.log(num,'is divisible by 7')
}else{
  console.log(num,'is not divisible by 7')
}

// Write a program to check if a number is multiple of 3 or not
let numb=35;
if (numb % 3===0){
  console.log(numb,'is a multiple of 3')
}else{
  console.log(numb,"is not a multiple of 3")
}

// Write a program to check if a number is a positive or not?
let number=0;
if(number > 0){
  console.log(number,'is a positive number')
}else if(num < 0){
  console.log(number,'is a negative number')
}else{
  console.log(number," is neither positive nor negative")
}

// Write a program to check if a number is 3 digits number or not

let value=-345
if(Math.abs(value) >=100 && Math.abs(value) <= 999){
  console.log(value,"is a 3 digit number")
}else{
  console.log(value,"is not a 3 digit number")
}
// Math.abs() removes negative sign


// write a program to print even or odd for a given number?

let given_number=23
if(given_number %2==0){
  console.log(given_number,"is an even number")
}else{
  console.log(given_number,"is an odd number")
}

// write a program to print the greatest number in given two numbers?

let a=56;
let b=56;
if(a>b){
  console.log(a,"is greater than",b);
}else if(b>a){
  console.log(b,"is greater than",a);
}else{
  console.log(a,"is equal to",b);
}

// Write a program to print the greatest among 3 numbers
let x=222;y=418;z=418;
if(x===y && x===z){
  console.log('Three numbers are equal')
}else if(x>y && x>z){
  console.log('X is the greatest')
}else if(y>x && y>z){
  console.log('Y is the greatest')
}else if (z > x && z > y){
  console.log('z is the greatest')
}else{
  console.log('Two numbers are equal and greatest')
}