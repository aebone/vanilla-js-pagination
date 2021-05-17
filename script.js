const fruits = ["Watermelon", "Strawberry", "Avocado", "Banana", "Cherries", "Lime", "Mango", "Nectarine", "Pear", "Pitaya", "Pitanga", "Mandarin", "Lemon", "Coconut"];

const fruits_element = document.getElementById('favorite-fruits');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let items_per_page = 4;
let number_of_pages = Math.ceil(fruits.length / items_per_page);

displayFruits = (page) => {
  fruits_element.innerHTML = "";
	page--;

	let start = items_per_page * page;
	let end = start + items_per_page;
	let paginatedItems = fruits.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.innerText = item;
		
		fruits_element.appendChild(item_element);
	}
}

addPagination = () => {
  for (let i = 1; i < number_of_pages + 1; i++) {
    let button_element = document.createElement('button');
    button_element.innerText = i;

    button_element.addEventListener('click', function () {
      current_page = i;

      displayFruits(i);
    });
    pagination_element.appendChild(button_element);
	}
}

displayFruits(current_page);
addPagination();
