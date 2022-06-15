const getResponse = async (scoreInfo) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6UXN3Bg7YgI82vpAte1w/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreInfo),
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export default getResponse;