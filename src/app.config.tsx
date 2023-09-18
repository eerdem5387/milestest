import AsyncStorage from '@react-native-async-storage/async-storage';

export var authStatus = false;
export var email = '';
export var token = '';

export const getAuth = async () => {
  try {
    const value = await AsyncStorage.getItem('authStatus');
    if (value) {
      authStatus = true;
      return true;
    } else {
      authStatus = false;
      return false;
    }
  } catch (e) {
    authStatus = false;
    return false;
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {
    throw new Error('error occured while getting token');
  }
};

export const login = async (email: string, token: string) => {
  try {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('authStatus', 't');
  } catch (e) {
    throw new Error('error occured while setting login datas');
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw new Error('error occured while logout');
  }
};
