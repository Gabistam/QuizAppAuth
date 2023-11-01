import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importez Ionicons depuis @expo/vector-icons

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut()
      .then(() => {
        console.log('Utilisateur déconnecté 👋'); // Emoji dans le console.log
        navigation.navigate('Login'); // Redirige vers la page de connexion
      })
      .catch((error) => {
        console.error('Erreur lors de la déconnexion:', error);
      });
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.title}><Ionicons name="log-out-outline" size={45} color="#000000" /></Text>
             {/* Utilisez l'icône Ionicons ici */}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
    title: {
        marginTop: 10,
    },
});

export default Logout;
