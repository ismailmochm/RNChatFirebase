import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {icback, icLogout, icProfile, icTabHome, icTabUser} from '../../assets/img';
import {Gap} from '../../components/atom';
import {Header, TabMenu} from '../../components/molecule';

const WIDTH = Dimensions.get('window').width;

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Header
        title="Profile"
        subTitle="Halaman edit profile"
        sourceLog={icLogout}
        right={25}
        onPress={() => logoutAcount()}
      />
      <Gap height={10} />
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.contentImg}>
          <Image style={styles.img} source={icProfile} resizeMode="contain" />
        </View>
        <View style={styles.textImg}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>
            Jennie Blackpink
          </Text>
          <Text style={{color: '#A0AAAC', fontSize: 12, marginTop: 3}}>
            JennieBlackpink@gmail.com
          </Text>
        </View>
      </View>
      <Gap height={20} />
      <TabMenu title="setting account"/>
      <TabMenu title="No HP"/>
      <TabMenu title="scurity"/>
      <TabMenu title="panduan"/>
      <TabMenu title="privasi & police"/>

      <View style={styles.tabContent}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.homeTab}
          onPress={() => navigation.navigate('Home')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A0AAAC',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
    padding: 24,
  },
  textImg: {marginTop: 8, alignItems: 'center', justifyContent: 'center'},
  tabContent: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-end',
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

export default About;
