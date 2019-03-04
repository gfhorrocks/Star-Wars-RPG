var game = {
    playerName: ["Darth Maul", "Kylo Ren", "Qui Gon Jinn", "Yoda"],
    healthPoints: [200, 150, 200, 100],
    attackPower: [20, 15, 20, 15],
    counterattackPower: [20, 15, 20, 25],
    playerTracker: [0, 0, 0, 0],
    enemyTracker: [0, 0, 0, 0],
    defenderTracker: [0, 0, 0, 0],
    imageLocation: ["./assets/images/darthmaulProfile.jpg",
        "./assets/images/kylorenProfile.jpg",
        "./assets/images/quigonjinnProfile.jpg",
        "./assets/images/yodaProfile.jpeg"],

    resetValues: function () {
        this.healthPoints = [200, 150, 200, 100];
        this.playerTracker = [1, 1, 1, 1];
        this.enemyTracker = [0, 0, 0, 0];
        this.defenderTracker = [0, 0, 0, 0];
        this.drawCards();
        chosen=false;
        gameover=false;
        powerBase=0;
        $("#attackButton").text("Attack");
        $("characterText").text("Your Character");
    },

    drawCards: function () {
        $("#selectionRow").empty();
        $("#enemyRow").empty();
        $("#defenderRow").empty();

        for (var i = 0; i < 4; i++) {

            var playerCard = $("<div>");
            var enemyCard = $("<div>");
            var defenderCard = $("<div>");

            playerCard.addClass("playerCard");
            playerCard.attr("name", this.playerName[i]);
            playerCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            playerCard.append(this.healthPoints[i]);

            enemyCard.addClass("enemyCard");
            enemyCard.attr("name", this.playerName[i]);
            enemyCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            enemyCard.append(this.healthPoints[i]);

            defenderCard.addClass("defenderCard");
            defenderCard.attr("name", this.playerName[i]);
            defenderCard.html("<p>" + this.playerName[i] + "</p> <img id='cardImage' src='" + this.imageLocation[i] + "'></br>");
            defenderCard.append(this.healthPoints[i]);

            if (game.playerTracker[i] === 1) {
                $("#selectionRow").append(playerCard);
            };
            if (game.enemyTracker[i] === 1) {
                $("#enemyRow").append(enemyCard);
            };
            if (game.defenderTracker[i] === 1  && game.healthPoints[i]>0) {
                $("#defenderRow").append(defenderCard);
            };
        }
    }
};

game.resetValues();
var playerSelection;
var chosen;
var saberOn = new Audio('http://soundbible.com/grab.php?id=562&type=mp3', 100, true);
var saberClash = new Audio('http://soundbible.com/grab.php?id=18&type=mp3', 100, true);
var playerIndex;
var enemyIndex;
var gameover;
var powerBase;


$(".playerCard").on("click", function () {
    for (var i = 0; i < 4; i++) {
        if ($(this).attr("name") === game.playerName[i]) {
            game.playerTracker[i] = 1;
            playerIndex = i;
        }
        else {
            game.playerTracker[i] = 0;
            game.enemyTracker[i] = 1;
        }
    }

    saberOn.play();
    game.drawCards();
});

$("#enemyRow").on("click", ".enemyCard", function () {

    for (var i = 0; i < 4; i++) {
        if (game.enemyTracker[i] === 1 && $(this).attr("name") === game.playerName[i] && !chosen) {
            game.enemyTracker[i] = 0;
            game.defenderTracker[i] = 1;
            game.drawCards();
            enemyIndex = i;
            powerBase = game.attackPower[i];
            saberOn.play();
            chosen = true;
        }
    }
});

$("#attackButton").on("click", function () {
    if (!gameover) {
        saberClash.play();
        $("fightRow").empty();
        game.healthPoints[enemyIndex] -= game.attackPower[playerIndex];
        game.healthPoints[playerIndex] -= game.counterattackPower[enemyIndex];
        $("#fightRow").text("You attacked " + game.playerName[enemyIndex] + " for " + game.attackPower[playerIndex] + " damage!");
        $("#fightRow").append("They countered with " + game.counterattackPower[enemyIndex] + " damage against you!");
        game.attackPower[playerIndex] += powerBase;
        $("#characterText").text("Your Character Power - " +game.attackPower[playerIndex]);
        game.drawCards();

        if (game.healthPoints[enemyIndex] <= 0) {
            $("#fightRow").text("You defeated " + game.playerName[enemyIndex] + "! Choose your next opponent!");
            $("#defenderCard").addClass("fade");
            chosen = false;
        }
        else if (game.healthPoints[playerIndex] <= 0) {
            $("#fightRow").text("You have been defeated by " + game.playerName[enemyIndex] + "! Press Restart to Start Over!");
            $("#attackButton").text("Restart");
            gameover = true;
        }
    }
    else {
        game.resetValues();
    }
});
