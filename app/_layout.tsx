import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
// import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";
import * as React from "react";

import { Theme, ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "@/lib/constants";

import GlobalProvider from "@/context/GlobalProvider";
import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import "@/global.css";

const LIGHT_THEME: Theme = {
    dark: false,
    colors: NAV_THEME.light
};
const DARK_THEME: Theme = {
    dark: true,
    colors: NAV_THEME.dark
};

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf")
    });

    // useEffect(() => {
    //     if (error) throw error;

    //     if (fontsLoaded) SplashScreen.hideAsync();
    // }, [fontsLoaded, error]);

    React.useEffect(() => {
        (async () => {
            if (error) throw error;

            const theme = await AsyncStorage.getItem("theme");
            if (Platform.OS === "web") {
                // Adds the background color to the html element to prevent white background on overscroll.
                document.documentElement.classList.add("bg-background");
            }
            if (!theme) {
                AsyncStorage.setItem("theme", colorScheme);
                setIsColorSchemeLoaded(true);
                return;
            }
            const colorTheme = theme === "dark" ? "light" : "dark";
            // Astea trebuie invers dar am bug.. xD
            if (colorTheme !== colorScheme) {
                setColorScheme(colorTheme);

                setIsColorSchemeLoaded(true);
                return;
            }
            setIsColorSchemeLoaded(true);
        })().finally(() => {
            SplashScreen.hideAsync();
        });
    }, [error]);

    if ((!fontsLoaded && !error) || !isColorSchemeLoaded) return null;

    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#ffffff01");

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <GlobalProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }}
                        />
                    </Stack>
                </GestureHandlerRootView>
            </GlobalProvider>
        </ThemeProvider>
    );
};

export default RootLayout;
