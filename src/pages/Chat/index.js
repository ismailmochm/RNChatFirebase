import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {icAva, icback} from '../../assets/img';
import {Header} from '../../components/molecule';

const Chat = ({navigation}) => {
  const [chat, setChat] = useState('');
  const [textSend, setTextSend] = useState('Type');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressTextInput = val => {
    setChat(val);
    setTextSend('Send');
  };

  const deleteChat = index => {
    let itemSlice = [...data];
    itemSlice.splice(index, 1);
    setData(itemSlice);
    setModalVisible(!modalVisible);
  };

  const submitChat = () => {
    if (chat) {
      setData([...data, chat]);
    }
    setChat('');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        title="User"
        subTitle="sedang online"
        paddingRight={170}
        source={icback}
      />
      <ScrollView>
        <View style={styles.contentChat}>
          <View style={styles.chatOther}>
            <View>
              <Image
                source={icAva}
                style={{width: 25, height: 25, margin: 10}}
              />
            </View>
            <View>
              <Text>Hallo semuanya apa kabar</Text>
              <Text style={{alignSelf: 'flex-start', fontSize: 10}}>07:00</Text>
            </View>
          </View>

          {data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.myChat}
                key={index}
                onPress={() => openModal()}>
                <View style={{margin: 10}}>
                  <Text>{item}</Text>
                  <Text style={{alignSelf: 'flex-end', fontSize: 10}}>
                    07:00
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.sendContent}>
        <View style={styles.inputContent}>
          <TextInput
            style={styles.textinput}
            placeholder="Type message here ..."
            value={chat}
            placeholderTextColor='#ffff'
            onChangeText={val => onPressTextInput(val)}
            // onFocus={() => }
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSend}
          onPress={() => submitChat()}>
          <Text style={styles.textSend}>{textSend}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Yakin nih mau di hapus ?</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => deleteChat()}>
                  <Text style={styles.textStyle}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.button2, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {flex: 1},
  contentChat: {
    flex: 1,
    margin: 5,
    justifyContent: 'flex-end',
  },
  chatOther: {
    flexDirection: 'row',
    backgroundColor: '#99CCCC',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 7,
    justifyContent: 'flex-start',
    height: 40,
    margin: 8,
  },
  myChat: {
    flexDirection: 'row',
    backgroundColor: '#A9B5B5',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 7,
    justifyContent: 'flex-end',
    height: 40,
    margin: 8,
  },
  sendContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 30,
    paddingBottom: 3,
    paddingTop: 3,
    borderWidth: 1,
    borderColor: '#A9B5B5',
    bottom: 5,
    backgroundColor: '#28527a',
  },
  inputContent: {
    width: '75%',
    height: 50,
    borderRadius: 8,
    marginRight: 3,
    // borderWidth: 1,
    // borderRadius: 8,
    // borderColor:'#A9B5B5'
  },
  textinput:{color:'#ffff'},
  btnSend: {
    // backgroundColor: '#28527a',
    width: 60,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSend: {color: '#ffff', fontSize: 17},
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    top: 8,
  },
  buttonClose: {
    backgroundColor: '#28527a',
    width: 80,
    margin: 5,
  },
  button2: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    top: 8,
  },
  buttonClose2: {
    backgroundColor: '#99CCCC',
    width: 80,
    margin: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
  },
});
