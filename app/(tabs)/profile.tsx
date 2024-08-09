import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomHeader } from "@/components/Header";

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Profile" />
            <View className="flex items-center justify-center">
                <View className="absolute -top-[75px] h-[150px] w-[150px] rounded-full bg-black"></View>
                <View className="pt-24">
                    <Text className="text-center font-psemibold text-2xl">
                        Enjelin Morgeana
                    </Text>
                    <Text className="text-center text-xl text-primary">
                        @enjelin_morgeana
                    </Text>
                </View>
            </View>
            <View className="gap-1 p-4">
                <Button
                    onPress={() => router.push("(modals)/invite")}
                    className="flex flex-row items-center gap-2"
                >
                    <FontAwesome5
                        name="hands-helping"
                        size={32}
                        color="white"
                    />
                    <Text>Invite Friends</Text>
                </Button>
                <Button
                    variant={"ghost"}
                    className="flex flex-row items-center justify-start gap-2"
                >
                    <MaterialCommunityIcons
                        name="account"
                        size={32}
                        color="gray"
                    />
                    <Text>Account Info</Text>
                </Button>
                <Button
                    variant={"ghost"}
                    className="flex flex-row items-center justify-start gap-2"
                >
                    <Entypo name="mail" size={32} color="gray" />
                    <Text>Message Center</Text>
                </Button>
                <Button
                    variant={"ghost"}
                    className="flex flex-row items-center justify-start gap-2"
                >
                    <FontAwesome5 name="shield-alt" size={32} color="gray" />
                    <Text>Login and Security</Text>
                </Button>
                <Button
                    variant={"ghost"}
                    className="flex flex-row items-center justify-start gap-2"
                >
                    <FontAwesome5 name="lock" size={32} color="gray" />
                    <Text>Data and Privacy</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
