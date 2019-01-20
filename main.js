var gameData = {
  gold: 1,
  goldPerClick: 1,
  goldPerClickCost: 10
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if(gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"))
if(savegame !== null) {
  gameData = saveGame
}
