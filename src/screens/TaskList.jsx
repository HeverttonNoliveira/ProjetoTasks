import React from "react"
import {SafeAreaView, Text, ImageBackground, StyleSheet, View} from "react-native"
import todayImage from '../../assets/imgs/today.jpg'
import moment from "moment"
import 'moment/locale/pt-br'
import commonStyles from "../commonStyles"

export default props => {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return(
        <SafeAreaView style={style.container}>
            <ImageBackground source={todayImage} style={style.background}>
                <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={style.tasklist}>
                <Text>Text List</Text>
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

    titleBar:{
        flex:1,
        justifyContent: 'flex-end'
    },

    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },

    subTitle:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    }
})