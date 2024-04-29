import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataScreen } from './component/Datascreen';
import  citiesData  from './Data/citiesData.json'; 
const Stack = createNativeStackNavigator();
const colors = ['#ED9A09', '#20C997', '#6610F2', '#0D6EFD', '#FFC107', '#DC3545',];

const App = () => {
  const data = citiesData[citiesData]
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cities'>
        <Stack.Screen name='Cities' component={Home} options={{
          headerStyle: { backgroundColor: '#20C997' },
          headerTitleAlign: 'center' // Centering the header text
        }} />
        <Stack.Screen name='DataScreen' component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = (props) => {
  return (
    <View style={{ backgroundColor: "#6C757D" }}>
      <FlatList
        data={citiesData.slice(0, 1000)}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => props.navigation.navigate("DataScreen")}>
            <View style={[styles.item, { backgroundColor: colors[index % colors.length] }]}>
              <Text style={styles.text}> Name:   {item.name}</Text>
              <Text style={styles.text}> Country:   {item.country} </Text>
              <Text style={styles.text}> ID:   {item.id} </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderRadius: 20
  },
  text: {
    fontSize: 20,
    color: '#fff',
    paddingVertical: 5
  }
});

export default App;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const COLORS = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];

// const MyComponent = () => {
//   const renderList = () => {
//     const list = []; // Your list data

//     return list.map((item, index) => {
//       const colorIndex = index % COLORS.length;
//       const color = COLORS[colorIndex];

//       return (
//         <TouchableOpacity key={index} style={[styles.item, { backgroundColor: color }]} onPress={()=>alert(index)}>
//           <Text>{item}</Text>
//         </TouchableOpacity>
//       );
//     });
//   };

//   return <View style={styles.container}>{renderList()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     width: 100,
//     height: 50,
//     margin: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default MyComponent;
