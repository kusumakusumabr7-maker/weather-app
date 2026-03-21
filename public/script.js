document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city");
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (data.error) {
      document.getElementById("weather").innerHTML = `<p style="color:red">${data.error}</p>`;
    } else {
      // Weather card
      document.getElementById("weather").innerHTML = `
        <h2>${data.city}</h2>
        <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="${data.description}">
        <p><strong>Temperature:</strong> ${data.temperature} °C</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Humidity:</strong> ${data.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
      `;

      // Dynamic background change
      const condition = data.condition.toLowerCase();
      const body = document.body;

      if (condition.includes("clear")) {
        body.style.background = "linear-gradient(to right, #f9d423, #ff4e50)"; // sunny
      } else if (condition.includes("cloud")) {
        body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)"; // cloudy
      } else if (condition.includes("rain")) {
        body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)"; // rainy
      } else if (condition.includes("snow")) {
        body.style.background = "linear-gradient(to right, #e0eafc, #cfdef3)"; // snowy
      } else {
        body.style.background = "linear-gradient(to right, #74ebd5, #ACB6E5)"; // default
      }
    }
  } catch (err) {
    document.getElementById("weather").innerHTML = `<p style="color:red">Failed to connect to server</p>`;
  }
});