const car={
    type:'fiat',
    model:500,
    weight:850,
    color:'navyblue'
}

console.log(car)


const info={
    fName:'Avinash',
    lName:'avi',
    age:21,
    eyeColor:'blue'
}

info.college='siddhartha'; // adding a new property
info.age=22; // modifying an existing property
delete info.lName // deleting a property

let result=('lName' in info); // "in" property is used to know the existence of property
console.log(info)
console.log(result)


// nested objects

person={
    fName:'John',
    lName:'Doe',
    age:50,
    mycars:{
        car1:'BMW',
        car2:'Audi',
        car3:'Byd',
        car4:'Tesla'
    }
}

console.log(person.mycars.car3)
console.log(person.mycars['car4'])

