import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import ScoreBoard from '../components/ScoreBoard';

const QuizScreen = ({ route, navigation }) => {
  const { quizData } = route.params;  // Récupération des données du quiz à partir des paramètres de navigation
  console.log(quizData)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    const correctAnswer = quizData?.questions?.[currentQuestionIndex]?.correctAnswer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData?.questions?.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      // Naviguer vers le QuizCompletedScreen avec le score final
      navigation.navigate('Result', { score, totalQuestions: quizData?.questions?.length, quizData });
    }
  };

  return (
    <View style={styles.container}>
      <ScoreBoard score={score} totalQuestions={quizData?.questions?.length} />
      <QuestionCard 
        question={quizData?.questions?.[currentQuestionIndex]?.question}
        options={quizData?.questions?.[currentQuestionIndex]?.options}
        onSelect={handleAnswer}
      />
      {/* Vous pouvez ajouter des boutons ou d'autres éléments d'interface utilisateur ici si nécessaire */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',  
    gap: 30,
  },
});

export default QuizScreen;
