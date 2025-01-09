/*Carte*/


class Carte {
    
    constructor(nom, lieu, longueur) {
        if (longueur <= 0) {
            throw new Error("La longueur de la carte doit être supérieure à 0.");
        }
        this.nom = nom;
        this.lieu = lieu;
        this.debut = 0; 
        this.fin = longueur; 
        this.longueur = longueur; 
    }


    afficherCarte() {
        console.log(`Carte : ${this.nom} - Lieu : ${this.lieu} - Longueur : ${this.longueur}`);
    }
    getDebut() {
        return this.debut;
    }

    getFin() {
        return this.fin;
    }

    getNom() {
        return this.nom;
    }

    getLieu() {
        return this.lieu;
    }

    getLongueur() {
        return this.longueur;
    }

    
   
}


const carte = new Carte("delicate","bote de nuit", 100);


carte.afficherCarte();


console.log("Début :", carte.getDebut());
console.log("Fin :", carte.getFin());

/*Personnages*/


class Personnage {
    constructor(nom, pointsDeVie, force) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.force = force;
    }

    attaquer(cible) {
        console.log(`${this.nom} viole ${cible.nom} !`);
        cible.subirDegats(this.force);
    }

    subirDegats(degats) {
        this.pointsDeVie -= degats;
        console.log(`${this.nom} subit ${degats} points de dégâts.`);
        if (!this.estEnVie()) {
            console.log(`${this.nom} est mort`);
        }
    }

    estEnVie() {
        return this.pointsDeVie > 0;
    }
}


/*heros*/


class Heros extends Personnage {
    constructor(nom, pointsDeVie, force, capaciteSpeciale) {
        super(nom, pointsDeVie, force);
        this.capaciteSpeciale = capaciteSpeciale;
        this.capaciteUtilisee = false; 
    }

    utiliserCapacite() {
        if (this.capaciteUtilisee) {
            console.log(`${this.nom} a déjà utilisé sa capacité spéciale.`);
        } else {
            console.log(`${this.nom} utilise sa capacité spéciale : ${this.capaciteSpeciale}!`);
            this.capaciteUtilisee = true;
            
        }
    }
}



/*Ennemi*/


class Ennemi extends Personnage {
    constructor(nom, pointsDeVie, force, type) {
        super(nom, pointsDeVie, force);
        this.type = type; 
    }

    attaquer(cible) {
        console.log(`${this.nom} poutre ${cible.nom} !`);
        super.attaquer(cible); 
    }
}
const heros = new Heros("Cyriac", 100, 20, "galoche instantanée");
const brigand = new Ennemi("Thomas", 50, 10, "Thomas");





console.log("wallah c'est la guerre hakeleau !");
heros.attaquer(brigand);
if (brigand.estEnVie()) {
    brigand.attaquer(heros);
}

if (!brigand.estEnVie()) {
    console.log("thomas est vaincu !");
}

if (!heros.estEnVie()) {
    console.log("Cyriac est tombé au combat...");
}


heros.utiliserCapacite();
heros.utiliserCapacite(); 

  

