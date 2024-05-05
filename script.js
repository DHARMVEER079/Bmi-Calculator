let weightInput = document.getElementById("weight");
let heightInput1 = document.getElementById("height1");
let heightInput2 = document.getElementById("height2");
let result = document.getElementById("result");

function calculateBMI() {
    let weight = parseFloat(weightInput.value);
    let height1 = parseFloat(heightInput1.value);
    let height2 = parseFloat(heightInput2.value);

    if (isNaN(weight) || isNaN(height1) ||isNaN(height2) || weight <= 0 || height1 <= 0 || height2 < 0|| height2 >= 12|| height1 >= 10) {
        result.innerHTML = "Please enter valid weight and height values.";
        return;
    }

    height=((height1*12*2.54)+(height2*2.54))/100
    


    let bmi = weight / (height * height);
    let bmiCategory = getBMICategory(bmi);
    

    result.innerHTML = `Your Body Mass Index is <span>${bmi.toFixed(2)}</span>`;
     result1.innerHTML = `Category: ${bmiCategory}`;
}

function getBMICategory(bmi) {
    if (bmi < 16.0) {
        return "Underweight (Severe Thinness)";
    } else if (bmi >= 16.0 && bmi <= 16.9) {
        return "Underweight (Moderate Thinness)";
    } else if (bmi >= 17.0 && bmi <= 18.4) {
        return "Underweight (Mild Thinness)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal Range (Fit)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Overweight";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        return "Obese (Class 1)";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        return "Obese (Class 2)";
    } else {
        return "Obese (Class 3)";
    }
}
