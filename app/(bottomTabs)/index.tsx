import Navigator from "@/components/navigation/Navigator";
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function() {
  return (
    <SafeAreaView>
      <Text>HelloWorld</Text>
      <Navigator />
    </SafeAreaView>
  );
}
