//Creates a player and sets initial score to 0
function Player(userName) {
  this.userName = userName;
  this.score = 0;
};

//pass it a player object!
function Turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};
