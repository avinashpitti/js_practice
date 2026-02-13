let numbers=[1,2,3,4,5,6,7,8,9]
console.log(numbers)

numbers.push(10)

console.log(numbers)

numbers.push(11,12)

numbers.pop() // even if you give numbers it removes only last value

numbers.push(['apple','banana','mango','dragon'])
console.log(numbers)
console.log(numbers[5])
// console.log(numbers[12][3])
console.log(numbers.length)

numbers.shift()
console.log(numbers)

numbers.shift(2,3) // It doesn't care about 2,3 it just removes the first one
console.log(numbers)

numbers.unshift(1,2)
console.log(numbers)

numbers.unshift(100,200,300,400) // we can add as many numbers as we wish
console.log(numbers)

// splice is very important
numbers.splice(2,3)// It means start at index 2 and delete 3 elements
console.log(numbers)

numbers.splice(2,0,1000,2000,5000)// start at index 2, delet 0 elements and add elements
console.log(numbers) 

numbers.splice(4,2,77,88) // start at index 4, delete 2 elements and add 77,88
console.log(numbers)

// slice : It doesn't change original
let arr=[1,2,3,4,5,6]
arr.slice(2,5)
console.log(arr) // now it returns [1,2,3,4,5,6]

let newarr=arr.slice(2,5)// start index is included, end is excluded
console.log(newarr) // now it returns [3,4,5]