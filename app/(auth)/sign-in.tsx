import { View, Image, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import {
    signInDefaultValues,
    signInFormSchema,
    signInFormType
} from "@/schemas/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormInput,
    FormInputPassword
} from "@/components/ui/form";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/actions/auth";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { ErrorAlert } from "@/components/ErrorAlert";
const logoBlue = require("@/assets/images/fo-blue.png");
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();

    const [error, setError] = useState<string | null>(null);
    const form = useForm<signInFormType>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: signInDefaultValues
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: signIn
    });

    const onSubmit = async (values: signInFormType) => {
        const data = await mutateAsync(values);
        if (data.error) {
            setError(data.error);
            return setTimeout(() => setError(null), 10000);
        }
        setUser(data);
        setIsLoggedIn(true);
        router.replace("/home");
    };

    return (
        <SafeAreaView className="bg-background" style={{ flex: 1 }}>
            <ScrollView contentContainerClassName="px-4 pt-16">
                <Image
                    source={logoBlue}
                    resizeMode="contain"
                    className="mb-6 h-[150px] w-[150px]"
                />
                <Text className="mb-10 font-psemibold text-4xl text-primary">
                    Sign In to Inflo
                </Text>

                {error && <ErrorAlert errorMessage={error} />}

                <Form {...form}>
                    <KeyboardAvoidingView
                        enabled
                        behavior="padding"
                        className="gap-6"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormInput
                                    label="Email"
                                    placeholder="example@example.com"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    {...field}
                                />
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormInputPassword
                                    label="Password"
                                    placeholder="********"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    {...field}
                                    className="pr-16"
                                />
                            )}
                        />

                        <Button
                            onPress={form.handleSubmit(onSubmit)}
                            disabled={isPending}
                            size={"lg"}
                        >
                            <View className="flex flex-row items-center gap-4">
                                <Text>Submit</Text>
                                {isPending && <Loader />}
                            </View>
                        </Button>
                        <View className="flex-row justify-center gap-2 pt-2">
                            <Text className="font-pregular text-lg">
                                Don't have an account ?
                            </Text>
                            <Link
                                href="/sign-up"
                                className="font-psemibold text-lg text-primary"
                            >
                                Sign Up
                            </Link>
                        </View>
                    </KeyboardAvoidingView>
                </Form>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
