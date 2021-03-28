import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {icSignUp} from '../../assets';
import {Gap} from '../../components/atom';
import {Button, TextInput} from '../../components/molecule';
import {actionSignUp} from '../../redux/action';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const code = '+62';

  const dispatch = useDispatch();

  const submitRegister = () => {
    dispatch(actionSignUp(name, email, code + phone, password, navigation));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image style={styles.img} resizeMode="contain" source={icSignUp} />
        <Gap height={10} />
        <View style={styles.title}>
          <Text>Please login or register ...</Text>
        </View>
        <Gap height={20} />
        <TextInput
          placeholder="Masukan Nama"
          value={name}
          onChangeText={value => setName(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Masukan Email"
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="81324XXXXXX"
          keyboardType="phone-pad"
          maxLength={12}
          value={phone}
          onChangeText={value => setPhone(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Masukan Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={20} />
        <Button
          text="SignUp"
          textColor="#ffff"
          onPress={() => submitRegister()}
        />
        <Gap height={20} />
        <Button
          color="#28527a"
          text="SignIn"
          textColor="#ffff"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  img: {width: 250, height: 230},
  btnText: {color: '#ffff'},
  img: {width:250, height:250,}
});
