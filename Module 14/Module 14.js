// Task 1
const burgerPrice = 500

if (burgerPrice > 500) {
    console.log("Coke is free");
} else {
    console.log('Coke is 30tk');
}





// Task 2
const weightKG = 56;
const heightMeter = 1.7;
const bmi = weightKG / (heightMeter * heightMeter)
if (bmi < 18.5) {
    console.log("you are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log('you are overweight.');
} else {
    console.log('you are obese.');
}






// Task 3
const resultNumber = 178;

if (resultNumber >= 90 && resultNumber <= 100) {
    console.log('Your Grade is A');
} else if (resultNumber >= 80 && resultNumber < 90) {
    console.log('Your Grade is B');
} else if (resultNumber >= 70 && resultNumber < 80) {
    console.log('Your Grade is C');
} else if (resultNumber >= 60 && resultNumber < 70) {
    console.log('Your Grade is D');
} else if (resultNumber >= 0 && resultNumber < 60) {
    console.log('Your Grade is F, and you are Failed');
} else if (resultNumber > 100) {
    console.log("Hey!!! this is not your Exam Number");
} else {
    console.log('Ahhh You git minus Number');
}





// Task 4
const myResult = 84;
const friendResult = 39;

if (myResult > 80) {

    if (friendResult > 80) {
        console.log("Go for a lunch");
    }
    else if (friendResult >= 60) {
        console.log("Good luck next time");
    }
    else if (friendResult >= 40) {
        console.log("Friend's message unseen");
    }
    else {
        console.log("Blocked");
    }

} else {
    console.log("Go to home and sleep and act sad");
}





// Task 5
const num1 = 5;
const num2 = 6;
const result = 0
// num1 > num2 ? console.log(num1 * 2) : console.log(result = num1 + num2);  //this time result will not be const
num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);





// Task 6
const age = 61;
const isStudent = false
if (age < 10) {
    console.log("Children Ticket is Free");
} else if (age > 10 && isStudent) {
    console.log('Students get a 50% discount');
} else if (age >= 60 && !isStudent) {
    console.log('Senior citizens gets a 15% Discount');
} else {
    console.log('Regular ticket fare 800 tk');
}