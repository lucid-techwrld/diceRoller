

function rollDice() {
  const image = document.getElementById('images');
  const result = document.getElementById('result');
  const numOfDice = document.getElementById('numOfDice').value;
  const randomDices = [];
  const images = [];
  
  for (let i = 0; i < numOfDice; i++) {
    const randomDice = Math.floor(Math.random() * 6)+1;
    randomDices.push(randomDice);
    images.push(`<img src="${randomDice}.png">`);
  }
  result.textContent= `Dice: ${randomDices.join(", ")}`;
  image.innerHTML = images.join('');
}
