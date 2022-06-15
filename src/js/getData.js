const container = document.getElementById('data-container');
const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6UXN3Bg7YgI82vpAte1w/scores/',
  );
  if (!response.ok) {
    throw new Error(`Something Went Wrong status: ${response.status}`);
  }
  const data = await response.json();
  let item = '';
  data.result.forEach((score) => {
    // item += displayItem(score);
    item += `<li>${score.user}:${score.score}</li>`;
  });
  container.innerHTML = item;
};
export default getData;