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


# Application blog 

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


### Installation
- S'assurez que Node.js et PostgreSQL sont installés sur votre PC.
- Clonez le dépôt GitHub :
```
git clone https://github.com/japhs99/test-senior.git
```
Installez les dépendances :
```
npm install
```
-Configurez la base de données PostgreSQL en créant une base de données et en configurant les paramètres de connexion dans le fichier config.js.

-Exécutez les migrations pour créer les tables de base de données :
```
npx sequelize-cli db:migrate
```

-Lancez l'application :
```
npm start
```


L'application sera accessible à l'adresse http://localhost:3000.

Tests
Pour exécuter les tests unitaires, utilisez la commande suivante :


```
npm test
```
Les tests sont écrits à l'aide du framework Jest et couvrent différentes fonctionnalités de l'application pour garantir la stabilité et la qualité du code.

### Logging
L'application utilise la bibliothèque Winston pour la gestion des journaux. Les journaux sont enregistrés dans des fichiers dans le dossier logs. Vous pouvez configurer les niveaux de journalisation et les destinations de journalisation dans le fichier config.js.


### architecture
la structure de fichiers respectant la clean architecture :

- **Core** : Ce répertoire contient le noyau de l'application, également appelé la couche de domaine. Il comprend les entités métier, les interfaces de repository et les cas d'utilisation (use cases) de l'application.

- **Infrastructure** : Ce répertoire contient les infrastructures externes, c'est-à-dire les frameworks et les pilotes utilisés par l'application. Dans cet exemple, il contient les répertoires pour Express (contrôleurs, middlewares et routes) et Sequelize (modèles, repositories, migrations, seeds, configuration de la base de données et configuration du logger).

- **Tests** : Ce répertoire contient les tests unitaires pour l'application. Il est divisé en sous-répertoires correspondant aux différentes parties de l'application, tels que le noyau (core) et l'infrastructure.

La structure de fichiers respecte la clean architecture permet de séparer clairement les différentes couches de l'application et de maintenir une indépendance entre elles. Cela facilite les tests unitaires, car chaque couche peut être testée de manière isolée. De plus, cette structure rend l'application plus flexible et évolutive
 
  
  **app.js** : Il s'agit du point d'entrée de l' application, où vous initialisez votre application et démarrez le serveur.

**config.js** : Ce fichier contient la configuration de l'application, telles que les variables d'environnement, les paramètres de base de données, etc.

**core/ :** C'est le répertoire qui contient le noyau de l'application, également appelé "Domain Layer". Il contient les entités métier, les interfaces de repository et les cas d'utilisation.

**entities/ :** Ce répertoire contient les entités métier de l'application, telles que User, Article et Comment. Ce sont des objets qui représentent les concepts de votre domaine.

**repositories/ :** Ce répertoire contient les interfaces de repository qui définissent les opérations de persistance pour chaque entité. Par exemple, UserRepository définit les méthodes pour interagir avec les utilisateurs en base de données.

**usecases/ :** Ce répertoire contient les cas d'utilisation (Use Cases) de l'application. Chaque cas d'utilisation représente une action spécifique que votre application peut effectuer. Par exemple, SignInUseCase gère l'authentification d'un utilisateur, CreateArticleUseCase crée un nouvel article, etc.

**errors/ :** Ce répertoire contient les erreurs personnalisées que vous pouvez définir pour gérer des situations spécifiques dans votre application.

infrastructure/ : Ce répertoire contient les infrastructures externes de l'application, telles que les frameworks et les pilotes de base de données.

**express/ :** C'est le répertoire qui contient les fichiers liés à Express, un framework web pour Node.js.

**controllers/ :** Ce répertoire contient les contrôleurs Express, qui sont responsables de la gestion des requêtes et des réponses HTTP. Il y a des contrôleurs pour l'authentification, les articles, les commentaires et l'administration.

