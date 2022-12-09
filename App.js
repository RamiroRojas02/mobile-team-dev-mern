import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import MyTabs from "./src/navigation/MyTabs";
import { store } from "./src/redux/store";
import Stacks from "./src/navigation/Stacks";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Stacks/> */}
        <MyTabs/>
      </NavigationContainer>
    </Provider>
  );
}


