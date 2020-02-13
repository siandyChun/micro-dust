import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//로딩페이지
export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>This is Andy's Micro Dust App</Text>
    </View>
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 200,
        backgroundColor: "#e5e5e5"
    },
    
    text : {
        fontWeight : "bold",
        color : "#323233",
        fontSize : 30
    }
})