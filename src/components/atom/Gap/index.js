import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({width,height}) => {
    return (
        <View style={[{width:width, height:height}, {backgroundColor:'white'}]}></View>
    )
}

export default Gap
