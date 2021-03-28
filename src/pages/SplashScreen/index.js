import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native';


const windowHeight = Dimensions.get('window').height;

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.animate}>
            <LottieView
                source={require('../../assets/animation/animation.json')}
                autoPlay
                loop={false}
                speed={1}
                onAnimationFinish={() => {
                    navigation.replace('SignIn')
                }}
            />
            </View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        bottom:50
    },
    animate:{width:200, height:200,}
})
