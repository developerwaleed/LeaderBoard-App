import getResponse from './postData';
import getData from './getData';
// container.innerHTML = '';
const refreshBtn = document.getElementById('refreshBtn');
const Form = document.getElementById('Data-Form');

const displayItem = (score) => {
  return `<li>${score.user}:${score.score}</li>`;
};

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
  
export default displayItem;
