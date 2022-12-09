import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import MyTabs from "./src/navigation/MyTabs";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </Provider>
  );
}


