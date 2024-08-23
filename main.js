function rollDice() {
  const image = document.getElementById('images');
  const result = document.getElementById('result');
  const numOfDice = document.getElementById('numOfDice').value;
  const totalDiceElement = document.getElementById('totalDice');
  
  const randomDices = [];
  const images = [];
  
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
