# Demarage du projet
## Backend

Le backend de ce projet a été fait en Node JS (Express) couplé avec l' ORM  TypeORM

Exécutez la commande `npm` à la racine du projet backend pour installer les dépendances du projet.

### lancement du container 
deplacer vous dans le dossier paymetrust_docker  et executer la commande suivante dans votre terminale : 
```
docker compose up
```
### lancement de la base de donnée

1. Vous avez la possibilié de pouvoir configurer votre base dans le dossier orm situé dans le domain

2. Afin de pouvoir avoir de la donnée predefini veuillez executer la commande suivante :
```
npm run seed
```

3. Un utilisateur sera crée  :

```
Email: user@gmail.com
password: 1234
```

### Démarrer le projet Backend
Vous pouvez maintenant démarrer le projet backend en mode de développement avec la commande suivante :
```
npm run  start
```
L'application backend sera accessible via l'URL suivante : http://localhost:3002 🚀

## Frontend

L'application a été fait avec le framework Angular

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

1. Des collections postmans sont disponibles dans le dossier postman a la racine du projet afin de mieux tester les API



