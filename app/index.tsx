import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function App() {
    const { isLoading, isLoggedIn } = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="w-full justify-center items-center min-h-[85vh]">
                <CustomButton
                    title="Continue with Google"
                    handlePress={() => {
                        router.push('/sign-in');
                    }}
                    containerStyles="w-full mt-7"
                />
                <CustomButton
                    title="Sign Up"
                    handlePress={() => {
                        router.push('/sign-up');
                    }}
                    containerStyles="w-full mt-7"
                />
                <CustomButton
                    title="Sign In"
                    handlePress={() => {
                        router.push('/sign-in');
                    }}
                    containerStyles="w-full mt-7"
                />
            </View>
            <StatusBar backgroundColor="#FFF" style="dark" />
        </SafeAreaView>
    );
}
