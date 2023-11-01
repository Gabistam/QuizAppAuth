import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const auth = getAuth();

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Succès', 'Un e-mail de réinitialisation a été envoyé.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Erreur', `Code: ${errorCode}, Message: ${errorMessage}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mot de passe oublié</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Entrez votre e-mail"
        value={email}
        onChangeText={setEmail}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 32,
      marginBottom: 70,
    },
    input: {
      width: 300,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 25,
      marginBottom: 15,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: '#007BFF',
      width: 300,
      height: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    }
  });
  

export default ForgotPassword;
