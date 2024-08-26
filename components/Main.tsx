import { Pressable, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingTop: insets.top,
      }}
    >
      <Text>SoundManager</Text>
      <Text>Ya estamos aprendiendo</Text>
      <Text>Aprendiendo a programar</Text>
    </View>
  );
}
