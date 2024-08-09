import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text } from "@/components/ui/text";

const foW = require("@/assets/images/fo-w.png");
const bg = require("@/assets/images/bg.png");

type Props = {
    title: string;
};

export function CustomHeader({ title }: Props) {
    return (
        <>
            <View className="h-[42%] p-4">
                {/* <View className="absolute -left-[52%] bottom-0 h-[100vh] w-[200vw] rounded-full bg-primary"></View> */}
                <Image
                    source={bg}
                    className="absolute bottom-0 h-[125%] w-screen"
                />
                {/* change with image */}
                <Image
                    source={foW}
                    className="absolute -left-4 -top-4 h-[250px] w-[250px] object-contain opacity-20"
                />
                <View className="flex flex-row items-center justify-between">
                    <Button variant={"ghost"} onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={32} color="white" />
                    </Button>
                    <Text className="font-psemibold text-xl text-primary-foreground">
                        {title}
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
        </>
    );
}
