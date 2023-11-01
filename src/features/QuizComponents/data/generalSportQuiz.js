const generalSportsQuiz = {
    quizTitle: "General Sports Knowledge",
    genre: "Sports",
    imgCover: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif",
    questions: [
      {
        id: 1,
        question: "Quel pays a remporté la Coupe du Monde de football en 2018 ?",
        options: ["Allemagne", "France", "Brésil", "Argentine"],
        correctAnswer: "France",
        explanation: "La France a remporté la Coupe du Monde de football en 2018."
      },
      {
        id: 2,
        question: "Qui détient le record du monde du 100 mètres ?",
        options: ["Usain Bolt", "Carl Lewis", "Michael Johnson", "Tyson Gay"],
        correctAnswer: "Usain Bolt",
        explanation: "Usain Bolt détient le record du monde du 100 mètres."
      },
      {
        id: 3,
        question: "Quel joueur de basketball a été surnommé 'His Airness' ?",
        options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"],
        correctAnswer: "Michael Jordan",
        explanation: "Michael Jordan a été surnommé 'His Airness'."
      },
      {
        id: 4,
        question: "Dans quel sport utilise-t-on un 'birdie' ?",
        options: ["Golf", "Badminton", "Tennis", "Baseball"],
        correctAnswer: "Badminton",
        explanation: "Un 'birdie' est utilisé dans le badminton."
      },
      {
        id: 5,
        question: "Quel pays est le plus titré en Coupe Davis ?",
        options: ["États-Unis", "France", "Australie", "Suède"],
        correctAnswer: "États-Unis",
        explanation: "Les États-Unis sont le pays le plus titré en Coupe Davis."
      },
        {
            id: 6,
            question: "Quel sport est associé à Roger Federer ?",
            options: ["Tennis", "Golf", "Basketball", "Football"],
            correctAnswer: "Tennis",
            explanation: "Roger Federer est un joueur de tennis professionnel."
        },
        {
            id: 7,
            question: "Quel sport est associé à Tiger Woods ?",
            options: ["Tennis", "Golf", "Basketball", "Football"],
            correctAnswer: "Golf",
            explanation: "Tiger Woods est un joueur de golf professionnel."
        },
        {
            id: 8,
            question: "Quel sport est associé à Michael Schumacher ?",
            options: ["Formule 1", "Rallye", "Moto", "Cyclisme"],
            correctAnswer: "Formule 1",
            explanation: "Michael Schumacher est un pilote de Formule 1."
        },
        {
            id: 9,
            question: "Quel sport est associé à Michael Phelps ?",
            options: ["Natation", "Plongeon", "Water-polo", "Triathlon"],
            correctAnswer: "Natation",
            explanation: "Michael Phelps est un nageur professionnel."
        },
        {
            id: 10,
            question: "Quel sport est associé à Mike Tyson ?",
            options: ["Boxe", "MMA", "Kickboxing", "Judo"],
            correctAnswer: "Boxe",
            explanation: "Mike Tyson est un boxeur professionnel."
        },
    ],
    feedback: {
      perfect: {
        comment: "Vous êtes une encyclopédie du sport ! 🏆",
        image: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
      },
      excellent: {
        comment: "Vous êtes sur la bonne voie pour devenir un expert ! 🥇",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      },
      veryGood: {
        comment: "Vous avez du talent, continuez comme ça ! 🏅",
        image: "https://media.giphy.com/media/l2JdU7e38RqzdlakU/giphy.gif"
      },
      good: {
        comment: "Pas mal, mais il y a encore des choses à apprendre ! 📚",
        image: "https://media.giphy.com/media/3o7TKF44k2SB6ulGz6/giphy.gif"
      },
      average: {
        comment: "Un peu plus de pratique vous fera du bien ! 🏀",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      },
      poor: {
        comment: "Il est temps de réviser vos classiques sportifs ! 📖",
        image: "https://media.giphy.com/media/3o7TKWJpo2fUN8KzLi/giphy.gif"
      }
    },
  };
  
  export default generalSportsQuiz;
  