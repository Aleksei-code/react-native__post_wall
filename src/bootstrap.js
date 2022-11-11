import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "inter-regular": require("../assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("../assets/fonts/Inter-Bold.ttf"),
  });
}
