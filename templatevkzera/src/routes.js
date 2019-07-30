import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

//screens
import SplashScreen from "./pages/SplashScreen";
import HomeScreen from "./pages/HomeScreen";

const AppStack = createStackNavigator({
  HomeScreen: HomeScreen
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    AppStack: AppStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
