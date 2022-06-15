const displayItem = (score) => {
    const listPa = document.querySelector('.ulEl');
    const listEl = document.createElement('li');
    listEl.textContent = `${score.user}:${score.score}
        `;
    listPa.appendChild(listEl);
  };

  export default displayItem;