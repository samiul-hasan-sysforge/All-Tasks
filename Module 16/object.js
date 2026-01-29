// // Task-1
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod']);




// // Task-2
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car['passenger capacity'] = 5;
// console.log(car);




// // Task-3
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);





// // Task-4
// let student2 = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// console.log(Object.keys(student2).length);
// // OR
// console.log(Object.getOwnPropertyNames(student2).length);
// // OR
// let count = 0;
// for (const property in student2) {
//     if (Object.prototype.hasOwnProperty.call(student2, property)) {
//         count++;
//     }
// }
// console.log(count);







// Task-5
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
// console.log(`Key: ${Object.keys(myObject)} | type: ${Object.values(myObject)}`);
// console.log(myObject["name"]);

// const keys = Object.keys(myObject)
// const values = Object.values(myObject)
// console.log(keys, values);


// for (let i = 0; i < keys.length; i++) {
//     console.log(`this is key: ${typeof keys[i]}`);

// }
// for (let i = 0; i < values.length; i++) {
//     console.log(`this is value: ${typeof values[i]}`);

// }

for (let key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
}