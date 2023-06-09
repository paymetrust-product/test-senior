# Mise en marche
## Backend
L'application backend de ce projet a été réalisée avec le framework Node.js [Nest JS](https://nestjs.com/)
et l'**ORM** [prisma](https://www.prisma.io/).

Exécutez la commande `yarn` à la racine du projet backend pour installer les dépendances du projet.

### configuration et lancement de la base de donnée
1. Tous d'abord copiez le fichier `.env.exemple` à la racine du projet et renommez-le en `.env`.

2. Modifiez dans ce fichier `.env` la propriété `DATABASE_URL` par l'URL de votre la base de données.

3. Pour initialiser la base de données, assurez-vous de l'avoir créée correctement, puis exécutez la commande suivante :
```
yarn init-database
```

4. Afin d'avoir un ensemble minimal de données dans la base de données pour utiliser l'application, exécutez la commande suivante pour initialiser les seeders :
```
yarn seed-database
```

5. Une fois cette commande exécutée, vous pourrez vous authentifier avec les identifiants suivants :

```
Username: admin
password: admin
```
#### NB:
Ce projet a été configuré pour fonctionner avec une base de données PostgreSQL. Si vous souhaitez utiliser une autre base de données, vous pouvez modifier cette configuration dans le fichier `/prisma/schema.prisma`.

Dans ce fichier, vous pourrez ajuster les paramètres de connexion à la base de données en fonction de vos besoins. Par exemple, vous pouvez changer le type de base de données (PostgreSQL, MySQL, SQLite, etc.)

### Démarrer le projet Backend
Vous pouvez maintenant démarrer le projet backend en mode de développement avec la commande suivante :
```
yarn start
```
L'application backend sera accessible via l'URL suivante : http://localhost:3000 🚀

## Frontend
L'application frontend de ce projet a été réalisée avec le framework JavaScript [angular](https://angular.io/) et la librairie **UI** [ng-Bootstrap](https://ng-bootstrap.github.io/)

Suivez les étapes suivantes pour le démarrer en mode développement.

1. Commencez par installer les dépendances en exécutant la commande suivante **à la racine du projet** :
```
npm install
```

2. Une fois les dépendances installées, exécutez la commande suivante **à la racine du projet** pour le démarrer :
```
npm start
```
L'application frontend sera alors accessible via le lien suivant : http://localhost:4200 🚀

# Ressources
1. À la racine du projet, vous trouverez la structure de la base de données dans le fichier [mysql workbench](https://www.mysql.com/products/workbench/): `blog_BD.mwb`.

2. Toujours à la racine du projet, vous trouverez la collection [postman](https://www.postman.com/) de l'API: `paymetrust-blog.postman_collection`.

# Infos architecture
Les deux projets ont été réalisés en utilisant l'architecture propre (clean architecture). Les composants centraux de ces projets se trouvent dans les dossiers suivants :
```
backend: /core
frontend: /src/core
```
Dans le dossier backend, vous trouverez les éléments essentiels de l'architecture, tels que les entités, les cas d'utilisation, les interfaces de répository, et d'autres composants clés.

Dans le dossier frontend, plus précisément dans `/src/core`, vous trouverez les éléments centraux de l'architecture frontend, tels que les services, les modèles de données, les composants réutilisables, et d'autres éléments essentiels.

Ces dossiers `core` constituent le cœur de chaque projet et servent de fondation solide pour le développement et la maintenance de l'application. Ils suivent les principes de l'architecture propre pour garantir la séparation des préoccupations et la facilité d'évolution.

N'hésitez pas à explorer ces dossiers pour mieux comprendre la structure interne des projets et les choix d'architecture effectués.

# Conditions de réalisation
Ce test a été réalisé de façon incomplète en raison d'une charge de travail importante dans un délai très court, lors des nuits du mardi 6 juin 2023, mercredi 7 juin 2023 et jeudi 8 juin 2023. Étant donné mes responsabilités actuelles, je n'ai pas pu consacrer de temps à ce test pendant la journée. Le résultat présenté ici est donc le fruit de mes efforts durant les nuits mentionnées.

Réaliser ce projet intégralement en respectant les bonnes pratiques d'architecture dans un délai aussi court était pratiquement impossible.

Cependant, j'ai implémenté les fonctionnalités de gestion des rôles et des administrateurs afin de vous donner un aperçu de mes compétences en matière d'architecture propre.

Le résultat obtenu présente encore de nombreuses failles et erreurs que je n'ai malheureusement pas pu corriger dans le temps imparti, car l'objectif était de fournir un résultat expérimental.

## Quelques Eléments à améliorer
### Backend
1. Vérifier l'expiration du token dans le AuthGuard.
2. Vérifier que l'ID retourné dans le token existe dans la base de données.
3. Éviter certaines suppressions qui pourraient priver l'application d'administrateurs disposant de droits suffisants.

### Frontend
1. Déconnecter automatiquement l'utilisateur lorsque son TOKEN expire, ou réinitialiser automatiquement son TOKEN.
2. Masquer les boutons d'actions relatifs aux rôles et aux administrateurs s'ils représentent un risque de priver l'application d'administrateurs disposant de droits suffisants, ou même empêcher l'utilisateur actuel de rester actif.
3. Etc...

## Frontend minimaliste

En raison du manque de temps, je n'ai pas pu accorder beaucoup d'attention à l'apparence visuelle de l'application. Cependant, afin de vous donner une idée de mes compétences en matière de développement frontend, je vous invite à consulter certains de mes projets sur mon [github](https://github.com/arnoldatse).

Voici quelques projets frontend que vous pouvez consulter :

1. [Test Bizao](https://github.com/arnoldatse/test-bizao): Ce projet a été réalisé dans le cadre d'un test technique pour une entreprise, mais je n'ai malheureusement jamais reçu le test technique.

2. [React SandBox](https://github.com/arnoldatse/react-sandbox): Ce projet a été créé comme point de départ pour mes recherches personnelles sur React.js afin d'expérimenter différentes choses. Une démo de ce projet est disponible ici : [https://arnoldatse.github.io/react-sandbox](https://arnoldatse.github.io/react-sandbox)

3. [Test Angular débutant](https://github.com/arnoldatse/test-angular): Ce projet a été réalisé en 2022 dans le cadre d'un test technique pour une entreprise afin d'évaluer mes compétences en Angular, sans avoir aucune expérience préalable avec ce framework.

3. [Test Next JS](https://github.com/arnoldatse/test-angular): Ce projet a été réalisé en 2022 dans le cadre d'un test technique pour une entreprise, bien que je n'aie jamais utilisé ce framework auparavant.

## Précisions supplémentaires
Il est également important de noter que le backend a été développé avec le framework [Nest JS](https://nestjs.com/) et l'ORM [prisma](https://www.prisma.io/) que je n'ai plus utilisés depuis la fin de ma formation bootcamp en février 2023.
Cela vaut également pour la bibliothèque [ngBootstrap](https://ng-bootstrap.github.io/) que je n'ai jamais utilisée, car j'ai l'habitude de créer des designs à partir de zéro ou d'utiliser des templates simples.
Je mentionne ces éléments pour que vous preniez en compte mon niveau d'adaptation.