document.addEventListener("DOMContentLoaded", function() {
    // Your code will go here
    
    // Feature 1: Display Current Weather
    document.getElementById('current-weather-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const location = document.getElementById('current-weather-location').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('current-weather-result').innerText = `Temperature: ${data.main.temp}°C`;
        });
    });

    // Feature 2: 5-Day Weather Forecast
    document.getElementById('five-day-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const location = document.getElementById('five-day-location').value;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Loop through the array and display the 5-day forecast.
            // This part depends on how you want to format it.
        });
    });

    // Feature 3: Activity Suggestions
    document.getElementById('activity-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const location = document.getElementById('activity-location').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            let suggestion = '';
            if (temp > 25) {
                suggestion = 'How about a trip to the park today?';
            } else {
                suggestion = 'Maybe stay inside and practice your coding exercises. After 2 hours, play a round of World of Warcraft?';
            }
            document.getElementById('activity-result').innerText = suggestion;
        });
    });
});
