// Feature 1: Current Weather
document.getElementById('current-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('current-location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('current-result').innerText = `Temperature: ${data.main.temp}°C`;
    });
});

// Feature 2: 5-Day Weather Forecast
document.getElementById('five-day-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('five-day-location').value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
    .then(response => response.json())
    .then(data => {
        let forecastText = '';
        for (let i = 0; i < data.list.length; i+=8) {
            forecastText += `Day ${i/8 + 1}: Temperature: ${data.list[i].main.temp}°C\n`;
        }
        document.getElementById('five-day-result').innerText = forecastText;
    });
});

// Feature 3: Activity Suggestions
document.getElementById('suggestions-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('suggestions-location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=24306fad6bfddec85c08fc31487d2c8a&units=metric`)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        let suggestion = '';
        if (temp > 20) {
            suggestion = 'How about a trip to the park today?';
        } else {
            suggestion = 'Maybe stay inside and practice your coding exercises. After 2 hours, play a round of World of Warcraft?';
        }
        document.getElementById('suggestions-result').innerText = suggestion;
    });
});

