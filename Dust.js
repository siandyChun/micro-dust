import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Dust(){
    return <View style={styles.container}>
        <Text style={styles.dust}>테스트임다</Text>
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