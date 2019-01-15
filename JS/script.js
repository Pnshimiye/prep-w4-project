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
//Creates random number, saves it and then returns it
Turn.prototype.diceRoller = function(player1, player2) {
  var randNumber = Math.floor(Math.random() * 6) + 1;
  this.total += randNumber;

  if (randNumber == 1) {
      this.total = 0;
      this.endTurn(player1, player2);
      // this.randNumber += randNumber;
      return randNumber;
  } else {
      this.randNumber += randNumber;
      return randNumber;
  };
};

Turn.prototype.endTurn = function(player1, player2) {
  //adding total to score
  this.player.score += this.total;
  //and clearing total
  this.total = 0;
  this.randNumber = 0;
  if (this.player == player1) {
      this.player = player2;
      $("#player2").toggleClass("active");
      $("#player1").toggleClass("active");
  } else if (this.player == player2) {
      this.player = player1;
      $("#player2").toggleClass("active");
      $("#player1").toggleClass("active");
  };
};
