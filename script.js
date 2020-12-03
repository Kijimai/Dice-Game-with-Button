//The h1 text changes based on the result of the dice game. Press the button to start!

const btn = document.querySelector('.btn');
const p1ScoreLocator = document.querySelector('.player1Score');
const p2ScoreLocator = document.querySelector('.player2Score');
let p1Score = 0;
let p2Score = 0;

btn.addEventListener('click', () => {
  const randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
  if(randomNumber1 > randomNumber2) {
    document.querySelector('.container h1').textContent = "Player 1 Wins!";
    p1Score++;
    p1ScoreLocator.innerHTML = `<span> ${p1Score} </span>`;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('.container h1').textContent = "Player 2 Wins!";
    p2Score++;
    p2ScoreLocator.innerHTML = `<span> ${p2Score} </span>`;
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector('.container h1').textContent = "It was a tie!";
  }

  document.querySelector('.img1').setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector('.img2').setAttribute("src", "images/dice" + randomNumber2 + ".png");
});


