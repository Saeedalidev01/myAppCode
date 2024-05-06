import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Weather from "./Weather";
const API_KEY = "92090ecc75fa744b51bc02bd68ad56a8";
export default function App(props:any) {
const cityName = props.route.params.item.name

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName:string) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [])

  console.log('weatherData',weatherData);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='gray' size={36} />
      </View>
    )
  }
  else if (weatherData === null) {
    return (


      <View></View>)
  }
  console.log('weatherData', weatherData)
  return (
    <View style={styles.container}>
      {weatherData &&
        <Weather weatherData={weatherData} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fff',
    alignItems: 'center',
  },
});
