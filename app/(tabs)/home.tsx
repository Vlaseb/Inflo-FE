import { View, Text } from "react-native";
import React from "react";

import { useGlobalContext } from "@/context/GlobalProvider";
import { Button } from "@/components/ui/button";

const Home = () => {
    const { signOut } = useGlobalContext();

    return (
        <View className="h-full w-full bg-primary">
            <Text>Home</Text>
            <Button
                onPress={() => {
                    signOut();
                }}
                className="mb-4 w-full rounded-full bg-white"
                size={"lg"}
            >
                <Text>delete local storage</Text>
            </Button>
        </View>
    );
};

export default Home;
