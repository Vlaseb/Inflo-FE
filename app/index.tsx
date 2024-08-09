import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "@/context/GlobalProvider";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
const logoBlue = require("@/assets/images/fo-blue.png");
const googleLogo = require("@/assets/icons/google.webp");

export default function App() {
    const { isLoading, isLoggedIn, signInWithGoogle } = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className="flex h-full flex-col items-center justify-end bg-background p-4">
                <View className="relative -top-10 h-full w-[125vw] rotate-6 overflow-hidden bg-secondary">
                    <Image
                        source={logoBlue}
                        resizeMode="contain"
                        className="absolute -bottom-10 -left-6 h-[75%] w-full -rotate-[6deg]"
                    />
                </View>
                <View className="w-full items-center">
                    <Link href={"/(tabs)/home"}>
                        <Text className="font-psemibold text-4xl text-primary">
                            Spend Smarter
                        </Text>
                    </Link>

                    <Text className="mb-10 font-psemibold text-4xl text-primary">
                        Save More
                    </Text>

                    <Button
                        onPress={signInWithGoogle}
                        className="mb-4 flex w-full flex-row gap-4 rounded-full"
                        size={"lg"}
                        variant={"outline"}
                    >
                        <Image source={googleLogo} className="h-12 w-12" />
                        <Text className="text-5xl">Continue With Google</Text>
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
