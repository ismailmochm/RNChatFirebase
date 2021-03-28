import axios from 'axios';
import {setLoading} from './global';
import firebase from '../../config/config';
import {storeData} from '../../utils/storage';
import auth from '@react-native-firebase/auth';

export const actionSignUp = (
  name,
  email,
  phone,
  password,
  navigation,
) => dispatch => {
  dispatch(setLoading(true))
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('responPhone :', user.user.uid);
      storeData('token', {value: user.user.uid});
      if (auth().currentUser) {
        userId = auth().currentUser.uid;
        if (userId) {
          firebase
            .database()
            .ref('users/' + userId)
            .set({
              name: name,
              email: email,
              phone: phone,
              password: password,
              uid: userId,
            });
        }
      }
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      dispatch(setLoading(false))
    })
    .catch(error => {
      alert('Coba cek ulang :(')
      dispatch(setLoading(false))
    });
};

export const actionSignIn = (email, password, navigation) => dispatch => {
  dispatch(setLoading(true))
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log('sukses login', response);
      storeData('token', {value: response.user.uid});
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      dispatch(setLoading(false))
    })
    .catch(err => {
      alert('SignUp dulu ya guys :)');
      dispatch(setLoading(false))
    });
};