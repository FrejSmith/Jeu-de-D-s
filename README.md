# Jeu de dés en POO

Jeu de dés à deux joueurs sur 5 tours, écrit en JavaScript avec trois classes :

- `Des` : `nbrface`, `score`, méthode `lancer()` (nombre aléatoire de 1 à `nbrface`)
- `Joueur` : `nom`, `valeurLance`, `des`, méthode `lancerDes()`
- `Partie` : `joueur1`, `joueur2`, `nbrTour`, `scoreJ1`, `scoreJ2`, méthode `lancerPartie()`

## Règles
À chaque tour, les deux joueurs lancent un dé à 6 faces :
- le plus grand lancer gagne 2 points ;
- en cas d'égalité, chaque joueur gagne 1 point.

À la fin des tours, le joueur avec le plus de points gagne : son nom et son score sont affichés dans la console.

## Lancer le jeu
- Dans le terminal : `node script.js`
- Ou ouvrir `index.html` dans le navigateur (Live Server) puis la console (F12).
