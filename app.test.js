const { generateSigne, play  } = require('./app');

    test('generateSigne renvoie une chaine de caractères', () => {
        const signe = generateSigne();
        expect(typeof signe).toBe('string');
    });

    test('generateSigne renvoie 2012012une des trois options Pierre, Feuille, ou Ciseau', () => {
        const signe = generateSigne();
        expect(signe).toMatch(/^(Pierre|Feuille|Ciseau)$/);
    });

    test('play renvoie le gagnant de la partie', () => {
        const winner = play();
        expect(winner).toMatch(/^(Joueur 1|Joueur 2)$/);
    });
  
  test('play renvoie le perdant de la partie', () => {
    const looser = play();
    expect(looser).toMatch(/^(Joueur 1|Joueur 2)$/);
  });
