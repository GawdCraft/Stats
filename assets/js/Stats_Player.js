/* GawsStats Player Stats */

const URL_API = "https://gawdcraft.github.io/Stats/API";

let params = new URLSearchParams(window.location.search);
let category = params.get("category");
let player = params.get("player");
let players = player.split(";");
players.forEach(playerStats);


function playerStats (player) {
  var statData = getStats(player);
  var catData = statData[category];
  printStats(playerData, statData);
}


function getStats (player) {
  fetch(URL_API+'/player/'+player)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data: ', data);
    })
    .catch(error => {
        console.error('Error: ', error);
    });
}


function printStats (playerData, statData) {

}


