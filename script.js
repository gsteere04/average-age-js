function averageAge(ages) {
  let totalAge = 0;
  let numberOfPeople = 0;

  for (const key in ages) {
    if (ages.hasOwnProperty(key)) {
      totalAge += ages[key];
      numberOfPeople++;
    }
  }

  return totalAge / numberOfPeople;
}

const superHeroes = {
  Tony: 42,
  Peter: 18,
  Steve: 104,
  Bruce: 38,
  Thor: 1055
};

document.addEventListener('DOMContentLoaded', () => {
  const peopleList = document.getElementById('people-list');
  const averageAgeDiv = document.getElementById('average-age');
  const calculateButton = document.getElementById('calculate-button');

  // Display the list of people and their ages
  let listContent = '<ul>';
  for (const name in superHeroes) {
    if (superHeroes.hasOwnProperty(name)) {
      listContent += `<li>${name}: ${superHeroes[name]}</li>`;
    }
  }
  listContent += '</ul>';
  peopleList.innerHTML = listContent;

  // Add event listener to the button
  calculateButton.addEventListener('click', () => {
    const avgAge = averageAge(superHeroes);
    averageAgeDiv.innerText = `The average age is ${avgAge.toFixed(1)}`;
  });
});
