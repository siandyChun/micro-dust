import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Dust({city}){
    return <View style={styles.container}>
        <Text style={styles.dust}>{city}</Text>
        <Text style={styles.dust}>여기에 미세먼지 농도</Text>

    </View>
}


// 스타일
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    dust: {
        fontSize: 25
    }
})