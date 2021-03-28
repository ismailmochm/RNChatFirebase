import React from 'react';
import {StyleSheet, View, TextInput as TextInputs} from 'react-native';

const TextInput = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  secureTextEntry,
}) => {
  return (
    <View style={styles.textinput}>
      <TextInputs
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textinput: {
    width: '80%',
    height: 50,
    borderColor: '#4c4c4c',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {fontSize: 15},
});
