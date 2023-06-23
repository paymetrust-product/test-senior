# Frontend

Il s'agit de la partie front-end de l'application. Elle est développée en Angular.

# Structure du projet

Le projet est structuré de la manière suivante :

```
│src/
├── app/
│   ├── core/  (contient les entités, les exceptions, les interfaces, etc.)
│   ├── features/  (contient la logique de l'application)
│   ├── data/  (contient les services de données, API, etc.)
│   └── presentation/  (contient les composants de l'interface utilisateur)

│   ├── assets/ # Fichiers statiques
│   ├── environments/ # Environnements de développement et de production
│   └── index.html # Fichier HTML de base
├── angular.json
├── package.json
├── tsconfig.json
├── tslint.json
├── tailwind.config.js
├── .editorconfig
├── .gitignore
├── .prettierrc
└── README.md
```

Elle est découpée en 3 couches (domain, data et presentation) et 2 couches transverses (core et assets) :

- **Domain** : contient les entités et les cas d'utilisation de l'application
- **Data** : contient les sources de données de l'application
- **Presentation** : contient les composants et les services de l'application
- **Core** : contient les éléments communs à l'ensemble de l'application
- **Assets** : contient les fichiers statiques de l'application
- **Environments** : contient les environnements de développement et de production de l'application
- **Index.html** : fichier HTML de base de l'application

# Prérequis

Pour pouvoir lancer le projet, il faut avoir installé NodeJS et NPM.

### Requirements

<table>
<tbody>
 <tr>
      <td align="center" valign="middle">
        <a href="https://git-scm.com/" target="_blank">
          <img width="80px" src="https://git-scm.com/images/logo@2x.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://angular.io/" target="_blank">
          <img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png">
        </a>
      </td>
       <td align="center" valign="middle">
        <a href="http://snapsvg.io/" target="_blank">
          <img width="80px" src="http://snapsvg.io/assets/images/logo.svg">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://www.jetbrains.com/fr-fr/phpstorm/" target="_blank">
          <img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png">
        </a>
      </td>
       <td align="center" valign="middle">
        <a href="https://vitejs.dev/" target="_blank">
          <img width="80px" src="https://vitejs.dev/logo.svg">
        </a>
      </td>
  </tr>
</tbody>
</table>

## Installation

Pour installer le projet, il faut tout d'abord installer les dépendances avec la commande suivante :

```bash
  npm install
```

## Lancement

Pour lancer le projet, il faut utiliser la commande suivante :

```bash
  npm start
```

L'applicaton est lancé par défaut sur le port 4200
, veuillez lire le README de backend pour lancer l'api mais aussi sur le port 8080

## Auteur

- Guelade Kevin
