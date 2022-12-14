import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import LifeStatus from "../../components/common/lifeStatus";
import CreateHabit from "../../components/home/createHabit";
import StatusBar from "../../components/home/statusBar";

export default function Home() {
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>

                    <LifeStatus />

                    <StatusBar />

                    <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                    <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
                    <CreateHabit habitArea="Humor" borderColor="#FE7F23" /> 
                        
                </View>

                <Text
                    style={styles.explanationText}
                    onPress={() => {
                        handleNavExplanation();
                    }}
                >
                    Ver explicações novamente
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },
});