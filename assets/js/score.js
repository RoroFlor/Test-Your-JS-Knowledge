function PrintHighScores(){
    var highScores = JSON.parse(localStorage.getItem('highscores')) || []
highScores.sort(function(a,b){
    return b.score - a.score
})
for(var i = 0; i < highScores.length; i++){
    var li = document.createElement('li')
    li.textContent = highScores[i].initials + ' - ' + highScores[i].score
    var ol = document.querySelector('#highScores')
    ol.appendChild(li)
}
}

function clear(){
    localStorage.removeItem('highscores')
    window.location.reload()
}

document.querySelector('#clear').onclick = clear
PrintHighScores()

