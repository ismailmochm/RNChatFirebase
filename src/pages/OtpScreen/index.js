import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '../../components/atom';
import {Header} from '../../components/molecule';
import auth from '@react-native-firebase/auth';

const OtpScreen = ({route, navigation}) => {
  let textInput = useRef(null);
  let clockCall = null;
  const [lengthInput, setLengthInput] = useState(6);
  const [internalVal, setInternalVal] = useState('');
  const [countDown, setCownDown] = useState(5);
  const [enableResend, setEnableResend] = useState('Time Code')

  const {confirm} = route.params;

  const submitOtp = async () => {
    try {
      const data = await confirm.confirm(internalVal);
      console.log('code otp', data);
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };

  const insertCell = val => {
    setInternalVal(val);
    // if(val.length === lengthInput){
    //   navigation.navigate('Home')
    // }
  };

  useEffect(() => {
    textInput.focus();
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countDown === 0) {
      setEnableResend('Resend Code');
      setCownDown(0);
      clearInterval(clockCall);
    } else {
      setCownDown(countDown - 1);
    }
  };

  const resendCode = () => {
    if (countDown === 0) {
      setCownDown(5);
      setEnableResend('Time Code');
      clearInterval(clockCall);
      auth()
        .verifyPhoneNumber('+4423456789')
        .on(
          'state_changed',
          phoneAuthSnapshot => {
            console.log('Snapshot state: ', phoneAuthSnapshot.state);
          },
          phoneAuthError => {
            console.error('Error: ', phoneAuthError.message);
          },
        );
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  const resetOtp = () => {
    setInternalVal('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Gap height={50} />
      <View style={styles.title}>
        <Text>Masukan Code Otp</Text>
      </View>
      <Gap height={25} />
      <View style={styles.contentInput}>
        <View style={{top: 10}}>
          <TextInput
            ref={input => (textInput = input)}
            onChangeText={insertCell}
            style={{width: 50, height: 0}}
            returnKeyType="done"
            value={internalVal}
            maxLength={lengthInput}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.coverCell}>
          {Array(lengthInput)
            .fill()
            .map((cell, index) => (
              <View
                style={[
                  styles.cellContent,
                  {
                    borderBottomColor:
                      index === internalVal.length ? '#FB6C6A' : '#234DB7',
                  },
                ]}
                key={index}>
                <Text onPress={() => textInput.focus()} style={styles.textCell}>
                  {internalVal && internalVal.length > 0
                    ? internalVal[index]
                    : ''}
                </Text>
              </View>
            ))}
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => submitOtp()}>
          <View style={styles.resetOtp}>
            <Text style={styles.textReset}>Reset Code</Text>
          </View>
        </TouchableOpacity>
        {countDown === 0 ? (
          <TouchableOpacity onPress={() => resendCode()}>
            <View style={styles.timeOtp}>
              <Text style={styles.textTime}>{enableResend}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={styles.timeOtp}>
              <Text style={styles.textTime}>
                {enableResend} ({countDown})
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInput: {},
  coverCell: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellContent: {
    borderBottomWidth: 1.5,
    paddingHorizontal: 11,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingBottom: 5,
  },
  textCell: {alignSelf: 'center', fontSize: 18},
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  resetOtp: {
    margin: 40,
    width: 100,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeOtp: {
    margin: 40,
    width: 120,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textReset: {color: 'blue'},
});
