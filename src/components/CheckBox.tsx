import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
    title: string;
    checked?: boolean; // propriedade que pode ser nula (?)
}

export function CheckBox( {title, checked = false, ...rest }: Props) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            className="flex-row mb-2 items-center"
            {...rest}
        >
            {
                checked
                ?
                    <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
                        <Feather
                            name="check"
                            size={20}
                            color={colors.white}                   

                        />
                    </View>
                :
                    <View className="h-8 w-8-8 bg-slate-900zinc-900 rounded-lg"/>
            }
            
            <Text className="text-white text-base ml-3">
                {title}
            </Text>
        </TouchableOpacity>
    )
}