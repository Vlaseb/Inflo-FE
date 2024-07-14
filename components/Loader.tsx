import { cn } from "@/lib/utils";
import { Image } from "react-native";
const loaderIcon = require("@/assets/icons/loader-circle.png");

type Props = {
    className?: string;
};

export function Loader({ className }: Props) {
    return (
        <Image source={loaderIcon} className={cn("animate-spin", className)} />
    );
}
