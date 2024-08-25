function rollDice() {
  const image = document.getElementById('images');
  const result = document.getElementById('result');
  const numOfDice = document.getElementById('numOfDice').value;
  const totalDiceElement = document.getElementById('totalDice');
  const error = document.getElementById('errorDisplay');
  
  const randomDices = [];
  const images = [];
  const max = 6;
  
  if (numOfDice > 0 && numOfDice <= max) {
      
      error.textContent = 'Maximum Dice to roll is 6, I wish you Luck🍀!!';
  for (let i = 0; i < numOfDice; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    randomDices.push(randomDice);
    images.push(`<img src="${randomDice}.png">`);
  }
  
  result.textContent = `Dice: ${randomDices.join(", ")}`;
  image.innerHTML = images.join('');
  
  const total = randomDices.reduce((accumulator, element) => accumulator + element, 0);
  totalDiceElement.textContent = `Total: ${total}`;
  }
  else {
    error.textContent = 'Numbuer of Dice to roll should be between 1 and 6';
    error.style.color = 'red';
    
    result.textContent = '';
    image.innerHTML = '';
    totalDiceElement.textContent = '';
  }
}