**middlewares/ :** Ce répertoire contient les middlewares Express, qui sont des fonctions intermédiaires qui peuvent être exécutées avant ou après le traitement d'une requête. Par exemple, le middleware d'authentification vérifie si l'utilisateur est authentifié avant de permettre l'accès à certaines routes.

**routes/ :** Ce répertoire contient les routes Express, qui définissent les points de terminaison pour les requêtes HTTP. Il y a des routes pour l'authentification, les articles, les commentaires et l'administration.

**sequelize/ :** C'est le répertoire qui contient les fichiers liés à Sequelize, un ORM (Object-Relational Mapping) pour Node.js qui facilite l'interaction avec la base de données.

**models/ :** Ce répertoire contient les modèles Sequelize, qui définissent la structure des tables de la base de données pour chaque entité.

**repositories/ :** Ce répertoire contient les implémentations de repository Sequelize, qui fournissent les méthodes concrètes pour interagir avec la base de données en utilisant Sequelize.

**migrations/ :** Ce répertoire contient les migrations Sequelize, qui permettent de gérer les modifications de schéma de base de données de manière incrémentielle.

**seeds/ :** Ce répertoire contient les seeds Sequelize, qui sont des données initiales pour peupler la base de données.

**database.js :** Ce fichier contient la configuration de la base de données, telle que l'URL de connexion, les identifiants, etc.

**logger.js :** Ce fichier contient la configuration du logger, qui peut être utilisé pour enregistrer les journaux de l'application.

**tests/ :** Ce répertoire contient les tests unitaires pour votre application.

**core/ :** Ce répertoire contient les tests pour le noyau de l'application, y compris les entités métier, les cas d'utilisation et les interfaces de repository.

**infrastructure/ :** Ce répertoire contient les tests pour l'infrastructure, tels que les contrôleurs Express.

package.json et package-lock.json : Ce sont des fichiers de configuration npm qui contiennent les dépendances et les scripts de l'application.

### Les endpoints de l'API REST 
**Authentification :**

- POST /signin : Se connecter en fournissant les informations

d'identification (username, password) dans le corps de la requête.
POST /signup : Créer un nouveau compte utilisateur en fournissant les informations nécessaires dans le corps de la requête.

**Articles :**
POST /articles : Créer un nouvel article en fournissant les détails de l'article dans le corps de la requête.
GET /articles/:articleId : Récupérer un article spécifique en spécifiant son ID dans l'URL.
PUT /articles/:articleId : Mettre à jour un article spécifique en spécifiant son ID dans l'URL et en fournissant les nouvelles données dans le corps de la requête.
DELETE /articles/:articleId : Supprimer un article spécifique en spécifiant son ID dans l'URL.

**Commentaires :**
POST /comments : Créer un nouveau commentaire en fournissant les détails du commentaire dans le corps de la requête.
GET /comments/:commentId : Récupérer un commentaire spécifique en spécifiant son ID dans l'URL.
PUT /comments/:commentId : Mettre à jour un commentaire spécifique en spécifiant son ID dans l'URL et en fournissant les nouvelles données dans le corps de la requête.
DELETE /comments/:commentId : Supprimer un commentaire spécifique en spécifiant son ID dans l'URL.

**Administration :**
POST /admin/article : Créer un nouvel article en tant qu'administrateur en fournissant les détails de l'article dans le corps de la requête.
PUT /admin/article : Mettre à jour un article en tant qu'administrateur en fournissant les nouvelles données dans le corps de la requête.
DELETE /admin/article/:articleId : Supprimer un article spécifique en tant qu'administrateur en spécifiant son ID dans l'URL.
POST /admin/user : Créer un nouvel utilisateur en tant qu'administrateur en fournissant les détails de l'utilisateur dans le corps de la requête.
PUT /admin/user : Mettre à jour un utilisateur en tant qu'administrateur en fournissant les nouvelles données dans le corps de la requête.
DELETE /admin/user/:userId : Supprimer un utilisateur spécifique en tant qu'administrateur en spécifiant son ID dans l'URL.
