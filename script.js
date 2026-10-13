// ===== TP Jeu de dés en POO =====

// ---------- Classe Des ----------
class Des {
  constructor(nbrface) {
    this.nbrface = nbrface // nombre de faces du dé (6 ici)
    this.score = 0 // résultat du dernier lancer
  }

  // Retourne un nombre aléatoire entre 1 et nbrface
  lancer() {
    this.score = Math.floor(Math.random() * this.nbrface) + 1
    return this.score
  }
}

// ---------- Classe Joueur ----------
class Joueur {
  constructor(nom, des) {
    this.nom = nom
    this.valeurLance = 0 // score fait par le joueur au dernier lancer
    this.des = des // le dé utilisé par le joueur (objet de la classe Des)
  }

  // Le joueur lance son dé : on appelle la méthode lancer de Des
  lancerDes() {
    this.valeurLance = this.des.lancer()
    return this.valeurLance
  }
}

// ---------- Classe Partie ----------
class Partie {
  constructor(joueur1, joueur2, nbrTour = 5) {
    this.joueur1 = joueur1
    this.joueur2 = joueur2
    this.nbrTour = nbrTour
    this.scoreJ1 = 0
    this.scoreJ2 = 0
  }

  lancerPartie() {
    // On remet les scores à zéro pour pouvoir relancer une partie
    this.scoreJ1 = 0
    this.scoreJ2 = 0

    for (let tour = 1; tour <= this.nbrTour; tour++) {
      // Les deux joueurs lancent leur dé
      const lanceJ1 = this.joueur1.lancerDes()
      const lanceJ2 = this.joueur2.lancerDes()

      let resultat = ''

      if (lanceJ1 > lanceJ2) {
        // Le joueur 1 fait plus que le joueur 2 : +2 pour le joueur 1
        this.scoreJ1 += 2
        resultat = `+2 pts pour ${this.joueur1.nom}`
      } else if (lanceJ1 === lanceJ2) {
        // Égalité : +1 pour chacun
        this.scoreJ1 += 1
        this.scoreJ2 += 1
        resultat = `égalité, +1 pt pour chaque joueur`
      } else {
        // Le joueur 2 fait plus que le joueur 1 : +2 pour le joueur 2
        this.scoreJ2 += 2
        resultat = `+2 pts pour ${this.joueur2.nom}`
      }

      console.log(
        `Tour ${tour} : ${this.joueur1.nom} fait ${lanceJ1}, ${this.joueur2.nom} fait ${lanceJ2} -> ${resultat}`
      )
      console.log(
        `   Score : ${this.joueur1.nom} ${this.scoreJ1} - ${this.scoreJ2} ${this.joueur2.nom}`
      )
    }

    this.afficherGagnant()
  }

  // Compare les scores à la fin des tours et affiche le gagnant (nom + points)
  afficherGagnant() {
    console.log('--- Fin de la partie ---')

    if (this.scoreJ1 > this.scoreJ2) {
      console.log(`Le gagnant est ${this.joueur1.nom} avec ${this.scoreJ1} points !`)
    } else if (this.scoreJ2 > this.scoreJ1) {
      console.log(`Le gagnant est ${this.joueur2.nom} avec ${this.scoreJ2} points !`)
    } else {
      console.log(`Égalité parfaite : ${this.scoreJ1} points chacun.`)
    }
  }
}

// ----- Lancement du jeu -----
const joueur1 = new Joueur('Alice', new Des(6))
const joueur2 = new Joueur('Bob', new Des(6))

const partie = new Partie(joueur1, joueur2, 5)
partie.lancerPartie()
