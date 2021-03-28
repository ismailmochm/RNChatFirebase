import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (keyStorage, value) => {
  try {
    const jsonPlace = JSON.stringify(value);
    await AsyncStorage.setItem(keyStorage, jsonPlace);
    alert('berhasil menyimpan data')
  } catch (error){
    alert("gagal menyimpan data ke storage")
  }
};

export const getData = async (keyStorage) => {
    try {
      const jsonPlace = await AsyncStorage.getItem(keyStorage);
      return jsonPlace != null ? JSON.parse(jsonPlace) : null
    } catch (error){
      alert("gagal mengambil data dari storage")
    }
  };
