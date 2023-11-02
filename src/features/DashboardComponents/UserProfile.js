import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const user = getAuth().currentUser;
    const db = getFirestore();
    const userDoc = doc(db, 'users', user.uid);
  
    getDoc(userDoc).then((docSnap) => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        setAvatar(docSnap.data().avatar);
      }
    });

    const loadAvatar = async () => {
      console.log("Chargement de l'avatar depuis AsyncStorage...");
      const storedAvatar = await AsyncStorage.getItem('avatarUri');
      if (storedAvatar) {
        console.log("Avatar trouvé dans AsyncStorage:", storedAvatar);
        setAvatar(storedAvatar);
      } else {
        console.log("Aucun avatar trouvé dans AsyncStorage.");
      }
    };

    loadAvatar();
  }, []);

  const storeAvatarLocally = async (imageUri) => {
    console.log("Storing Image URI:", imageUri);
    if (!imageUri) {
      console.warn("Image URI est undefined!");
      return;
    }

    await AsyncStorage.setItem('avatarUri', imageUri);
    console.log("Avatar stocké dans AsyncStorage.");
    setAvatar(imageUri);
  };

  const takePhoto = async () => {
    console.log("Lancement de la caméra...");
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled && result.assets && result.assets[0].uri) {
      await storeAvatarLocally(result.assets[0].uri);
    }
};


const pickImage = async () => {
  console.log("Ouverture de la bibliothèque d'images...");
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log("Résultat de la sélection d'image:", result);

  if (!result.cancelled && result.assets && result.assets[0].uri) {
    console.log("Image sélectionnée. Tentative de stockage...");
    await storeAvatarLocally(result.assets[0].uri);
  } else {
    console.log("Aucune image sélectionnée ou opération annulée.");
  }
};


  const showImagePickerOptions = () => {
    Alert.alert(
      'Choisissez une option 📸',
      'Voulez-vous choisir une image de votre bibliothèque ou prendre une nouvelle photo?',
      [
        { text: 'Choisir de la bibliothèque', onPress: pickImage },
        { text: 'Prendre une photo', onPress: takePhoto },
        {
          text: 'Annuler',
          onPress: () => {},
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.infosContainer}>
      <Text style={styles.title}>Mes infos</Text>
          <Text style={styles.info}>👤 Nom d'utilisateur: <Text style={{fontWeight:'bold'}}>{userData?.username}</Text></Text>  
          <Text style={styles.info}>📧 Email: <Text style={{fontWeight:'bold'}}>{userData?.email}</Text></Text> 

          <TouchableOpacity onPress={showImagePickerOptions}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatar} />
            ) : (
              <Text style={styles.info}>🖼️ Ajouter un avatar</Text>
            )}
          </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
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
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6200ee',
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  infosContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 40,
  },
 
});

export default UserProfile;
