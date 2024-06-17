import { Text, View } from "react-native";
import { XStack } from "../components/layout";

export default function Index() {
  return (
    <View className="gap-4 m-4">
      {/* Does not work */}
      <XStack>
        <Text>Text1</Text>
        <Text>Text2</Text>
      </XStack>
      {/* Does not work */}
      <XStack className="flex-row">
        <Text>Text1</Text>
        <Text>Text2</Text>
      </XStack>
      {/* Works */}
      <XStack style={{ flexDirection: "row" }}>
        <Text>Text1</Text>
        <Text>Text2</Text>
      </XStack>
      {/* Works */}
      <View className="flex-row">
        <Text>Text1</Text>
        <Text>Text2</Text>
      </View>
    </View>
  );
}
