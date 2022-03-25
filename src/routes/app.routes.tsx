import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { Article } from "../screens/Article";
import { TopBar } from "../components/TopBar";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTitle: () => <TopBar />,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Article" component={Article} />
    </Navigator>
  );
}
