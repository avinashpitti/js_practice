// write a program to print the least number in given three numbers.
let a =112;let b=56;let c=145;
if (a===b && a===c){
  console.log('All are equal');
}else if(a<b &&a<c){
  console.log('A is the lowest');
}else if(b<a && b<c){
  console.log('B is the smallest');
}else if(c<a && c<b){
  console.log('C is the lowest');
}else{
  console.log('Two numbers are equal and lowest');
}