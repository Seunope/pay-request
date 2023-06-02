import React from 'react';
import RootNavigation from './src/route/root';
import type {StorageManager} from 'native-base';
import StartBackendServer from './mock-server';
import AppFonts from './src/config/utils/fonts';
import AppCustom from './src/config/utils/custom';
import AppColors from './src/config/utils/colors';
import AppStorage from './src/config/services/AppStorage';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ColorMode, NativeBaseProvider, extendTheme} from 'native-base';

if (window.server) {
  server.shutdown();
}
window.server = StartBackendServer;

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
