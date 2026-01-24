//   Task 1
const fruits = ['mango', 'banna', 'jackfruit', 'apple', 'lichi'];
console.log(fruits[2]);
fruits[1] = 'jambura';
console.log(fruits);



// Task 2
const place = ['tourist1', 'tourist2', 'tourist3'];
place.push('tourist4');
place.push('tourist5', 'tourist6');
console.log(place);
place.pop();
console.log(place);




//Task 3
const book = ['book1', 'book2', 'book3']
console.log(book.includes('book1'));

if (book.includes('javascript')) {
    console.log('Book is present');
} else {
    console.log('Book is not present');
}






// Task 4
const data1 = ['abc', 'def', 'geh'];
console.log(Array.isArray(data1));

const data2 = []
console.log(Array.isArray(data2));

const data3 = 'He ll o w'

if(Array.isArray(data1) === true){
    console.log("It's an array");
} else{
    console.log("It's not an array");
}

if(Array.isArray(data2) === true) {
    console.log("It's an array");
} else{
    console.log("It's not an array");
}

if(Array.isArray(data3) === true) {
    console.log("It's an array");
} else{
    console.log("It's not an array");
}







// Task 5
const array1 = ['abc', 'def', 'geh'];
const array2 = ['tourist1', 'tourist2', 'tourist3'];

console.log(array1, array2,  array1.concat(array2));