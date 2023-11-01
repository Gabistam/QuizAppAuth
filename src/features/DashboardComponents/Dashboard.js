import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Logout from '../AuthComponents/Logout';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const user = getAuth().currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No matching document!");
      }
    };

    fetchData();
  }, []);

  const navigateToComponent = (type) => {
    navigation.navigate(type);
  };

  const data = [
    { id: '1', type: 'UserProfile', icon: 'person-circle-outline' },
    // { id: '2', type: 'UserMetrics', icon: 'analytics-outline' },
    { id: '3', type: 'RoadmapList', icon: 'map-outline' },
    { id: '4', type: 'ProjectList', icon: 'list-outline' },
    { id: '5', type: 'QuizHomeScreen', icon: 'game-controller-outline' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        {userData ? `Welcome to the Dashboard, ${userData.username}! 🎉` : 'Loading... ⏳'}
      </Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {data.map(item => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToComponent(item.type)}>
            <Ionicons name={item.icon} size={42} color="black" />
            <Text>{item.type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.logoutContainer}>
        <Logout />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 35,

  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 25,
    width: '48%', // Pour deux cartes par ligne
    height: 250, // Hauteur plus grande
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3,
    elevation: 4,
  },
  
  
  logoutContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Dashboard;
