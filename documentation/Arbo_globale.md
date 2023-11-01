MonAppReactNative/
├── .github/                  # Dossier pour GitHub Actions (CI/CD)
│   └── workflows/
│       └── main.yml
├── assets/                   # Images, polices et autres ressources statiques
├── src/                      # Code source
│   ├── components/           # Composants réutilisables
│   │   ├── Button.js
│   │   └── ProgressBar.js
│   ├── features/             # Dossiers par fonctionnalité
│   │   ├── Auth/             # Authentification
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Dashboard/        # Tableau de bord utilisateur
│   │   │   └── index.js
│   │   └── Tracking/         # Suivi de progression
│   │       └── index.js
│   ├── lib/                  # Bibliothèques et helpers
│   │   └── firebase.js       # Configuration Firebase
│   ├── navigation/           # Gestion de la navigation
│   │   └── AppNavigator.js
│   ├── redux/                # Gestion de l'état Redux
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store.js
│   ├── App.js                # Point d'entrée de l'application
│   └── theme.js              # Thème global (pour styled-components)
├── App.json                  # Configuration Expo
├── package.json              # Dépendances et scripts
├── README.md                 # Documentation
└── .gitignore                # Fichiers à ignorer dans Git
