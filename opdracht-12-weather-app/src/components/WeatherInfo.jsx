function WeatherInfo({ weather }) {
  if (!weather || !weather.main) {
    return <p>Geen data gevonden...</p>;
  }

  return (
    <div className="bg-white shadow-xl p-6 rounded-xl text-center w-80">
      <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>

      {/* Weer icon */}
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weer icon"
        className="mx-auto"
      />

      <p className="text-xl"> Temp: {weather.main.temp}°C</p>
      <p> Gevoelstemp: {weather.main.feels_like}°C</p>
      <p> Vochtigheid: {weather.main.humidity}%</p>
      <p> Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
