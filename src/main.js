var channels = ["summit1g", "riotgames","syndicate","esl_csgo","summit1g"];
var player;

//Channnel List Creation
var channelsUL = document.createElement('ul');
channels.forEach(function(number, i) {
var li = document.createElement('li');
li.setAttribute('data-channelname', number);
li.setAttribute('id', number);
li.innerText = number;
channelsUL.append(li);
});
document.getElementById('userslist').appendChild(channelsUL);

//Onclick twigger twitch player
var elements = document.querySelectorAll("#userslist li");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", showChannel);
  elements[i].click();
}

function showChannel(e){  
  e.preventDefault;
  var channelName = e.target.getAttribute('data-channelname');
  console.log(channelName);
  player = null;
  document.getElementById('twitch').innerHTML = "";  
  var options = {
    channel: channelName, // TODO: Change this to the streams username you want to embed
    width: 1100,
    height: 700,
    // parent: 'localhost' //optional
  };
  player = new Twitch.Player("twitch", options);
  player.addEventListener(Twitch.Player.READY, initiate);

  }



  function initiate() {
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.removeEventListener(Twitch.Player.READY, initiate);
  }

  function handleOnline() {
    document.getElementById("channelMsg").innerHTML = "";
    // var msg = document.createElement('div');
    // document.getElementById("channelMsg").appendChild(msg).innerText = "Online";
    player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.setMuted(false);
  }

  function handleOffline() {
    document.getElementById("channelMsg").innerHTML = "";
    var msg = document.createElement('div');
    document.getElementById("channelMsg").appendChild(msg).innerText = "Channel is Offline";
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.setMuted(true);
  }


 