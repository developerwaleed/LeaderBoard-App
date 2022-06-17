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

let getGameId = null;
const creatNewGame = () => {
  const newId = newgame();
  newId.then((data) => {
    const test = data.result;
    const regex = /(?<=ID: )(.*)(?= added)/g;
    getGameId = regex.exec(test);
    getGameId = [0];
  });
};

const GameId = getGameId;
export { GameId, creatNewGame };
