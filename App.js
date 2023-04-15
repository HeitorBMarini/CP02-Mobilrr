import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';

import LoginScreen from './components/Login';
import CreateUser from './components/CreateUser';
import ChatList from './components/ChatList';
import Chat from './components/Chat';

const Stack = createStackNavigator();

const config = {
  apiKey: 'AIzaSyCOIEMawvjpyThmJTgXEjRLo5ovnipa9M8',
  authDomain: 'bigfiap.firebaseapp.com',
  databaseURL: 'https://bigfiap-default-rtdb.firebaseio.com/',
  projectId: 'bigfiap',
  storageBucket: 'bigfiap.appspot.com',
  messagingSenderId: '741916212372',
};

function App() {
  if (!firebase.apps.length) firebase.initializeApp(config); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Instagram" component={LoginScreen} />
        <Stack.Screen name="Criar Usuário" component={CreateUser} />
        <Stack.Screen name="Chat List" component={ChatList} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
