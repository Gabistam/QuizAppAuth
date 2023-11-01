const famousMoviesQuiz = {
  quizTitle: "Cinéma : Grands Classics de 80' à 2000",
  genre: "Movies",
  imgCover: "https://media.giphy.com/media/3o7aD2X9Y2MfWOlYxW/giphy.gif",
  questions: [
    {
      id: 1,
      question: "Quel film de 1994 met en vedette un personnage nommé Forrest Gump ?",
      options: ["Pulp Fiction", "Forrest Gump", "Le Roi Lion", "Speed"],
      correctAnswer: "Forrest Gump",
      explanation: "Forrest Gump est un film de 1994 réalisé par Robert Zemeckis."
    },
    {
      id: 2,
      question: "Quel film de 1980 est basé sur un livre de Stephen King ?",
      options: ["Shining", "E.T.", "Star Wars: L'Empire contre-attaque", "Scarface"],
      correctAnswer: "Shining",
      explanation: "Shining est un film de 1980 réalisé par Stanley Kubrick, basé sur un livre de Stephen King."
    },
    {
      id: 3,
      question: "Quel film de 1999 est connu pour sa réplique 'Je vois des gens morts' ?",
      options: ["Matrix", "Sixième Sens", "Fight Club", "American Pie"],
      correctAnswer: "Sixième Sens",
      explanation: "La réplique 'Je vois des gens morts' est célèbre grâce au film Sixième Sens."
    },
    {
      id: 4,
      question: "Quel film de 1987 met en vedette Patrick Swayze et Jennifer Grey ?",
      options: ["Dirty Dancing", "RoboCop", "Predator", "Full Metal Jacket"],
      correctAnswer: "Dirty Dancing",
      explanation: "Patrick Swayze et Jennifer Grey sont les stars de Dirty Dancing."
    },
    {
      id: 5,
      question: "Quel film de 1997 est centré autour du naufrage du Titanic ?",
      options: ["Le Cinquième Élément", "Titanic", "Men in Black", "La Vie est belle"],
      correctAnswer: "Titanic",
      explanation: "Titanic, réalisé par James Cameron, est centré autour du naufrage du célèbre navire."
    },
    {
      id: 6,
      question: "Quel film de 1985 met en vedette un voyage dans le temps avec une DeLorean ?",
      options: ["Retour vers le Futur", "Rocky IV", "Rambo II", "Le Goonies"],
      correctAnswer: "Retour vers le Futur",
      explanation: "Retour vers le Futur met en vedette un voyage dans le temps avec une DeLorean."
    },
    {
      id: 7,
      question: "Quel film de 1991 est une suite intitulée 'Le Jugement dernier' ?",
      options: ["Terminator 2", "Robin des Bois", "Le Silence des Agneaux", "Thelma et Louise"],
      correctAnswer: "Terminator 2",
      explanation: "Terminator 2: Le Jugement dernier est une suite du film original Terminator."
    },
    {
      id: 8,
      question: "Quel film de 1988 met en vedette Eddie Murphy comme un détective de Detroit ?",
      options: ["Piège de cristal", "Le Cercle des poètes disparus", "Le Grand Bleu", "Le Flic de Beverly Hills II"],
      correctAnswer: "Le Flic de Beverly Hills II",
      explanation: "Eddie Murphy joue le rôle d'un détective de Detroit dans Le Flic de Beverly Hills II."
    },
    {
      id: 9,
      question: "Quel film de 2000 met en vedette Russell Crowe en tant que gladiateur ?",
      options: ["Gladiator", "Memento", "X-Men", "American Psycho"],
      correctAnswer: "Gladiator",
      explanation: "Russell Crowe joue le rôle d'un gladiateur dans le film Gladiator."
    },
    {
      id: 10,
      question: "Quel film de 1996 est une comédie sur le golf et met en vedette Adam Sandler ?",
      options: ["Fargo", "Independence Day", "Happy Gilmore", "Trainspotting"],
      correctAnswer: "Happy Gilmore",
      explanation: "Happy Gilmore est une comédie sur le golf mettant en vedette Adam Sandler."
    }
  ],
  feedback: {
    perfect: {
      comment: "Vous êtes le Spielberg des quiz sur les films ! 🎬",
      image: "https://media.tenor.com/images/your-perfect-score-gif"
    },
    excellent: {
      comment: "Vous êtes prêt pour les Oscars ! 🏆",
      image: "https://media.tenor.com/images/excellent-score-gif"
    },
    veryGood: {
      comment: "Vous êtes un véritable cinéphile ! 🍿",
      image: "https://media.tenor.com/images/very-good-score-gif"
    },
    good: {
      comment: "Pas mal, mais il y a encore des classiques à voir ! 🎥",
      image: "https://media.tenor.com/images/good-score-gif"
    },
    average: {
      comment: "Il est temps de mettre à jour votre filmothèque ! 📼",
      image: "https://media.tenor.com/images/average-score-gif"
    },
    poor: {
      comment: "Vous avez besoin d'un marathon de films ! 📺",
      image: "https://i.pinimg.com/originals/f5/9d/4d/f59d4d28d01733b33d6a97b941ee7e40.gif"
    }
  },
};

export default famousMoviesQuiz;
