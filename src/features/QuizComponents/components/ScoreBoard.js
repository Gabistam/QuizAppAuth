import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Assurez-vous d'installer @expo/vector-icons

const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <View style={styles.scoreBoard}>
      <Text style={styles.scoreText}>Score: </Text>
      <Text style={styles.scoreValue}>{score}</Text>
      <Text style={styles.totalText}> / {totalQuestions}</Text>
      <FontAwesome5 name="trophy" size={24} color="#FFD700" style={styles.trophyIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  scoreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalText: {
    color: 'white',
    fontSize: 18,
  },
  trophyIcon: {
    marginLeft: 10,
  },
});

export default ScoreBoard;
