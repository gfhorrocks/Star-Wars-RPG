var game = {
    playerName: ["Darth Maul", "Kylo Ren", "Qui Gon Jinn", "Yoda"],
    healthPoints: [200, 150, 200, 100],
    attackPower: [20, 15, 20, 15],
    counterattackPower: [40, 30, 40, 30],
    playerTracker: [1, 1, 1, 1],
    enemyTracker: [0, 0, 0, 0],
    defenderTracker: [0, 0, 0, 0],
    imageLocation: ["./assets/images/darthmaulProfile.jpg",
        "./assets/images/kylorenProfile.jpg",
        "./assets/images/quigonjinnProfile.jpg",
        "./assets/images/yodaProfile.jpeg"],

    reset: function () {
        this.healthPoints = [200, 150, 200, 100];
        this.playerTracker = [1, 1, 1, 1];
        this.enemyTracker = [0, 0, 0, 0];
        this.defenderTracker = [0, 0, 0, 0];
    },

    drawCards: function() {
        for (i = 0; i < 4; i++) {

            var playerCard = $("<div>");
            var enemyCard = $("<div>");
            var defenderCard = $("<div>");

            playerCard.addClass("playerCard");
            playerCard.attr("name",this.playerName[i]);
            playerCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            playerCard.append(this.healthPoints[i]);

            enemyCard.addClass("enemyCard");
            enemyCard.attr("name",this.playerName[i]);
            enemyCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            enemyCard.append(this.healthPoints[i]);

            defenderCard.addClass("defenderCard");
            defenderCard.attr("name",this.playerName[i]);
            defenderCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            defenderCard.append(this.healthPoints[i]);

            if (game.playerTracker[i] === 1) {
                $("#selectionRow").append(playerCard);
            }
            if (game.enemyTracker[i] === 1) {
                $("#enemyRow").append(enemyCard);
            }
            if (game.defenderTracker[i] === 1) {
                $("#defenderRow").append(defenderCard);
            }
        }
    }
};

game.drawCards();

$(".playerCard").on("click", function(){

    console.log($(this).attr("name"));
    
    for(var i=0; i<4; i++){
        if($(this).attr("name") === game.playerName[i]){
            game.playerTracker[i]=1;
        }
        else{
            game.playerTracker[i]=0;
            game.enemyTracker[i]=1;
        }
    }
    $("#selectionRow").empty();
    game.drawCards();
});

