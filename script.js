document.getElementById("checkBtn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    result.innerHTML = "Fetching weather for " + city + "...";
}
