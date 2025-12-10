import "./App.css";
import { useState, useEffect } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("oslo");

  const apiKey = "c2cf97942a5f471e7723d6c5ae5d549f";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]); // <-- city toevoegen zodat fetch opnieuw runt wanneer city verandert

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.cityInput.value;
    setCity(inputValue);
  };

  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Weer App</h1>

      {/* Zoekformulier */}
      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <input
          type="text"
          name="cityInput"
          placeholder="Voer een stad in..."
          className="p-2 border rounded-l-lg"
        />
        <button className="p-2 bg-blue-600 text-white rounded-r-lg">
          Zoek
        </button>
      </form>

      {/* Weather Info Component */}
      {weather ? (
        <section className="flex justify-center">
          <WeatherInfo weather={weather} />
        </section>
      ) : (
        <h2 className="text-center">Loading...</h2>
      )}
    </div>
  );
}

export default App;
