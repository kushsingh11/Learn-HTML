import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import LessonDetailScreen from './src/screens/LessonDetailScreen';
import CodeEditorScreen from './src/screens/CodeEditorScreen';
import ErrorBoundary from './src/components/ErrorBoundary';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
          <Stack.Screen name="CodeEditor" component={CodeEditorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
