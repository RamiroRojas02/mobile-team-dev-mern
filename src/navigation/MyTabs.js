
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Hotels from "../screens/Hotels";
import { createStackNavigator } from "@react-navigation/stack";
import HotelDetails from "../screens/HotelDetails";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerStyle:{backgroundColor:"#99b898"},
      tabBarStyle:{backgroundColor:"#2a363bff"},
      tabBarIcon: ({ focused, color, size }) => {
        
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Prueba') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Hotels" component={Hotels}/>
      <Stack.Screen name="HotelDetails" component={HotelDetails}/>
    </Tab.Navigator>
  );
}