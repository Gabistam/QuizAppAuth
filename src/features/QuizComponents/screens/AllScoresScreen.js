import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getData } from '../utils/asyncStorage';  // Import des fonctions utilitaires d'AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AllScoresScreen = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const existingScores = await getData('allScores');
      
      if (existingScores === null) {
        setScores([]);
        return;
      }
    
      const bestScores = {};
    
      existingScores.forEach((scoreObj) => {
        if (!bestScores[scoreObj.quiz] || bestScores[scoreObj.quiz] < scoreObj.score) {
          bestScores[scoreObj.quiz] = scoreObj.score;
        }
      });
    
      setScores(Object.entries(bestScores).map(([quiz, score]) => ({ quiz, score })));
    };
    
  
    fetchScores();
  }, []);

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage a été vidé !');
      setScores([]);  // Réinitialisez l'état des scores
    } catch (e) {
      console.log('Erreur lors de la réinitialisation d\'AsyncStorage:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Meilleurs Scores 🏆</Text>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scoreItem}>
            <Text style={styles.quizName}>{item.quiz}</Text>
            <Text style={styles.scoreValue}>{`${Math.round((item.score / 10) * 100)}%`}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.clearButton} onPress={clearAllData}>
        <Text style={styles.clearButtonText}>Réinitialiser les scores</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  quizName: {
    color: 'white',
    fontSize: 15,
    marginRight: 5,
  },
  scoreValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  
});

export default AllScoresScreen;
