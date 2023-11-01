import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getFirestore, addDoc, collection } from "firebase/firestore";

const RoadmapAdd = ({ userId }) => {
  const [newRoadmapName, setNewRoadmapName] = useState('');

  // Initialisation de Firestore
  const db = getFirestore();
  const roadmapsRef = collection(db, 'users', userId, 'Roadmaps');

  const addNewRoadmap = async () => {
    await addDoc(roadmapsRef, { name: newRoadmapName });
    setNewRoadmapName('');
  };

  return (
    <View>
      <Text>Ajouter une nouvelle Feuille de Route 🗺️</Text>
      <TextInput
        placeholder="Nom de la nouvelle feuille de route"
        value={newRoadmapName}
        onChangeText={setNewRoadmapName}
      />
      <Button title="Ajouter" onPress={addNewRoadmap} />
    </View>
  );
};

export default RoadmapAdd;
