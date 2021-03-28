import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {icLogin} from '../../assets';
import {Gap} from '../../components/atom';
import {Button, TextInput} from '../../components/molecule';
import {actionSignIn} from '../../redux/action';
import {getData} from '../../utils/storage';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState('+62');
  const lengInput = 12;

  const dispatch = useDispatch();

  const checkLogin = async () => {
    try {
      const setLogin = await getData('token');
      if (setLogin) {
        navigation.navigate('Home', {token: setLogin});
      } else {
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log('error login', error);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const submitLogin = () => {
    dispatch(actionSignIn(email, password, navigation));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image style={styles.img} source={icLogin} resizeMode="contain" />
        <Gap height={20} />
        <View style={styles.title}>
          <Text>Please login or register ...</Text>
        </View>
        <Gap height={20} />
        <TextInput
          placeholder="Masukan Email"
          keyboardType="email-address"
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Masukan Password"
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />
        {/* <View style={styles.inputContent}>
          <View style={styles.code}>
            <Text style={styles.textCode}>{code} | </Text>
          </View>
          <TextInput
            value={phoneNumber}
            placeholder="8132434576"
            keyboardType="numeric"
            maxLength={lengInput}
            onChangeText={(val) => setPhoneNumber(val)}
          />
        </View> */}
        <Gap height={20} />
        <Button text="SignIn" textColor="#ffff" onPress={() => submitLogin()} />
        <Gap height={20} />
        <Button
          color="#28527a"
          text="SignUp"
          textColor="#ffff"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  img: {width: 250, height: 230},
  btnText: {color: '#ffff'},
  inputContent: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#a3a3a3',
  },
  code: {
    bottom: 2,
  },
  textCode: {fontSize: 15},
});
