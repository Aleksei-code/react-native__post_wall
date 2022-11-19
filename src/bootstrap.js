import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      "inter-regular": require("../assets/fonts/Inter-Regular.ttf"),
      "inter-bold": require("../assets/fonts/Inter-Bold.ttf"),
    });
    await DB.init();
    console.log("DB started..");
  } catch (e) {
    console.log("Error: ", e);
  }
}
