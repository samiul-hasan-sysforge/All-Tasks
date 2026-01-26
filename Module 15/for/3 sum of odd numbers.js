let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sum = sum + i
    }
} console.log(sum);



let sum2 = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i
    }
} console.log(sum2);


let even = 61
while (even <= 100) {
    if (even % 2 !== 0) {
        console.log('while', even);
    }
    even++
}


let even2 = 51
while (even2 <= 85) {
    if (even2 % 2 !== 0) {
        console.log('while', even2);
    }
    even2++
}