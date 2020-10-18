const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addButton = document.querySelector('.new-memo__add-button');

class Card {
  render() {
    const cardContainer = document.createElement('li');
    ul.append(cardContainer);
    cardContainer.textContent = `${input.value}`;

    const deleteButton = document.createElement('div');
    cardContainer.append(deleteButton);
    deleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`;
    deleteButton.classList.add('delete-button');
  }
}

const card = new Card();

addButton.addEventListener('click', card.render);
