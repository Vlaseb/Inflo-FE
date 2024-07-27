import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const foW = require("@/assets/images/fo-w.png");

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className="h-[42%] p-4">
                <View className="absolute -left-[340px] -top-[700px] h-[1000px] w-[1100px] rounded-full bg-primary"></View>
                <Image
                    source={foW}
                    className="absolute -left-4 -top-4 h-[250px] w-[250px] object-contain opacity-20"
                />
                <View className="flex flex-row items-center justify-between">
                    <Button variant={"ghost"} onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={32} color="white" />
                    </Button>
                    <Text className="font-psemibold text-xl text-primary-foreground">
                        Profile
                    </Text>
                    <Button variant={"ghost"}>
                        <Ionicons
                            name="notifications-outline"
                            size={32}
                            color="white"
                        />
                    </Button>
                </View>
            </View>
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
