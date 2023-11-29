# Projet de Cryptographie 

Bienvenue sur le projet de cryptographie développé Alexis Katel AHOGLA. Ce projet propose trois méthodes de chiffrement : César, Polybe et Affine.

Il est actuellement hébergé et peut servir de test sur [https://cryptographe.netlify.app](https://cryptographe.netlify.app).

## Table des matières
1. [Introduction](#introduction)
2. [Technologie et language de programation utilisés](#technologies-utilisées)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
    - [César](#cesar)
    - [Polybe](#polybe)
    - [Affine](#affine)
5. [Exemples](#exemples)
6. [Contact](#contact)

## Introduction<a name="introduction"></a>
Ce projet vise à fournir une implémentation simple de trois algorithmes de chiffrement classique


## Technologies et language utilisés<a name="technologies-utilisées"></a>
- Angular avec Typescript

## Installation<a name="installation"></a>
Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 10.0.0 ou ultérieure)
- [Angular CLI](https://angular.io/cli) (installé globalement)

Ensuite, executez dans l'ordre ces commandes :

```bash
$ git clone https://github.com/alexiskatel/cryptography.git
```

```bash
$ cd cryptography
```

```bash
$ npm install
```

```bash
$ npm start
```
Le projet sera ensuite accessible dans votre navigateur à l'adresse http://localhost:4200/.



## Utilisation<a name="utilisation"></a>

### César<a name="cesar"></a>
L'algorithme de chiffrement César consiste à décaler les lettres d'un certain nombre de positions dans l'alphabet.

1. **Entrer le Texte à Chiffrer**

   Une fois à l'adresse [http://localhost:4200/](http://localhost:4200/) dans votre navigateur, vous verrez une interface utilisateur.

   Entrez le texte que vous souhaitez chiffrer dans le champ prévu à cet effet.

2. **Obtenir le Texte Chiffré**

   Cliquez sur le bouton de chiffrement `Procéder`. Le texte que vous avez entré sera chiffré selon l'algorithme César, et le résultat sera affiché à l'écran. Le décalage utilisé est généré aléatoirement et peut être obtenu en sommant les deux chiffres à l'extrémité de la clé chiffrée.

3. **Décrypter le Texte Chiffré**

Si vous souhaitez décrypter le texte chiffré, utilisez le bouton de décryptage et vous serez redirigé vers une page où le texte chiffré vous sera demandé.
Entrez le et obtenez votre texte original.

C'est aussi simple que ça ! Vous pouvez expérimenter avec différentes entrées et observer comment l'algorithme César chiffre et déchiffre le texte.

### Polybe<a name="polybe"></a>

L'algorithme de chiffrement Polybe utilise une grille pour encoder et décoder les lettres.

1. **Entrer le Texte à Chiffrer**

   Choissisez l'option numéro 2 `Polybe` dans le menu et entrez le texte que vous souhaitez chiffrer dans le champ prévu à cet effet.

2. **Entrer la Clé (Optionnel)**

   Vous avez la possibilité d'entrer une clé pour personnaliser la grille Polybe. Si aucune clé n'est fournie, une grille standard sera utilisée.

3. **Obtenir le Texte Chiffré**

   Cliquez sur le bouton de chiffrement. Le texte que vous avez entré sera chiffré selon l'algorithme Polybe, et le résultat sera affiché à l'écran.

4. **Décrypter le Texte Chiffré**

    En cliquant sur le bouton de décryptage de cette page, vous serez redirigé vers une page où le texte chiffré vous sera demandé. Saississez-le et obtenez votre texte original.

    N'hésitez pas à expérimenter avec différentes entrées et clés pour observer le chiffrement et le déchiffrement.

### Affine<a name="affine"></a>

L'algorithme de chiffrement Affine combine deux fonctions linéaires pour chiffrer et déchiffrer des lettres.

1. **Entrer le Texte à Chiffrer**

   Choissisez l'option numéro 3 `Affine` dans le menu et entrez le texte que vous souhaitez chiffrer dans le champ prévu à cet effet.

2. **Entrer les Clés (a et b)**

   L'algorithme Affine utilise deux clés, `a` et `b`(décalage de chiffrement). Assurez-vous que la clé `a`(coeeficient) est choisie de manière à ce qu'il soit premier avec 26. Sinon, une erreur sera affichée.

3. **Obtenir le Texte Chiffré**

   Cliquez sur le bouton de chiffrement. Le texte que vous avez entré sera chiffré selon l'algorithme Affine, et le résultat sera affiché à l'écran.

4. **Décrypter le Texte Chiffré**

    En cliquant sur le bouton de décryptage de cette page, vous serez redirigé vers une page où le texte chiffré, le coefficient `a` et le décalage `b` vous seront demandé. Saississez-le et obtenez votre texte original.

## Exemples<a name="exemples"></a>
...


...

## Contact<a name="contact"></a>
Si vous avez des questions, des commentaires ou des suggestions concernant ce projet de cryptographie, n'hésitez pas à me contacter.

- Nom: Katel AHOGLA
- Adresse e-mail: alexiskatel.contact@gmail.com

Vous pouvez également ouvrir des problèmes (issues) ou des demandes de fonctionnalités sur le [répertoire GitHub](https://github.com/alexiskatel/cryptographie-projet/issues) du projet.

Je suis ouvert aux contributions et aux collaborations. Merci de votre intérêt dans ce projet !

--- 

[Retour à la Table des Matières](#table-des-matières)
