import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Importez l'icône que vous souhaitez utiliser
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue au Quiz de Culture Pop 🎉</Text>
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('MyQuiz')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="play" size={24} color="white" />
          <Text style={styles.buttonText}>Démarrer un Quiz</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.scoresButton} 
        onPress={() => navigation.navigate('AllScores')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="trophy" size={24} color="white" />
          <Text style={styles.buttonText}>Mes Scores</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 80,
    textAlign: 'center',
  },
  startButton: {
    flexDirection: 'row',  // Pour aligner l'icône et le texte côte à côte
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',  // Centrer verticalement
    marginTop: 10,

  },
  scoresButton: {
    flexDirection: 'row',  // Pour aligner l'icône et le texte côte à côte
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',  // Centrer verticalement
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,  // Espacement entre l'icône et le texte
  },
});

export default HomeScreen;
