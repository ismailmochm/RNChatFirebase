import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TabMenu = ({title}) => {
  const iconend = ">"
  const iconstart = "o"
  return (
    <View style={styles.containertList}>
      <View style={styles.conetentList}>
        <Text style={styles.icStart}>{iconstart}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.icEnd}>
        <Text>{iconend}</Text>
      </View>
    </View>
  );
};

export default TabMenu;

const styles = StyleSheet.create({
    containertList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin:3
      },
      conetentList: {
        flexDirection: 'row',
        paddingVertical: 15,
      },
      icStart: {paddingHorizontal: 15},
      title: {paddingLeft:10},
      icEnd: {
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
});
