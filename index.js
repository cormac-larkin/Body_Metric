document.addEventListener("DOMContentLoaded", () => {
    // Assign Nav links to variables
    const homeButton = document.getElementById("home-button");
    const bmrButton = document.getElementById("bmr-button");
    const tdeeButton = document.getElementById("tdee-button");
    const ffmiButton = document.getElementById("ffmi-button");

    // Assign Home/calculator divs to variables
    const homeDiv = document.getElementById("home-div");
    const bmrDiv = document.getElementById("bmr-div");
    const tdeeDiv = document.getElementById("tdee-div");
    const ffmiDiv = document.getElementById("ffmi-div");

    // Assign submit buttons to variables
    const bmrSubmit = document.getElementById("bmr-submit");
    const tdeeSubmit = document.getElementById("tdee-submit");
    const ffmiSubmit = document.getElementById("ffmi-submit");

    // Assign results div/text to variable
    const resultsDiv = document.getElementById("results-div");

    // Assign all input fields to an array so we can clear them all
    const inputNodeList = document.getElementsByClassName("input");
    const inputs = Array.from(inputNodeList);

    // When the Nav link for any calculator is clicked, hide all other calculators and clear the input fields/results
    homeButton.addEventListener("click", () => {
        homeDiv.style.display = "block";
        bmrDiv.style.display = "none";
        tdeeDiv.style.display = "none";
        ffmiDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsDiv.innerHTML = "";
        inputs.forEach(element => element.value = "");
    })
    bmrButton.addEventListener("click", () => {
        bmrDiv.style.display = "block";
        homeDiv.style.display = "none";
        tdeeDiv.style.display = "none";
        ffmiDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsDiv.innerHTML = "";
        inputs.forEach(element => element.value = "");
    })
    tdeeButton.addEventListener("click", () => {
        tdeeDiv.style.display = "block";
        homeDiv.style.display = "none";
        bmrDiv.style.display = "none";
        ffmiDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsDiv.innerHTML = "";
        inputs.forEach(element => element.value = "");
    })
    ffmiButton.addEventListener("click", () => {
        ffmiDiv.style.display = "block";
        homeDiv.style.display = "none";
        bmrDiv.style.display = "none";
        tdeeDiv.style.display = "none";
        resultsDiv.display = "none";
        resultsDiv.innerHTML = "";
        inputs.forEach(element => element.value = "");
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
            resultsDiv.innerHTML = `<u>Result:</u> <br> <p>Your BMR is ${Math.round(bmr).toLocaleString("en")} kCal per day!</p>`;
            resultsDiv.style.display = "block";
        } else {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            resultsDiv.innerHTML = `<u>Result:</u> <br> <p>Your BMR is ${Math.round(bmr).toLocaleString("en")} kCal per day!</p>`;
            resultsDiv.style.display = "block";
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
            resultsDiv.innerHTML = `<u>Result:</u> <br> <p>Your TDEE is ${Math.round(tdee).toLocaleString("en")} kCal per day!</p>`;
            resultsDiv.style.display = "block";
        } else {
            var bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            var tdee = bmr * activityMultiplier;
            resultsDiv.innerHTML = `<u>Result:</u> <br> <p>Your TDEE is ${Math.round(tdee).toLocaleString("en")} kCal per day!</p>`;
            resultsDiv.style.display = "block";
        }
    })
    // FFMI Calculator Logic
    ffmiSubmit.addEventListener("click", () => {
        var height = document.getElementById("ffmi-height-input").value;
        var weight = document.getElementById("ffmi-weight-input").value;
        var bodyFatPercentage = document.getElementById("ffmi-bodyfat-input").value;
        var fatFreeMass = weight * (1 - (bodyFatPercentage / 100));
        var ffmi = fatFreeMass / (height/100) **2;

        // Display results at bottom of page
        resultsDiv.innerHTML = `<u>Result:</u> <br> <p>Your FFMI is ${ffmi.toFixed(2)}!<p>`
        resultsDiv.style.display = "block";
    })

})