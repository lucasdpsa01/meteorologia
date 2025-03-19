import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";

const CurrentWeatherData = {
  location: 'São Paulo',
  temperature: 13,
};

const forecastData = [
  { date: '01/05', minTemp: 18, maxTemp: 28 },
  { date: '02/05', minTemp: 19, maxTemp: 24 },
  { date: '03/05', minTemp: 15, maxTemp: 26 },
  { date: '04/05', minTemp: 20, maxTemp: 23 },
  { date: '05/05', minTemp: 18, maxTemp: 24 },
  { date: '06/05', minTemp: 16, maxTemp: 23 },
  { date: '07/05', minTemp: 14, maxTemp: 22 },
  { date: '08/05', minTemp: 18, maxTemp: 21 },
  { date: '09/05', minTemp: 11, maxTemp: 20 },
  { date: '10/05', minTemp: 14, maxTemp: 25 },
  { date: '11/05', minTemp: 14, maxTemp: 23 },
]

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <CurrentWeather 
        location={CurrentWeatherData.location}
        temperature={CurrentWeatherData.temperature}
      />
      <WeatherForecast forecast={forecastData}/>
    </div>
  </ThemeProvider>
);

export default App;