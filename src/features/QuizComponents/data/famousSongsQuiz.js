const famousSongsQuiz = {
  quizTitle: "Music : Grands Classics de 80' à 2000",
  genre: "Music",
  imgCover: "https://media.giphy.com/media/3o7aD2X9Y2MfWOlYxW/giphy.gif",
  questions: [
    {
      id: 1,
      question: "Quelle chanson de Whitney Houston est une reprise de Dolly Parton ?",
      options: ["I Will Always Love You", "Greatest Love of All", "I'm Every Woman", "How Will I Know"],
      correctAnswer: "I Will Always Love You",
      explanation: "Whitney Houston a repris 'I Will Always Love You', une chanson originale de Dolly Parton."
    },
    {
      id: 2,
      question: "Quelle chanson de Nirvana est devenue un hymne grunge ?",
      options: ["Come As You Are", "Smells Like Teen Spirit", "Lithium", "In Bloom"],
      correctAnswer: "Smells Like Teen Spirit",
      explanation: "'Smells Like Teen Spirit' de Nirvana est souvent considéré comme un hymne grunge."
    },
    {
      id: 3,
      question: "Quelle chanson de Michael Jackson a été publiée en 1982 ?",
      options: ["Billie Jean", "Black or White", "You Are Not Alone", "Bad"],
      correctAnswer: "Billie Jean",
      explanation: "'Billie Jean' est une chanson de Michael Jackson sortie en 1982."
    },
    {
      id: 4,
      question: "Quelle chanson de Madonna est sortie en 1984 ?",
      options: ["Like a Virgin", "Vogue", "Material Girl", "Hung Up"],
      correctAnswer: "Like a Virgin",
      explanation: "'Like a Virgin' est une chanson de Madonna sortie en 1984."
    },
    {
      id: 5,
      question: "Quelle chanson de Britney Spears a été un grand succès en 1998 ?",
      options: ["Toxic", "Oops!... I Did It Again", "...Baby One More Time", "Stronger"],
      correctAnswer: "...Baby One More Time",
      explanation: "'...Baby One More Time' est le premier grand succès de Britney Spears, sorti en 1998."
    },
    {
      id: 6,
      question: "Quelle chanson de Queen est devenue célèbre grâce au film 'Wayne's World' ?",
      options: ["We Will Rock You", "Bohemian Rhapsody", "Don't Stop Me Now", "Radio Ga Ga"],
      correctAnswer: "Bohemian Rhapsody",
      explanation: "'Bohemian Rhapsody' de Queen a gagné en popularité grâce au film 'Wayne's World'."
    },
    {
      id: 7,
      question: "Quelle chanson de MC Hammer est sortie en 1990 ?",
      options: ["Gangnam Style", "U Can't Touch This", "Ice Ice Baby", "Jump Around"],
      correctAnswer: "U Can't Touch This",
      explanation: "'U Can't Touch This' est une chanson de MC Hammer sortie en 1990."
    },
    {
      id: 8,
      question: "Quelle chanson de Ricky Martin a été un succès en 1999 ?",
      options: ["Livin' la Vida Loca", "She Bangs", "Shake Your Bon-Bon", "The Cup of Life"],
      correctAnswer: "Livin' la Vida Loca",
      explanation: "'Livin' la Vida Loca' est une chanson de Ricky Martin qui a été un grand succès en 1999."
    },
    {
      id: 9,
      question: "Quelle chanson d'Eminem a été publiée en 2002 ?",
      options: ["Stan", "Lose Yourself", "The Real Slim Shady", "Without Me"],
      correctAnswer: "Lose Yourself",
      explanation: "'Lose Yourself' est une chanson d'Eminem sortie en 2002."
    },
    {
      id: 10,
      question: "Quelle chanson de Beyoncé a été un succès en 2003 ?",
      options: ["Single Ladies", "Crazy In Love", "Halo", "Irreplaceable"],
      correctAnswer: "Crazy In Love",
      explanation: "'Crazy In Love' est une chanson de Beyoncé qui a été un grand succès en 2003."
    }
  ],
  feedback: {
    perfect: {
      comment: "Vous êtes une véritable Jukebox des hits ! 🎶",
      image: "https://media.tenor.com/images/your-perfect-score-gif"
    },
    excellent: {
      comment: "Vous êtes le DJ de la soirée ! 🎧",
      image: "https://media.tenor.com/images/excellent-score-gif"
    },
    veryGood: {
      comment: "Vous connaissez vos classiques ! 📀",
      image: "https://media.tenor.com/images/very-good-score-gif"
    },
    good: {
      comment: "Pas mal, mais il y a encore des tubes à découvrir ! 🎵",
      image: "https://media.tenor.com/images/good-score-gif"
    },
    average: {
      comment: "Il est temps de mettre à jour votre playlist ! 🎼",
      image: "https://media.tenor.com/images/average-score-gif"
    },
    poor: {
      comment: "Vous avez besoin d'un cours de culture musicale ! 🎙️",
      image: "https://media.tenor.com/images/poor-score-gif"
    }
  },
};

export default famousSongsQuiz;
