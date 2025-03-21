import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "102d7e9ac0e16e5947c59659f075f323";
  const city = 'Brasília';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const CurrentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const CurrentWeatherJson = await CurrentWeatherResponse.json();
        setCurrentWeatherData({
          location: CurrentWeatherJson.name,
          temperature: CurrentWeatherJson.main.temp,
        });

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const forecastJson = await forecastResponse.json();

        const dailyForecast = forecastJson.list
          .filter((reading) => reading.dt_txt.includes("12:00:00"))
          .slice(0, 5)
          .map((forecast) => ({
            date: forecast.dt_txt.split(' ')[0],
            minTemp: forecast.main.temp_min,
            maxTemp: forecast.main.temp_max,
          }));

        setForecastData(dailyForecast);
      } catch (error) {
        console.error("Erro ao buscar os dados da API: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Carregando dados....</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {currentWeatherData && (
          <CurrentWeather
            location={currentWeatherData.location}
            temperature={currentWeatherData.temperature}
          />
        )}
        {forecastData.length > 0 && <WeatherForecast forecast={forecastData} />}
      </div>
    </ThemeProvider>
  );
};

export default App;