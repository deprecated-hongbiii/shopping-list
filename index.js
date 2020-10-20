const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const addButton = document.querySelector('.new-memo__add-button');

class Card {
  render() {
    const cardContainer = document.createElement('li');
    ul.append(cardContainer);
    cardContainer.textContent = `${input.value}`;

    const renderDeleteButton = document.createElement('div');
    cardContainer.append(renderDeleteButton);
    renderDeleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`;
    renderDeleteButton.classList.add('delete-button');
  }

  delete() {
    li.remove();
    console.log('delete button is clicked');
  }
}

const activateAddButton = (e) => {
  e.target.value == ''
    ? (addButton.disabled = true)
    : (addButton.disabled = false);
};

const card = new Card();

addButton.addEventListener('click', card.render);
input.addEventListener('input', activateAddButton);

const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', card.delete);
