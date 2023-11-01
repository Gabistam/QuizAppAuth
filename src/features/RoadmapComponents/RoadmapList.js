import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const RoadmapList = ({ userId }) => {
//   const [roadmaps, setRoadmaps] = useState([]);
  
//   // Initialisation de Firestore
//   const db = getFirestore();
//   const roadmapsRef = collection(db, 'users', userId, 'Roadmaps');

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(roadmapsRef);
//       const roadmapsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setRoadmaps(roadmapsData);
//     };
//     fetchData();
//   }, []);

  return (
    <View>
      <Text style={styles.title}>Liste des Feuilles de Route 🗺️</Text>
      {/* {roadmaps.length === 0 ? (
        <Text>Aucune feuille de route à afficher pour le moment. 🤷‍♂️</Text>
      ) : (
        <FlatList
          data={roadmaps}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => }>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
    });


export default RoadmapList;
