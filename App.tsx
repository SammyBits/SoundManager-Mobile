import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  IBMPlexMono_400Regular,
  IBMPlexMono_700Bold,
} from "@expo-google-fonts/ibm-plex-mono";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
    IBMPlexMono_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <View className="flex-1 justify-center items-center bg-[#272727]">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
