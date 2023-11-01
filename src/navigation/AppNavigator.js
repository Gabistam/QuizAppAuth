import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../features/AuthComponents/Login';
import RegisterScreen from '../features/AuthComponents/Register';
import DashboardScreen from '../features/DashboardComponents/Dashboard';
import ForgotPasswordScreen from '../features/AuthComponents/ForgotPassword';
import UpdateProfile from '../features/AuthComponents/UpdateProfile';
import UserProfile from '../features/DashboardComponents/UserProfile';
import RoadmapList from '../features/RoadmapComponents/RoadmapList';
import AllScoresScreen from '../features/QuizComponents/screens/AllScoresScreen';
import QuizScreen from '../features/QuizComponents/screens/QuizScreen';
import QuizSelectionScreen from '../features/QuizComponents/screens/QuizSelectionScreen';
import HomeScreen from '../features/QuizComponents/screens/HomeScreen';
import ResultScreen from '../features/QuizComponents/screens/ResultScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        {/* Vous pouvez ajouter une logique ici pour décider quel écran afficher en premier */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="RoadmapList" component={RoadmapList} />
        <Stack.Screen name="AllScoresScreen" component={AllScoresScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizSelectionScreen" component={QuizSelectionScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
