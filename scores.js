var makeList = document.createElement("ol")
var grid = document.getElementById("grid")
var scoreList = JSON.parse(localStorage.getItem('highScore'));


grid.appendChild(makeList)

scoreList.forEach(element => {
    var makeItem = document.createElement("li")
    makeItem.innerText = element.name + ' - ' + element.score
    makeList.appendChild(makeItem);
});