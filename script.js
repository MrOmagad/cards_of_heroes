let heroes = [['Шрэк', 'Огры'], ['Кот в сапогах', 'Животные']];

function displayHeroes() {
  let heroesContainer = document.getElementById("heroesContainer");
  heroesContainer.innerHTML = '';
  
  for(let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement('div');
    heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;
    heroesContainer.appendChild(heroDiv);
  }
}
displayHeroes();

function addHero() {
  let nameInput = document.getElementById('heroName');
  let classInput = document.getElementById('heroClass');

  if (nameInput.value === "" || classInput.value === "") {
    alert("Пожалуйста, введите не пустые значения");
  }
  else{
    let newHero = [nameInput.value, classInput.value];
  
    heroes.push(newHero);
    displayHeroes();
  
    nameInput.value = "";
    classInput.value = "";
  }
}
document.getElementById("addButton").addEventListener("click", addHero);
