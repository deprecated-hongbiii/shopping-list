const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addButton = document.querySelector('.new-memo__add-button');

class Card {
  render() {
    const cardContainer = document.createElement('li');
    ul.appendChild(cardContainer);
    cardContainer.textContent = `${input.value}`;
  }
}

const card = new Card();

addButton.addEventListener('click', card.render);
