import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/* import Home from "../screens/Home";
import Prueba from "../screens/Prueba" */
import Ionicons from 'react-native-vector-icons/Ionicons'
import Cities from "../screen/Cities";




const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarStyle:{backgroundColor:"#2a363bff"},
      tabBarIcon: ({ focused, color, size }) => {

        let iconName;

        if (route.name === 'Cities') {
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
      <Tab.Screen name="Cities" component={Cities}  />
{/*       <Tab.Screen name="Prueba" component={Prueba} /> */}

    </Tab.Navigator>
  );
}