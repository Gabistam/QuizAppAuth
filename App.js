import React, { useEffect } from 'react';
import './src/lib/FirebaseConfig.js'; // Initialisation de Firebase
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import Firestore
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  // Récupérer la liste des utilisateurs
  useEffect(() => {
    // Exemple : Récupérer des données globales depuis Firestore au démarrage de l'app
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "someCollection"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer style={styles.container} >
      <AppNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
