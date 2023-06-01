import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AppStorage {
  constructor() {}

  static saveData = async (param: string, value: string) => {
    if (!param || !value) {
      return false;
    }
    try {
      await AsyncStorage.setItem(param, JSON.stringify(value));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  static saveToken = async (token: string, expireInMinutes: number) => {
    const tokenKey = ['token', JSON.stringify(token)];
    const now = new Date();
    let expireTime = new Date(now);
    const expireAtKey = [
      'expireAt',
      JSON.stringify(expireTime.setMinutes(now.getMinutes() + expireInMinutes)),
    ];

    try {
      // @ts-ignore
      await AsyncStorage.multiSet([tokenKey, expireAtKey]);
    } catch (e) {
      console.log('Multiset err', e);
    }
  };

  static getData = async (param: string) => {
    let value = null;
    if (!param) {
      return value;
    }
    try {
      const data = (await AsyncStorage.getItem(param)) as string;
      value = JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
    return value;
  };

  static deleteData = async (param: string) => {
    let value = null;
    if (!param) {
      return value;
    }
    try {
      value = (await AsyncStorage.removeItem(param)) as unknown;
    } catch (e) {}
    return value;
  };

  static ClearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  };
}
