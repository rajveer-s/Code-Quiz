
// this function gets the input and score from the local storage and creats an li on the highscore page of the score and initials. 
function setHighScore() {

    let allHighScore = JSON.parse(localStorage.getItem("gotHighscores"));


    if (allHighScore !== null) {
        for (let i = 0; i < allHighScore.length; i++) {

            let createLi = document.createElement('li');
            createLi.textContent = allHighScore[i].userName;
            createLi.textContent = allHighScore[i].score;
            saveScore.appendChild(createLi);

        }


    }

}

setHighScore();

clearBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});