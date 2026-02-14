let obj1 = {
  "name": "Avinash",
  address: {
    city: "Bangalore"
  }
}

let obj2 = { ...obj1 }   // shallow copy

obj2.name = "Rahul"
obj2.address.city = "Delhi"

console.log(obj1)
console.log(obj2)

let student={
  st_name : 'Avinash',
  age :25,
  is_studnet : true
}

console.log(student.st_name);
console.log(student['st_name'])
console.log(student[st_name])
console.log(student.age);
console.log(student["age"]);
console.log(student[age])

