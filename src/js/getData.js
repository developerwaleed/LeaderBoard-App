import { GameId } from './newGame.js';

const container = document.getElementById('data-container');
const getData = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GameId}/scores/`,
  );
  if (!response.ok) {
    throw new Error(`Something Went Wrong status: ${response.status}`);
  }
  const data = await response.json();
  let item = '';
  data.result.forEach((score) => {
    // item += displayItem(score);
    item += `<li><spa>${score.user} </spa><span>${score.score}</span></li>`;
  });
  container.innerHTML = item;
};
export default getData;