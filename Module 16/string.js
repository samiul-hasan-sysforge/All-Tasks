// Task-1
// const string = 'vssa dffafbbsa s gg f daaa   f'

// let count = []
// for (let i = 0; i < string.length; i++) {
//     // console.log(string[i]);
//     if (string[i] === 'a') {
//         count.push(string[i])

//     }
// } console.log(count.length);

// // solution by Chat GPT
const string = 'vssa dffafbbsa s gg f daaa   f'

let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
        count++;
    }
}
console.log(count);








// Task-2
const string2 = 'vssa dffafAAsa s gg f daaa   f'

let count2 = 0;

for (let i = 0; i < string2.length; i++) {
    if (string2[i] === 'a' || string2[i] === 'A') {
        count2++;
    }
}
console.log(count2);









// Task-3
const sentence = 'avssa deioyuffafbbsa s gg f daaa   f'

// if (string === 'a' && string === 'e' && string === 'i' && string === 'o' && string === 'u') {
//     console.log(true);
// } else {
//     console.log(false);
// }

if (
    sentence.includes('a') &&
    sentence.includes('e') &&
    sentence.includes('i') &&
    sentence.includes('o') &&
    sentence.includes('u')
) {
    console.log(true);
} else {
    console.log(false);
}

// // solution by Chat GPT
// const sentence = 'vssa dffafbbsa s gg f daaa   f';
// const lower = sentence.toLowerCase();

// let hasA = false;
// let hasE = false;
// let hasI = false;
// let hasO = false;
// let hasU = false;

// for (let i = 0; i < lower.length; i++) {
//     if (lower[i] === 'a') hasA = true;
//     else if (lower[i] === 'e') hasE = true;
//     else if (lower[i] === 'i') hasI = true;
//     else if (lower[i] === 'o') hasO = true;
//     else if (lower[i] === 'u') hasU = true;
// }

// if (hasA && hasE && hasI && hasO && hasU) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// // solution by Chat GPT
// const sentence = 'vssa dffafbbsa s gg f daaa   f';
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// const lower = sentence.toLowerCase();

// let isAllPresent = true;

// for (let v of vowels) {
//     if (!lower.includes(v)) {
//         isAllPresent = false;
//         break;
//     }
// }

// console.log(isAllPresent);









// Task-4
// const sentence2 = 'sdfgxczxcsdf  zxcdXbnnXffgh jityyux';
// let newSentence = ''
// for (let i = 0; i < sentence2.length; i++) {
//     // console.log(sentence2[i]);
//     if (sentence2[i] === 'x' || sentence2[i] === 'X') {
//         // console.log(true);
//         newSentence = sentence2.replace(/[xX]/g, 'Y');

//     }
// } console.log(newSentence);
// console.log(sentence2);


// CHAT GPT
const sentence2 = 'sdfgxczxcsdf  zxcdXbnnXffgh jityyux';

// first check if x or X is in the string
if (sentence2.includes('x') || sentence2.includes('X')) {

    // replace all lowercase x with y
    let result1 = sentence2.replace(/x/g, 'y');

    // replace all uppercase X with Y
    let finalResult = result1.replace(/X/g, 'Y');

    console.log(finalResult);

} else {
    console.log("No x or X found!");
}

// Chat GPT

// const sentence2 = 'sdfgxczxcsdf  zxcdXbnnXffgh jityyux';

let newSentence = sentence2
    .replace(/x/g, 'y')
    .replace(/X/g, 'Y');

console.log(newSentence);

// Chat GPT
// const sentence2 = 'sdfgxczxcsdf  zxcdXbnnXffgh jityyux';
// let newSentence = '';

for (let i = 0; i < sentence2.length; i++) {
    if (sentence2[i] === 'x') {
        newSentence += 'y';
    } else if (sentence2[i] === 'X') {
        newSentence += 'Y';
    } else {
        newSentence += sentence2[i];
    }
}

console.log(newSentence);





// // Task-5
const sentence3 = "hello world from javascript";

const words = sentence3.split(' ');

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) { // safety check for empty strings
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}

const capitalizedSentence = words.join(' ');
console.log(capitalizedSentence);
