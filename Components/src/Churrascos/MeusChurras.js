import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from "react-native";

import AppItem from "./AppItem";

export default function MeusChurrascos({ navigation }) {

    const [items, setItems] = useState([
        {
            id: 1,
            tituloChurras: 'Aniversário',
            num_pessoas: 60,
            totalEstimado: 5000,
        },
        {
            id: 2,
            tituloChurras: 'Ano Novo',
            num_pessoas: 45,
            totalEstimado: 3000,
        },
    ]);

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                    {items.map((item) => {
                        return (
                            <AppItem
                                key={item.id}
                                id={item.id}
                                titulo={item.tituloChurras}
                                pessoas={item.num_pessoas}
                                valor={item.totalEstimado}
                            />
                        );
                    })}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#611D12',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flex: 1,
        width: '90%',
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderRadius: 20,
    },
});