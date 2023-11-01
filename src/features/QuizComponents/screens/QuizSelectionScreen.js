import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assurez-vous d'installer @expo/vector-icons

// Import des fichiers JSON
import michaelJacksonQuiz from '../data/michaelJacksonQuiz';
import famousMoviesQuiz from '../data/famousMoviesQuiz';
import famousSongsQuiz from '../data/famousSongsQuiz';
import generalMusicQuiz from '../data/generalMusicQuiz';
import generalSportQuiz from '../data/generalSportQuiz';
import hipHopQuiz from '../data/hipHopQuiz';

const QuizSelectionScreen = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([
    { id: '1', title: 'Quiz sur Michael Jackson', data: michaelJacksonQuiz, icon: 'music-note' },
    { id: '2', title: 'Quiz sur les films célèbres', data: famousMoviesQuiz, icon: 'movie' },
    { id: '3', title: 'Quiz sur les chansons célèbres', data: famousSongsQuiz, icon: 'library-music' },
    { id: '4', title: 'Quiz sur la musique en général', data: generalMusicQuiz, icon: 'music-video' },
    { id: '5', title: 'Quiz sur le sport en général', data: generalSportQuiz, icon: 'sports-basketball' },
    { id: '6', title: 'Quiz sur le hip hop', data: hipHopQuiz, icon: 'headset' },
  ]);

  const handleQuizSelection = (quizData) => {
    // Naviguer vers le QuizScreen avec les données du quiz sélectionné
    navigation.navigate('Quiz', { quizData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sélectionnez un quiz 🎉</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.quizItem} onPress={() => handleQuizSelection(item.data)}>
            <MaterialIcons name={item.icon} size={24} color="white" />
            <Text style={styles.quizTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    gap: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  quizItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    marginBottom: 40,
  },
  quizTitle: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
  },
});

export default QuizSelectionScreen;
