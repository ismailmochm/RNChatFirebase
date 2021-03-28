import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { icback, icLogout } from '../../../assets/img';

const Header = ({title, subTitle, source, onPress, sourceLog, right}) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={onPress}>
        <Image style={styles.iconBack} source={source}/>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#ffff'}}>
          {title}
        </Text>
        <Text style={{fontSize: 13, color: '#ffff',}}>{subTitle}</Text>
      </View>
      <TouchableOpacity style={styles.logout(right)} onPress={onPress}>
          <Image style={styles.iconLog} source={sourceLog}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#28527a',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back:{paddingLeft:10,},
  text:{alignItems:'flex-start'},
  logout:(right) => ({right}),
  iconBack:{width:30, height:30,},
  iconLog:{width:30, height:30,left:200,},
});
