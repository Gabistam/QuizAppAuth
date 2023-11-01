const hipHopQuiz = {
    quizTitle: "Hip-Hop Knowledge",
    genre: "Music",
    imgCover: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif",
    questions: [
      {
        id: 1,
        question: "Qui est considéré comme le pionnier du hip-hop ?",
        options: ["Tupac Shakur", "DJ Kool Herc", "Jay-Z", "Eminem"],
        correctAnswer: "DJ Kool Herc",
        explanation: "DJ Kool Herc est souvent considéré comme le pionnier du hip-hop."
      },
      {
        id: 2,
        question: "Quel rappeur est connu pour son album 'Illmatic' ?",
        options: ["Nas", "Biggie Smalls", "Kendrick Lamar", "Dr. Dre"],
        correctAnswer: "Nas",
        explanation: "'Illmatic' est un album emblématique de Nas."
      },
      {
        id: 3,
        question: "Quel groupe de hip-hop a sorti l'album 'Enter the Wu-Tang (36 Chambers)' ?",
        options: ["N.W.A.", "Wu-Tang Clan", "A Tribe Called Quest", "Public Enemy"],
        correctAnswer: "Wu-Tang Clan",
        explanation: "L'album 'Enter the Wu-Tang (36 Chambers)' est de Wu-Tang Clan."
      },
      {
        id: 4,
        question: "Quel rappeur est associé au label 'Aftermath Entertainment' ?",
        options: ["50 Cent", "Snoop Dogg", "Dr. Dre", "Kanye West"],
        correctAnswer: "Dr. Dre",
        explanation: "Dr. Dre est le fondateur du label 'Aftermath Entertainment'."
      },
      {
        id: 5,
        question: "Quel rappeur a popularisé le terme 'Bling Bling' ?",
        options: ["Lil Wayne", "Jay-Z", "Kanye West", "Drake"],
        correctAnswer: "Lil Wayne",
        explanation: "Lil Wayne a popularisé le terme 'Bling Bling'."
      },
        {
            id: 6,
            question: "Quel rappeur a sorti l'album 'The College Dropout' ?",
            options: ["Kanye West", "Jay-Z", "Eminem", "Drake"],
            correctAnswer: "Kanye West",
            explanation: "'The College Dropout' est un album de Kanye West."
        },
        {
            id: 7,
            question: "Quel rappeur est connu pour son album 'The Marshall Mathers LP' ?",
            options: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"],
            correctAnswer: "Eminem",
            explanation: "'The Marshall Mathers LP' est un album emblématique d'Eminem."
        },
        {
            id: 8,
            question: "Quel rappeur est connu pour son album 'The Chronic' ?",
            options: ["Snoop Dogg", "Dr. Dre", "Ice Cube", "Tupac Shakur"],
            correctAnswer: "Dr. Dre",
            explanation: "'The Chronic' est un album emblématique de Dr. Dre."
        },
        {
            id: 9,
            question: "Quel rappeur est connu pour son album 'The Blueprint' ?",
            options: ["Jay-Z", "Nas", "Kanye West", "Drake"],
            correctAnswer: "Jay-Z",
            explanation: "'The Blueprint' est un album emblématique de Jay-Z."
        },
        {
            id: 10,
            question: "Quel rappeur est connu pour son album 'The Slim Shady LP' ?",
            options: ["Eminem", "50 Cent", "Dr. Dre", "Snoop Dogg"],
            correctAnswer: "Eminem",
            explanation: "'The Slim Shady LP' est un album emblématique d'Eminem."
        },
    ],
    feedback: {
      perfect: {
        comment: "Vous êtes le roi du hip-hop ! 🎤",
        image: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
      },
      excellent: {
        comment: "Vous savez vraiment de quoi vous parlez ! 🎧",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      },
      veryGood: {
        comment: "Vous avez le flow ! 🎶",
        image: "https://media.giphy.com/media/l2JdU7e38RqzdlakU/giphy.gif"
      },
      good: {
        comment: "Pas mal, mais il y a encore des choses à apprendre ! 📚",
        image: "https://media.giphy.com/media/3o7TKF44k2SB6ulGz6/giphy.gif"
      },
      average: {
        comment: "Un peu plus de pratique vous fera du bien ! 🎵",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      },
      poor: {
        comment: "Il est temps de réviser vos classiques du hip-hop ! 📖",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      }
    },
  };
  
  export default hipHopQuiz;
