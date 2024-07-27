import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ModalsLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="account" options={{ headerShown: true }} />
                <Stack.Screen name="invite" options={{ headerShown: true }} />
                <Stack.Screen name="privacy" options={{ headerShown: false }} />
                <Stack.Screen
                    name="security"
                    options={{ headerShown: false }}
                />
            </Stack>

            <StatusBar backgroundColor="#FFF" style="dark" />
        </GestureHandlerRootView>
    );
};

export default ModalsLayout;
