const fruits = ["Watermelon", "Strawberry", "Avocado", "Banana", "Cherries", "Lime", "Mango", "Nectarine", "Pear", "Pitaya", "Pitanga", "Mandarin", "Lemon", "Coconut"];

const fruits_element = document.getElementById('favorite-fruits');

displayFruits = () => {

  for (let i = 0; i < fruits.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = fruits[i];
    fruits_element.appendChild(li)
  }
}

displayFruits();
