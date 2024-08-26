import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="bg-[#171717] flex-1 items-center justify-center px-3">
        <StatusBar style={"auto"} />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
