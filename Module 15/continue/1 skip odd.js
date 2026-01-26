for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue;
    } console.log('Using For Loop', i);
}



let num = 1;
while (num <= 40) {
    if (num % 2 !== 0) {
        num++
        continue;
    } console.log('Using For While Loop', num);
    num++
}