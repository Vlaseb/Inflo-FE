import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InviteFriends() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>Invite Friends</Text>
                </View>
            </SafeAreaView>
        </>
    );
}
