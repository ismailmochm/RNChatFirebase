import React from 'react';
import {StyleSheet, Text, TouchableOpacity, } from 'react-native';

const Button = ({text, color='#99cccc', textColor='red', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.btn(color)} onPress={onPress}>
      <Text style={styles.btnText(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    btn: (color) =>  ({
        width: '80%',
        height: 50,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      }),
    btnText: (textColor) => ({
        color: textColor
    })  
});
