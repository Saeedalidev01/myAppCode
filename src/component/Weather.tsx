import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, FlatList, ScrollView } from "react-native";
// import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets';

export default function WeatherContainer({ weatherData }:any) {

  const [backgroundImage, setBackgroundImage] = useState(null);
  const {
    weather,
    base,
    clouds: { all},
    cod,
    coord: { lon, lat },
    dt,
    id,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level },
    name,
    sys: { country, sunrise,sunset},
    timezone,
    visibility,
    wind: {speed,deg, gust}
  } = weatherData;


  useEffect(() => {
     setBackgroundImage(getBackgroundImg(weather[0].main));
  }, [weatherData])

  function getBackgroundImg(weather:any) {
    if(weather === 'Smoke') return haze
    if(weather === 'snow') return snow
    if(weather === 'sunny') return sunny
    if(weather === 'rainy') return rainy
    if(weather === 'haze') return haze
    if(weather === 'Clouds') return snow
    return sunny;
  } 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        {/* <SearchBar /> */}
        <View style={{alignItems:'center'}}>
          <ScrollView>
          <Text style={{fontSize:30,color:'#000',fontWeight: '100'}}>Name          {name}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Base            {base}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Clouds         {all}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Cod              {cod}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Lon              {lon}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Lat               {lat}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Dt                {dt}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Id                {id}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Tem            {temp}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Feels Like  {feels_like}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Tem Min    {temp_min}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Tem Max   {temp_max}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Pressure    {pressure}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Humidity    {humidity}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Sea Level   {sea_level}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Grnd Level  {grnd_level}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Country      {country}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Sunrise      {sunrise}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Sunset       {sunset}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Timezone  {timezone}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Visibility     {visibility}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Wind           {speed}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Deg             {deg}</Text>
          <Text style={{fontSize:30,color: '#000',fontWeight: '100'}}>Gust         {gust}</Text>

          </ScrollView>
        </View>

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fff',
    alignItems: 'center',
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('screen').width
  }
});
