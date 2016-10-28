var p1Button = document.querySelector('#p1'),
    p2Button = document.getElementById('p2'),
    resetButton = document.querySelector('#reset'),
    p1Display = document.querySelector('#p1Display'),
    p2Display = document.querySelector('#p2Display'),
    numInput = document.querySelector('input'),
    winDisplay = document.querySelector('p span'),
    p1Score = 0,
    p2Score = 0,
    gameOver = false,
    winningScore = 5;

p1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;

        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;

    }
});

resetButton.addEventListener('click', function(){
    reset();
});

function reset() {
	console.log('inside reset');
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
}


numInput.addEventListener('change', function() {
    winningScore = Number(this.value);
    winDisplay.textContent = this.value;
    reset();
});
