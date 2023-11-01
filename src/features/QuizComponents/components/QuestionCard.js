import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assurez-vous d'installer @expo/vector-icons

const QuestionCard = ({ question, options, onSelect }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.optionButton}
          onPress={() => onSelect(option)}
        >
          <FontAwesome name="music" size={24} color="white" />
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    gap: 30,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    paddingLeft: 20,
    borderRadius: 30,
    marginBottom: 10,
    height: 60,
  },
  optionText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default QuestionCard;
