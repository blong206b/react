// Feature 1: Current Weather
document.getElementById('current-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('current-location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('current-result').innerText = `Temperature: ${data.main.temp}°F`;
        });
});


// Feature 2: Activity Suggestions
document.getElementById('suggestions-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('suggestions-location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            let suggestion = '';
            if (temp > 59) {
                suggestion = "It's Warm outside (60+), How about a trip to the park today?";
            } else {
                suggestion = "It's Cool outside (under 60), Maybe stay inside and practice your coding exercises.";
            }

            document.getElementById('suggestions-result').innerText = suggestion;
        });
});

// Feature 3: Temperature Compared to Sydney
document.getElementById('compare-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('compare-location').value;

    // Fetch the temperature for the user-specified location
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const tempUserLocation = data.main.temp;

            // Fetch the temperature for Sydney
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=24306fad6bfddec85c08fc31487d2c8a&units=imperial`)
                .then(response => response.json())
                .then(data => {
                    const tempSydney = data.main.temp;

                    let comparisonResult = '';
                    if (tempUserLocation > tempSydney) {
                        comparisonResult = 'warmer';
                    } else if (tempUserLocation < tempSydney) {
                        comparisonResult = 'cooler';
                    } else {
                        comparisonResult = 'the same temperature as';
                    }

                    document.getElementById('compare-result').innerText = `It's ${comparisonResult} than Sydney.`;
                });
        });
});