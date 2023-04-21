function generateSigne() {

    var choix = Math.floor(Math.random() * 3);

    if (choix === 0) {
      return "Pierre";
    } else if (choix === 1) {
      return "Feuille";
    } else {
      return "Ciseau";
    }
  }
  function determineWinner(signe1, signe2) {
    if (signe1 === signe2) {
      return "Egalité";
    } else if (
      (signe1 === "Pierre" && signe2 === "Ciseau") ||
      (signe1 === "Feuille" && signe2 === "Pierre") ||
      (signe1 === "Ciseau" && signe2 === "Feuille")
    ) {
      return "Joueur 1";
    } else {
      return "Joueur 2";
    }
  }

  function determineLooser(signe1, signe2) {
    if (signe1 === signe2) {
        return "Egalité";
    } else if (
        (signe1 === "Pierre" && signe2 === "Ciseau") ||
        (signe1 === "Feuille" && signe2 === "Pierre") ||
        (signe1 === "Ciseau" && signe2 === "Feuille")
    ) {
        return "Joueur 2";
    } else {
        return "Joueur 1";
    }
    }
  
  
  var manche = 1;
  var scoreJoueur1 = 0;
  var scoreJoueur2 = 0;
  
  while (scoreJoueur1 < 2 && scoreJoueur2 < 2) {
    
    var signeJoueur1 = generateSigne();
    var signeJoueur2 = generateSigne();
    var roundWinner = determineWinner(signeJoueur1, signeJoueur2);
    var roundLooser = determineLooser(signeJoueur1, signeJoueur2);
    console.log("Manche " + manche + " : \x1b[34mJoueur \x1b[38;2;255;165;0m" + signeJoueur1 + "\x1b[37m - \x1b[38;2;255;165;0m" + signeJoueur2 + " \x1b[34mJoueur 2\x1b[37m\nLe gagnant de cette manche est :\x1b[32m " + roundWinner + "\x1b[37m, le perdant est :\x1b[31m " + roundLooser + "\x1b[37m");
    
    var vainqueur = determineWinner(signeJoueur1, signeJoueur2);
    if (vainqueur === "Joueur 1") {
      scoreJoueur1++;
    } else if (vainqueur === "Joueur 2") {
      scoreJoueur2++;
    }
    
    manche++;
  }
  
  var winner;
  if (scoreJoueur1 > scoreJoueur2) {
    winner = "Joueur 1";
  } else if (scoreJoueur2 > scoreJoueur1) {
    winner = "Joueur 2";
  } else {
    winner = "Egalité";
  }

  var looser;
    if (scoreJoueur1 < scoreJoueur2) {
        looser = "Joueur 1";
    } else if (scoreJoueur2 < scoreJoueur1) {
        looser = "Joueur 2";
    }
  
  console.log("Score final : Joueur 1 " + scoreJoueur1 + " - " + scoreJoueur2 + " Joueur 2");
  console.log("Le gagnant est : \x1b[32m " + winner + "\x1b[37m");
  console.log("Le perdant est : \x1b[31m " + looser + "\x1b[37m");
  console.log("Merci d'avoir joué !");
  