// this function gets the input and score from the local storage and creats an li on the highscore page of the score and initials. 
function setHighScore() {

    let allHighScore = JSON.parse(localStorage.getItem("gotHighscores"));


    if (allHighScore !== null) {
        for (let i = 0; i < allHighScore.length; i++) {

            let createLi = document.createElement('li');
            createLi.textContent = allHighScore[i].initials + ": " + allHighScore[i].score;
            saveScore.appendChild(createLi);

        }


    }

}

setHighScore();


// clear button to clear the local storage 
clearBtn.addEventListener('click', clearStorage);

function clearStorage() {
    localStorage.clear();
    location.reload();
}
clearStorage();