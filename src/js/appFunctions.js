import getResponse from './postData.js';
import getData from './getData.js';

const refreshBtn = document.getElementById('refreshBtn');
const Form = document.getElementById('Data-Form');

// const displayItem = (score) => `<li>${score.user}:${score.score}</li>`;

Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userName = document.getElementById('username');
  const score = document.getElementById('score');

  if (score.value && userName.value) {
    const scoreInfo = {
      user: userName.value,
      score: score.value,
    };
    userName.value = '';
    score.value = '';
    getResponse(scoreInfo);
  }
});

refreshBtn.addEventListener('click', () => {
  getData();
});
