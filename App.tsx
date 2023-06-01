// import './ignoreWarnings';
import RootNavigation from './src/route/root';
// import Toast from 'react-native-toast-message';
import GLOBALS from './src/config/api/globals';
import type {StorageManager} from 'native-base';
import AppFonts from './src/config/utils/fonts';
import React, {useEffect, useState} from 'react';
import AppCustom from './src/config/utils/custom';
import AppColors from './src/config/utils/colors';
// import RNBootSplash from 'react-native-bootsplash';
import AppStorage from './src/config/services/AppStorage';
import {QueryClientProvider, QueryClient} from 'react-query';
// import toastConfig from './src/config/services/toast/toast.config';
import {ColorMode, NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  colors: AppColors,
  components: AppCustom,
  fonts: AppFonts.fontName,
  fontConfig: AppFonts.primaryFont,
});

const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AppStorage.getData('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      console.log(e);
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      // @ts-ignore
      await AppStorage.saveData('@color-mode', value);
    } catch (e) {
      console.log(e);
    }
  },
};

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 5 * (60 * 1000), // 5 mins
      cacheTime: 10 * (60 * 1000), // 10 mins
      retry: 2,
      retryDelay: retryCount => {
        console.log('retryCount', retryCount);
        return retryCount === 0 ? 1000 : 5000; //1sec and 5sec
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    // initBootSplash();
    //setUpOneSignal();
  }, []);

  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  // const initBootSplash = async () => {
  //   try {
  //     let val = await AppStorage.getData('token');
  //     if (val) {
  //       setIsLogin(true);
  //     } else {
  //       setIsLogin(false);
  //     }
  //     // console.log('Thos token', val);
  //     await RNBootSplash.hide({fade: true});
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider
        theme={theme}
        config={config}
        colorModeManager={colorModeManager}>
        <RootNavigation />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
export default App;
