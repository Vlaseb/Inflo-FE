import { Image, View } from "react-native";
import { Text } from "./ui/text";
const triangleAlert = require("@/assets/icons/triangle-alert.png");

type Props = {
    errorMessage: string;
};

export function ErrorAlert({ errorMessage }: Props) {
    return (
        <>
            <View className="mb-4 rounded border border-destructive px-4 py-2">
                <View className="flex flex-row items-center gap-2">
                    <Image source={triangleAlert} />
                    <Text className="font-psemibold text-2xl text-destructive">
                        Error
                    </Text>
                </View>
                <Text className="text-xl">{errorMessage}</Text>
            </View>
        </>
    );
}
