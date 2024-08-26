import { View, StatusBar } from "react-native";
import React from "react";
import Main from "./components/Main";

export default function App() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <Main />
    </View>
  );
}
