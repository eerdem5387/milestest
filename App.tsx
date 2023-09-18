/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useMemo, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackScreen from './src/screen/Auth';
import DashboardScreen from './src/screen/dashboard';

const Stack = createNativeStackNavigator();

const [user, setUser] = useState(null);

const handleAuth = async () => {
  var user = auth().currentUser;

  if (user) {
    setInitialRoute('DashboardScreen');
  } else {
    setInitialRoute('AuthStackScreen');
  }
};

useMemo(() => {
  handleAuth();
}, []);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <Stack.Screen
        name="AuthStackScreen"
        component={AuthStackScreen}
        options={{headerShown: false}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
function setInitialRoute(arg0: string) {
  throw new Error('Function not implemented.');
}
