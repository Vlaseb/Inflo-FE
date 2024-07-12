import { View, Text, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        router.replace("/home");
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView>
                <View className="my-6 min-h-[85vh] w-full justify-center px-4">
                    <Image
                        source={images.fo_blue}
                        resizeMode="contain"
                        className="h-[100px] w-[115px]"
                    />

                    <Text className="text-semibold mt-10 font-psemibold text-2xl text-black">
                        Log in to Inflo
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) =>
                            setForm({ ...form, password: e })
                        }
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center gap-2 pt-5">
                        <Text className="font-pregular text-lg text-gray-100">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="font-psemibold text-lg text-secondary"
                        >
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
