import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../features/QuizComponents/utils/asyncStorage';
import LoginScreen from '../features/AuthComponents/Login';
import RegisterScreen from '../features/AuthComponents/Register';
import DashboardScreen from '../features/DashboardComponents/Dashboard';
import ForgotPasswordScreen from '../features/AuthComponents/ForgotPassword';
import UpdateProfile from '../features/AuthComponents/UpdateProfile';
import UserProfile from '../features/DashboardComponents/UserProfile';
import AllScoresScreen from '../features/QuizComponents/screens/AllScoresScreen';
import QuizScreen from '../features/QuizComponents/screens/QuizScreen';
import QuizSelectionScreen from '../features/QuizComponents/screens/QuizSelectionScreen';
import HomeScreen from '../features/QuizComponents/screens/HomeScreen';
import ResultScreen from '../features/QuizComponents/screens/ResultScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardNavigator  = () => {
  const [avatarUri, setAvatarUri] = useState(null);

  useEffect(() => {
    const fetchAvatarUri = async () => {
      const uri = await AsyncStorage.getItem('avatarUri');
      setAvatarUri(uri);
    };

    fetchAvatarUri();
  }, []);
  return (
      <Stack.Navigator>
        {/* Vous pouvez ajouter une logique ici pour décider quel écran afficher en premier */}
        <Stack.Screen 
        name="DashboardScreen" 
        component={DashboardScreen} 
        options={{
          headerRight: () => (
            <Image 
              source={avatarUri ? { uri: avatarUri } : null} 
              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} 
            />
          ),
        }}
      />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="AllScores" component={AllScoresScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="MyQuiz" component={QuizSelectionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      screenOptionsOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Dashboard" component={DashboardNavigator} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
