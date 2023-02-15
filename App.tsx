import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Routes } from './src/routes';

import { AuthProvider, useAuth } from './src/hooks/auth';

import 'react-native-gesture-handler';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();
  
  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar 
          barStyle='light-content' 
          backgroundColor={theme.colors.primary} />
        <ThemeProvider theme={theme}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}

