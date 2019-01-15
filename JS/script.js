



function Player(name, score, turnScore) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
}

// rollScore refers to one roll of the dice
// turnScore refers to the total amount of points added from several rolls of the dice
// score refers to total score

Player.prototype.play = function(){
  var rollScore = 0
  var dices = [dice1, dice2] 

  dices[0] = Math.floor(Math.random()*(6)+1);
  dices[1] = Math.floor(Math.random()*(6)+1);

  if (dices[0]!== 1 && dices[1] !== 1){
    var totalDice = dices[0] + dices[1];
    rollScore = totalDice;
    this.turnScore += rollScore;

  }else{
    rollScore = 0;
    this.turnScore = 0;
    alert("Hit One");
  }

  // dices.push(dice1, dice2);
  // return dices;
};

Player.prototype.stop = function() {
  this.score += this.turnScore
  this.turnScore = 0;

}

Player.prototype.newTurn = function() {
  this.turnScore = 0;
};

Player.prototype.scoreCheck = function() {
  if(this.score >= 100){
    return "Win";
  };
};

Player.prototype.newGame = function(){
  this.turnScore = 0;
  this.score = 0;

}



// THIS FUNCTION IS TO INITIATE A NEW GAME

$(document).ready(function(){  
  // $(".players").hide();
  
  $(".startGame").submit(function(event){   
    
    var player1input =   $(idOne['input']).val();

    var player1input =   $(idTwo['input']).val();

    $("#playerOneId").text(player1input);
    $("#playerTwoId").text(player2input);

    
    $(".players").fadeIn("slow");
    event.preventDefault();
  });
});


// PLAYER ONE ROLL AND STOP BUTTON BELOW


      var play = function(){
          $(".pOne-roll btn").click(function(event) {

            var player1Dice = player1.play();

            $("#playerOneturnScore").text(" " + player1Dice);
            $("#playerOneRoll").text(" " + player1.turnScore);
            $("#playerOnetotalScore").text(" " + player1.score);

            if(player1Dice === "one"){             
              $(".pOneButtons").fadeOut("slow");
              $(".pTwoButtons").fadeIn("slow");
            };

            var winner = player1.scoreCheck();
            event.preventDefault();

          });
      };

   


      var player1Stops = function(){
        $(".pOneStop btn").click(function(event){

          player1.stop();
          $("#playerOnetotalScore").text(" " + player1.score);
          $("#playerOneturnScore").text(" " + player1.turnScore);   
          event.preventDefault();
          var winner = player1.scoreCheck();

          if(winner === "Win"){
            alert("Congratulations " + player1.name +" you are the winner! GAME OVER!")
            player1.newGame();
            player2.newGame();
            $("#playerOnetotalScore").text(" " + player1.score);
            $("#playerOneturnScore").text(" " + player1.turnScore);
            $("#plyerTwototalScore").text(" " + player2.score);
            $("#playerTwoturnScore").text(" " + player2.turnScore);
            $("#playerOneRoll").text(" ");
            $("#playerTwoRoll").text(" ");

          }
          else{
            $(".pOneButtons").fadeOut("slow");
            $(".pTwoButtons").fadeIn("slow");
          }

        });
      };
  




// PLAYER TWO ROLLS AND STOPS BUTTON BELOW

      var player2Rolls = function(){
          $("#playerOneRoll").click(function(event) {

            var player2Dice = player2.play();

            $("#playerOneRoll").text(" " + player2Dice);
            $("#playerOneturnScore").text(" " + player2.turnScore);
            $("#playerOnetotalScore").text(" " + player2.score);

            if(player2Dice === "one"){
              $("pTwoButtons").fadeOut("slow");
              $(".pOneButtons").fadeIn("slow");
            };
            event.preventDefault();
          });
      };



      var player2Stops = function(event){
        $(".stop-2").click(function(){
          var winner = player2.scoreCheck();

          player2.stop();
          $(".player-2-total-score").text(" " + player2.score);
          $(".player-2-score").text(" " + player2.turnScore);


          var winner = player2.scoreCheck();

          if(winner === "Win"){
            alert("Congratulations " + player2.name +" you are the winner! GAME OVER!");
            player1.newGame();
            player2.newGame();
            $(".player-1-total-score").text(" " + player1.score);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-2-total-score").text(" " + player2.score);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-1-roll").text(" ");
            $(".player-2-roll").text(" ");
            $(".pTwoButtons").fadeOut("slow");
            $(".pOneButtons").fadeIn("slow");
          }else{
            $(".pTwoButtons").fadeOut("slow");
            $(".pOneButtons").fadeIn("slow");
          }
          event.preventDefault();
        });
      };

          play();
          player1Stops();
          player2Rolls();
          player2Stops();
      