import React from 'react';
import { Stylesheet, Text, View} from 'react-native';

//로딩페이지
export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>This is Andy's Micro Dust App</Text>
    </View>
}



//스타일
const styles = Stylesheet.create({

    container: {
        flex: 1,
    },

    text : {
        fontSize: 50
    }

});