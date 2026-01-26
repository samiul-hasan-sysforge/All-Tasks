for (let i = 55; i <= 85; i++) {
    if (i % 5 !== 0) {
        continue;
    } console.log('Using For Loop', i);
}



let num = 55;
while (num <= 85) {
    if (num % 5 !== 0) {
        num++
        continue;
    } console.log('Using For While Loop', num);
    num++
}