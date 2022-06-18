const newgame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'My cool new game',
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data;
};

// eslint-disable-next-line import/no-mutable-exports
let GameId = null;
const creatNewGame = () => {
  const newId = newgame();
  newId.then((data) => {
    const test = data.result;
    const regex = /(?<=ID: )(.*)(?= added)/g;
    GameId = regex.exec(test);
    // eslint-disable-next-line prefer-destructuring
    GameId = GameId[0];
  });
  const container = document.getElementById('data-container');
  container.innerHTML = "New game has been successfully Created please press refresh and start adding players and there scores";
};

export { GameId, creatNewGame };
