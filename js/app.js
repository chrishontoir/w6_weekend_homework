document.addEventListener('DOMContentLoaded', () => {
  console.log("Loaded");

  const newSpeciesForm = document.querySelector('#endangered-species-form');
  newSpeciesForm.addEventListener('submit', handleNewSpeciesFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewSpeciesFormSubmit = function(event) {
  event.preventDefault();

  const endangeredListItem = createEndangeredSpeciesItem(event.target);
  const endangeredList = document.querySelector('#content');
  endangeredList.appendChild(endangeredListItem);

   event.target.reset();
   document.getElementById('name').focus()
}

const createEndangeredSpeciesItem = function (form) {
  const newEndangeredItem = document.createElement('li');
  newEndangeredItem.classList.add('new-item-styling');

  const name = document.createElement('div');
  name.classList.add('block');
  name.textContent = form.name.value;
  newEndangeredItem.appendChild(name);

  const species = document.createElement('div');
  species.classList.add('block');
  species.textContent = form.species.value;
  newEndangeredItem.appendChild(species);

  const continent = document.createElement('div');
  continent.classList.add('block');
  continent.textContent = form.continent.value;
  newEndangeredItem.appendChild(continent);

  return newEndangeredItem;
}

const handleDeleteAllClick = function (event) {
  const endangeredList = document.querySelector('#content');
  endangeredList.innerHTML = '';
  document.getElementById('name').focus()
}
