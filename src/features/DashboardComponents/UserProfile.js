import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";  // Ajout de l'importation Firestore
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
    const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [metrics, setMetrics] = useState({
    timeSpent: 0,
    projectsCompleted: 0,
    skillsValidated: 0,
    stepsCompleted: 0
  });

  useEffect(() => {
    const user = getAuth().currentUser;  // Utilisation de la variable 'user'
    setUser(user);

    const db = getFirestore();  // Utilisation de Firestore
    const userDoc = doc(db, 'users', user.uid);  // Utilisation de Firestore

    getDoc(userDoc).then((docSnap) => {
      if (docSnap.exists()) {
        setMetrics(docSnap.data());
      }
    });

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes infos</Text>
      
      <View style={styles.metricsContainer}>
        <Text style={styles.metric}>🕒 Temps passé: {metrics.timeSpent} heures</Text>
        <Text style={styles.metric}>🏁 Projets terminés: {metrics.projectsCompleted}</Text>
        <Text style={styles.metric}>🛠️ Compétences validées: {metrics.skillsValidated}</Text>
        <Text style={styles.metric}>✅ Étapes complétées: {metrics.stepsCompleted}</Text>
      </View>
      <View style={styles.container}>
      {/* ... */}
      {/* <Button title="Update Information" onPress={() => navigation.navigate('UpdateProfile')} /> */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdateProfile')}>
            <Text style={styles.buttonText}>Modifier mes infos perso</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metricsContainer: {
    marginTop: 20,
  },
  metric: {
    fontSize: 18,
    marginBottom: 10,
  },
    button: {
        backgroundColor: '#007BFF',
        width: 300,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
});

export default UserProfile;
