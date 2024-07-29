import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacy() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>Privacy</Text>
                </View>
            </SafeAreaView>
        </>
    );
}
