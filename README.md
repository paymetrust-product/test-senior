Ceci est un test technique pour des développeurs Senior. Le test se déroule en deux phases
un test backend et un test frontend. Vous pouvez `fork` le projet et ensuite faire un `PR` quand vous
aurez terminé

# Test Backend

Vous devez concevoir `une API RestFull` pour notre blog en NodeJs en `architecture hexagonal`.

Nous devons pouvoir créer un article, le supprimer, le consulter et le mettre à jour

- Les articles peuvent appartenir à une ou plusieurs catégories
- Nous devons pouvoir commenter les articles
- Un ou plusieurs articles peuvent appartenir à un utilisateur

## Bonus

- Ajouter un système d'authentification **JWT**
- Utiliser une base de données **POSTGRESQL**
- Ajout d'image

# Test Frontend

Vous devez faire l'intégration de l'API développé précédemment. Nous souhaitons que vous utilisiez le `framework Angular` tout en respectant `la clean architecture`.
Vous pouvez utiliser `Talwindcss` ou `Bootstrap` pour le style.

## Bonus

- Authentification
- Panel Administrateur
- Gestion des rôles et permissions


## Application blog 

## Backend

- Ceci est une application de blog qui permet aux utilisateurs de se connecter, de s'inscrire, de lire des articles postés, de créer, de supprimer et de mettre à jour leurs propres articles. Les articles peuvent également être commentés par les membres inscrits. L'application dispose également d'un panneau d'administration pour gérer les articles, les membres et les administrateurs.

## Fonctionnalités
- Authentification : Les utilisateurs peuvent se connecter en utilisant leurs identifiants (adresse e-mail et mot de passe) et un jeton JWT est généré pour les futures requêtes d'authentification.
- Inscription : Les nouveaux utilisateurs peuvent créer un compte en fournissant leur nom, leur adresse e-mail et leur mot de passe.
Lecture des articles : Les utilisateurs peuvent parcourir les articles disponibles et lire leur contenu.
Création, mise à jour et suppression des articles : Les utilisateurs connectés peuvent créer de nouveaux articles, mettre à jour les articles existants et supprimer leurs propres articles.
- Commentaires : Les membres inscrits peuvent commenter les articles.
Gestion des rôles et autorisations : Une autorisation d'administrateur est requise pour accéder au panneau d'administration, qui permet de gérer les articles, les membres et les administrateurs.

## Technologies utilisées
- Node.js : Plateforme de développement JavaScript côté serveur.
- Express.js : Framework Web minimaliste pour Node.js, utilisé pour la gestion des routes et des middlewares.
- PostgreSQL : Système de gestion de base de données relationnelle (SGBDR) utilisé pour stocker les données de l'application.
- Sequelize : ORM (Object-Relational Mapping) pour Node.js qui facilite l'interaction avec la base de données PostgreSQL.
- JWT (JSON Web Tokens) : Méthode d'authentification basée sur des jetons générés et vérifiés par le serveur pour les requêtes d'authentification.
- Bcrypt : Bibliothèque de hachage de mots de passe utilisée pour stocker les mots de passe des utilisateurs de manière sécurisée.
- Winston : Bibliothèque de journalisation flexible et extensible pour enregistrer les journaux dans des fichiers ou d'autres   destinations.
- Jest : Framework de test pour JavaScript, utilisé pour écrire et exécuter des tests unitaires sur l'application.
Installation
Clonez le dépôt GitHub :

bash

git clone <URL_DU_REPOSITORY>
Installez les dépendances :

bash

npm install
Configurez la base de données PostgreSQL en créant une base de données et en configurant les paramètres de connexion dans le fichier config.js.

Exécutez les migrations pour créer les tables de base de données :

bash

npx sequelize-cli db:migrate
Lancez l'application :

bash

npm start
L'application sera accessible à l'adresse http://localhost:3000.

Tests
Pour exécuter les tests unitaires, utilisez la commande suivante :

bash

npm test
Les tests sont écrits à l'aide du framework Jest et couvrent différentes fonctionnalités de l'application pour garantir la stabilité et la qualité du code.

Logging
L'application utilise la bibliothèque Winston pour la gestion des journaux. Les journaux sont enregistrés dans des fichiers dans le dossier logs. Vous pouvez configurer les niveaux de journalisation et les destinations de journalisation dans le fichier config.js.

Contribuer
Si vous souhaitez contribuer à l'amélioration de l'application, vous pouvez suivre les étapes suivantes :

Créez une branche à partir de la branche main :

bash

git checkout -b feature/nom-de-la-fonctionnalité
Effectuez les modifications nécessaires.

Testez votre code avec des tests unitaires appropriés.

Soumettez une demande d'extraction (pull request) en fournissant une description détaillée des modifications apportées.

