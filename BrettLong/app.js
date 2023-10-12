// Main JavaScript file for the Weather App

// --- Feature 1: Current Weather ---
// Attach a submit event listener to the "current-form" element
document.getElementById('current-form').addEventListener('submit', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the user's input location
    const location = document.getElementById('current-location').value;

    // Fetch current weather information based on the user's location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            // Display current temperature
            document.getElementById('current-result').innerText = `Temperature: ${data.main.temp}°F`;
        });
});


// --- Feature 2: Activity Suggestions ---
// Attach a submit event listener to the "suggestions-form" element
document.getElementById('suggestions-form').addEventListener('submit', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the user's input location
    const location = document.getElementById('suggestions-location').value;

    // Fetch current weather information based on the user's location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            let suggestion = '';

            // Provide activity suggestions based on temperature
            if (temp > 59) {
                suggestion = "It's Warm outside (60+), How about a trip to the park today?";
            } else {
                suggestion = "It's Cool outside (under 60), Maybe stay inside and practice your coding exercises.";
            }

            // Display the activity suggestion
            document.getElementById('suggestions-result').innerText = suggestion;
        });
});

// --- Feature 3: Temperature Compared to Sydney ---
// Attach a submit event listener to the "compare-form" element
document.getElementById('compare-form').addEventListener('submit', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the user's input location
    const location = document.getElementById('compare-location').value;

    // Fetch the temperature for the user-specified location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const tempUserLocation = data.main.temp;

            // Fetch the temperature for Sydney for comparison
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
                .then(response => response.json())
                .then(data => {
                    const tempSydney = data.main.temp;
                    let comparisonResult = '';

                    // Determine and display how the temperature compares to Sydney
                    if (tempUserLocation > tempSydney) {
                        comparisonResult = 'warmer';
                    } else if (tempUserLocation < tempSydney) {
                        comparisonResult = 'cooler';
                    } else {
                        comparisonResult = 'the same temperature as';
                    }

                    // Display the comparison result
                    document.getElementById('compare-result').innerText = `It's ${comparisonResult} than Sydney.`;
                });
        });
});
