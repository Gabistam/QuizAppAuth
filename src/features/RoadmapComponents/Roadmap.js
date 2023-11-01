import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { getFirestore, doc, getDoc, addDoc, collection } from "firebase/firestore";
import RoadmapDetail from './RoadmapDetail';
import SkillCard from './SkillCard';
import MilestoneCard from './MilestoneCard';

const Roadmap = ({ roadmapId, userId }) => {
  const [editable, setEditable] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newMilestone, setNewMilestone] = useState('');
  const [roadmapData, setRoadmapData] = useState(null);

  // Initialisation de Firestore
  const db = getFirestore();

  // Références Firestore
  const roadmapRef = doc(db, 'users', userId, 'Roadmaps', roadmapId);
  const skillsRef = collection(roadmapRef, 'Skills');
  const milestonesRef = collection(roadmapRef, 'Milestones');

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(roadmapRef);
      if (docSnap.exists()) {
        setRoadmapData(docSnap.data());
      }
    };
    fetchData();
  }, []);

  const addSkill = async () => {
    await addDoc(skillsRef, { name: newSkill });
    setNewSkill('');
  };

  const addMilestone = async () => {
    await addDoc(milestonesRef, { name: newMilestone });
    setNewMilestone('');
  };

  console.log('Affichage de la feuille de route 🗺️'); // Emoji dans le console.log

  return (
    <View>
      <Text>Feuille de Route 🗺️</Text>
      {roadmapData && <RoadmapDetail roadmap={roadmapData} />}
      
      {/* Ici, vous pouvez mapper les compétences et les étapes depuis roadmapData si elles sont disponibles */}
      
      <Button title="Personnaliser" onPress={() => setEditable(!editable)} />

      {editable && (
        <View>
          <Text>Ajouter une compétence 🎯</Text>
          <TextInput
            placeholder="Nom de la compétence"
            value={newSkill}
            onChangeText={setNewSkill}
          />
          <Button title="Ajouter" onPress={addSkill} />

          <Text>Ajouter une étape 🚩</Text>
          <TextInput
            placeholder="Nom de l'étape"
            value={newMilestone}
            onChangeText={setNewMilestone}
          />
          <Button title="Ajouter" onPress={addMilestone} />
        </View>
      )}
    </View>
  );
};

export default Roadmap;
