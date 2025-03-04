import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "31006c3212f85056702af6f92000630e";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    if (!city) {
      setError("请输入城市名称");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("城市名称无效或网络错误");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>天气查询</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="请输入城市名称"
          style={styles.input}
        />
      </div>

      {loading && <p style={styles.loading}>加载中...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {weatherData && (
        <div style={styles.weatherInfo}>
          <h2 style={styles.cityName}>{weatherData.name} 的天气</h2>
          <p>温度: {weatherData.main.temp}°C</p>
          <p>天气: {weatherData.weather[0].description}</p>
          <p>湿度: {weatherData.main.humidity}%</p>
          <p>风速: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

// 内联样式对象
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  loading: {
    fontSize: "1.2rem",
    color: "#666",
  },
  error: {
    fontSize: "1.2rem",
    color: "red",
  },
  weatherInfo: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cityName: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
};

export default Weather;
