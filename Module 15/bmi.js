function calculateBMI(weightKg, heightCm){
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    return bmi. toFixed(2);
}

let weight = 78;
let height = 167.64;

let bmi = calculateBMI(weight, height);
console.log('Your BMI is:', bmi);

if (bmi < 18.5){
    console.log('You are underweight.');
}else if (bmi >= 18.5 && bmi <24.9){
    console.log('You have a normal weight.');
} else if(bmi >= 25 && bmi < 29.9){
    console.log('You are overweight.');
} else {
    console.log('You are obese.');
}
