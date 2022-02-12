document.addEventListener("DOMContentLoaded", () => {
    // Assign Nav links to variables
    const bmrButton = document.getElementById("bmr-button");
    const tdeeButton = document.getElementById("tdee-button");
    const ffmiButton = document.getElementById("ffmi-button");

    // Assign calculator divs to variables
    const bmrDiv = document.getElementById("bmr-div");
    const tdeeDiv = document.getElementById("tdee-div");
    const ffmiDiv = document.getElementById("ffmi-div");

    // Assign submit buttons to variables
    const bmrSubmit = document.getElementById("bmr-submit");
    const tdeeSubmit = document.getElementById("tdee-submit");
    const ffmiSubmit = document.getElementById("ffmi-submit");

    // Assign results div/text to variable
    const resultsDiv = document.getElementById("results-div");
    const resultsText = document.getElementById("results-text");

    // When the Nav link for any calculator is clicked, hide all other calculators and clear the results
    bmrButton.addEventListener("click", () => {
        bmrDiv.style.display = "block";
        tdeeDiv.style.display = "none";
        ffmiDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsText.innerHTML = "";
    })
    tdeeButton.addEventListener("click", () => {
        tdeeDiv.style.display = "block";
        bmrDiv.style.display = "none";
        ffmiDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsText.innerHTML = "";
    })
    ffmiButton.addEventListener("click", () => {
        ffmiDiv.style.display = "block";
        bmrDiv.style.display = "none";
        tdeeDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsText.innerHTML = "";
    })

    // When the submit button for any calculator is clicked, calculate the results and display them at the bottom of it's div
    // BMR Calculator Logic
    bmrSubmit.addEventListener("click", () => {
        var gender = document.getElementById("bmr-gender-select").value;
        var height = document.getElementById("bmr-height-input").value;
        var weight = document.getElementById("bmr-weight-input").value;
        var age = document.getElementById("bmr-age-input").value;
        // Different formulae are used depending on gender
        if (gender == "male") {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            resultsText.innerText = `Your BMR is ${Math.round(bmr)} kCal per day!`;
            resultsDiv.style.display = "block";
            console.log(Math.round(bmr))
        } else {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            resultsText.innerText = `Your BMR is ${Math.round(bmr)} kCal per day!`;
            resultsDiv.style.display = "block";
            console.log(Math.round(bmr))
        }        
    })
    // TDEE Calculator Logic
    tdeeSubmit.addEventListener("click", () => {
        var gender = document.getElementById("tdee-gender-select").value;
        var activityLevel = document.getElementById("activity-level-select").value;
        var height = document.getElementById("tdee-height-input").value;
        var weight = document.getElementById("tdee-weight-input").value;
        var age = document.getElementById("tdee-age-input").value;

        // Determine the activity multiplier based on the User's activity level
        var activityMultiplier;
        if (activityLevel == "sedentary") {
            activityMultiplier = 1.2
        } else if (activityLevel == "light") {
            activityMultiplier = 1.375
        } else if (activityLevel == "moderate") {
            activityMultiplier = 1.55
        } else if (activityLevel == "high") {
            activityMultiplier = 1.725
        } else if (activityLevel == "extreme") {
            activityMultiplier = 1.9
        }
        // Different formulae are used depending on gender
        if (gender == "male") {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            var tdee = bmr * activityMultiplier;
            resultsText.innerText = `Your tdee is ${Math.round(tdee)} kCal per day!`;
            resultsDiv.style.display = "block";
            console.log(Math.round(tdee));
        } else {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            var tdee = bmr * activityMultiplier;
            resultsText.innerText = `Your tdee is ${Math.round(tdee)} kCal per day!`;
            resultsDiv.style.display = "block";
            console.log(Math.round(tdee));
        }
    })
    // FFMI Calculator Logic
    ffmiSubmit.addEventListener("click", () => {
        var height = document.getElementById("ffmi-height-input").value;
        var weight = document.getElementById("ffmi-weight-input").value;
        var bodyFatPercentage = document.getElementById("ffmi-bodyfat-input").value;
        var fatFreeMass = weight * (1 - (bodyFatPercentage / 100));
        var ffmi = fatFreeMass / (height/100) **2;

        resultsText.innerText = `Your FFMI is ${ffmi.toFixed(2)}!`
        resultsDiv.style.display = "block";
    })
})