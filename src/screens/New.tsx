import { useCallback, useState } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";

const availableWeekDays= ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export function New() {
    const [weekDays, setWeekDays] = useState<number[]>([]);

    // Função que faz o tratamento de marcar/desmarcar o checkbox
    function handleToggleWeekDay(weekDayIndex: number) {
        if(weekDays.includes(weekDayIndex)) {
           // Se existir, o usuário que desmarcar, pega o estado anterior, faz um filtro retornando todos que é diferente,  deixando de fora
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
        } else {
            // Se não existe, o usuário quer marcar
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual seu comprometimento?
                </Text>

                <TextInput 
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"                    
                />

                <Text className="font-semibold mt-4 mb-3 text-white text-base">
                    Qual a recorrência?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox
                            key={weekDay}                             
                            title={weekDay}  
                            checked={weekDays.includes(index)} // alguma merda aqui
                            // checked={true}
                            onPress={() => handleToggleWeekDay(index)}                          
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}