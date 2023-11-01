import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [newUsername, setNewUsername] = useState('');

  useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser);

    if (auth.currentUser) {
      const fetchData = async () => {
        const db = getFirestore();
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNewUsername(docSnap.data().username);
        }
      };

      fetchData();
    }
  }, [user]);

  const handleUpdateUsername = () => {
    const db = getFirestore();
    const userDoc = doc(db, 'users', user.uid);
    updateDoc(userDoc, {
      username: newUsername
    }).then(() => {
      Alert.alert('Succès', 'Votre nom d\'utilisateur a été mis à jour.');
      console.log('Username updated');
    }).catch((error) => {
      console.log('Error updating username:', error);
    });
  };

  const handleSendResetEmail = () => {
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de vouloir réinitialiser votre mot de passe ?',
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Réinitialisation annulée'),
          style: 'cancel',
        },
        {
          text: 'Oui',
          onPress: () => {
            const auth = getAuth();
            sendPasswordResetEmail(auth, auth.currentUser.email)
              .then(() => {
                Alert.alert('Succès', 'Un e-mail de réinitialisation du mot de passe a été envoyé.');
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Erreur', `Code: ${errorCode}, Message: ${errorMessage}`);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mise à jour des infos</Text>
      
      <TextInput
        style={styles.input}
        placeholder="New Username"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateUsername}>
        <Text style={styles.buttonText}>Modifier le nom d'utilisateur</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPwd} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    //button couleur orange
    backgroundColor: '#FFA500',
    width: 300,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonPwd: {
    //button couleur rouge
    backgroundColor: '#FF0000',
    width: 300,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },


});

export default UpdateProfile;
