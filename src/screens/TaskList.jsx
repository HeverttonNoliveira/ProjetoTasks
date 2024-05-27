import React from "react"
import {SafeAreaView, Text, ImageBackground, StyleSheet, View} from "react-native"
import todayImage from '../../assets/imgs/today.jpg'

export default props => {
    return(
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background}>
                <Text>Text List</Text>
            </ImageBackground>

            <View style={style.tasklist}>
                
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    background:{
        flex:3,
    },

    tasklist:{
        flex:7,
    },
})