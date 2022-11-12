import "react-native-gesture-handler";
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { bootstrap } from "./src/bootstrap";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await bootstrap();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return <Navigation />;
}
