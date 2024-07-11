import { StatusBar } from "expo-status-bar";
import { View, Image, Dimensions } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
const logoBlue = require("@/assets/images/fo-blue.png");

export default function App() {
    const { isLoading, isLoggedIn } = useGlobalContext();
    let deviceH = Dimensions.get("screen").height;
    let windowH = Dimensions.get("window").height;
    let bottomNavBarH = deviceH - windowH;

    if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex h-full flex-col items-center justify-end overflow-auto p-4">
                <View className="relative -top-10 left-12 h-full w-[125vw] rotate-6 bg-secondary">
                    <Image
                        source={logoBlue}
                        className="absolute -left-16 bottom-0 h-[525px] w-[525px] rotate-[-6deg]"
                    />
                </View>
                <View className="w-full items-center">
                    <Text className="font-psemibold text-4xl text-primary">
                        Spend Smarter
                    </Text>
                    <Text className="mb-10 font-psemibold text-4xl text-primary">
                        Save More
                    </Text>
                    <Button
                        onPress={() => router.push("/sign-up")}
                        className="mb-4 w-full rounded-full"
                        size={"lg"}
                    >
                        <Text className="text-5xl">Google</Text>
                    </Button>
                    <Button
                        onPress={() => router.push("/sign-up")}
                        className="mb-4 w-full rounded-full"
                        size={"lg"}
                    >
                        <Text className="text-5xl">Sign Up</Text>
                    </Button>
                    <Button
                        onPress={() => router.push("/sign-in")}
                        variant={"secondary"}
                        className="w-full rounded-full"
                        size={"lg"}
                    >
                        <Text className="text-5xl">Sign In</Text>
                    </Button>
                </View>
            </View>
            <StatusBar backgroundColor="#FFF" style="dark" />
        </SafeAreaView>
    );
}
