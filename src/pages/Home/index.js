import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {icAva, icLogout, icTabHome, icTabUser} from '../../assets/img';
import {Header} from '../../components/molecule';
import {actionHome} from '../../redux/action';

const Home = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [otherUser, setOtheruser] = useState([]);
  const [uuid, setUUID] = useState({});
  const {usersKey} = useSelector(state => state.homeReducer);
  const {users} = useSelector(state => state.homeReducer);

  const {token} = route.params;

  const logoutAcount = async () => {
    try {
      const removeToken = await AsyncStorage.removeItem('token');
      console.log('remove token', removeToken);
      navigation.navigate('SignIn');
    } catch (error) {
      return error;
    }
  };

  const userLogin = async () => {
    const tokUid = await JSON.parse(token).value;
    console.log('json token', tokUid);
    await usersKey.forEach(child => {
      if (tokUid === child) {
        alert('sukses')
      }
    });
  };

  useEffect(() => {
    userLogin();
    console.log('semua user', users);
    dispatch(actionHome());
  }, []);

  return (
    <View style={styles.container}>
       <Header
        title="Home"
        subTitle="Halaman home"
      />

      <View style={{flex: 1}}>
        {users.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.uid}
              activeOpacity={0.7}
              style={styles.card}
              onPress={() => navigation.navigate('Chat')}>
              <View style={styles.avatar}>
                <Image source={icAva} style={styles.ava} />
              </View>
              <View style={styles.desc}>
                <Text>{item.name}</Text>
                <Text>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.tabContent}>
        <TouchableOpacity activeOpacity={0.7} style={styles.homeTab}>
          <Image style={styles.icHome} source={icTabHome} />
          <Text style={{color: 'white', marginLeft: 15}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.aboutTab}
          onPress={() => navigation.navigate('About')}>
          <Image style={styles.icUser} source={icTabUser} />
          <Text style={{color: 'white', marginLeft: 15}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    width: '100%',
    height: 70,
    backgroundColor: '#8ac4d0',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a3a3a3',
  },
  avatar: {paddingHorizontal: 20},
  ava: {width: 50, height: 50, borderRadius: 30},
  tabContent: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  homeTab: {
    backgroundColor: '#28527a',
    flex: 1,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  aboutTab: {
    backgroundColor: '#28527a',
    flex: 1,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
  },
  icHome: {width: 25, height: 30},
  icUser: {width: 25, height: 25},
});
