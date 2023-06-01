import React, {useEffect} from 'react';
import {Text, Box} from 'native-base';
import OneSignal from 'react-native-onesignal';
import DeviceInfo from 'react-native-device-info';
import colors from '../../../config/utils/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useAddDevice} from '../../../config/hooks/useUser';

const slides = [
  {
    key: 1,
    title: 'Brand New!!!',
    text: 'New interesting features coming up this raining season on Groupay.',
  },
  {
    key: 2,
    title: 'Zero Processing Fee',
    text: 'This Friday no processing fee on all loan. Take advantage of this.',
  },
  {
    key: 3,
    title: 'Airtime Discount',
    text: 'New interesting features coming up this raining season on Groupay.',
  },
];

export default () => {
  const {mutate} = useAddDevice();

  useEffect(() => {
    initializeOneSignal();
  }, []);

  const getPhoneInfo = async (oneSignalId: string) => {
    try {
      const uuid = await DeviceInfo.getUniqueId();
      const build = await DeviceInfo.getBuildId();
      const apiLevel = await DeviceInfo.getApiLevel();
      const isEmulator = await DeviceInfo.isEmulator();
      const macAddress = await DeviceInfo.getMacAddress();
      const fingerPrint = await DeviceInfo.getFingerprint();

      const brand = DeviceInfo.getBrand();
      const appVersion = DeviceInfo.getVersion();
      const deviceType = DeviceInfo.getDeviceType();
      const appBuildNumber = DeviceInfo.getBuildNumber();
      const operatingSystem = DeviceInfo.getSystemName();
      const systemVersion = DeviceInfo.getSystemVersion();

      let deviceData = {
        uuid,
        brand,
        build,
        deviceType,
        macAddress,
        isEmulator,
        appVersion,
        oneSignalId,
        systemVersion,
        appBuildNumber,
        operatingSystem,
        apiLevel: apiLevel.toString(),
        deviceFingerprint: fingerPrint,
      };

      mutate({...deviceData});
      // setUserDevice(deviceData);
    } catch (e) {
      console.log(e);
    }
  };

  const initializeOneSignal = async () => {
    const deviceState = await OneSignal.getDeviceState();
    await getPhoneInfo(deviceState?.userId);
  };

  const renderItem = ({item}: any) => {
    return (
      <Box
        flex="1"
        justifyContent="center"
        px="10"
        pb="10"
        pt="5"
        bgColor="yellow.70"
        _dark={{
          bgColor: 'gray.100',
        }}>
        <Text fontWeight={300} fontSize="xl">
          {item.title}
        </Text>
        <Text>{item.text}</Text>
      </Box>
    );
  };
  const onDone = () => {};
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showDoneButton={false}
      showNextButton={false}
      dotStyle={{backgroundColor: 'rgba(0, 0, 0, .2)', marginTop: 50}}
      activeDotStyle={{
        backgroundColor: colors.blue[100],
        marginTop: 50,
        paddingRight: 60,
      }}
    />
  );
};
