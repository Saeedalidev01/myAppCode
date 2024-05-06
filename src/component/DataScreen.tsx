
import { StyleSheet, Text, View, ActivityIndicator,Button, FlatList, TouchableOpacity, } from "react-native";

export const DataScreen = (props:any) => {
    console.log('params',props.route.params)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>DataScreen</Text>
      <Button title='Go to Home Page' onPress={() => props.navigation.navigate("Cities")} ></Button>
    </View>
  )
};
