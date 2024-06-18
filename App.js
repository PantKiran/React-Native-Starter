import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorsScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
