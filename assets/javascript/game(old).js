var playerPicked = false;
var enemyPicked = false;
// var characterClone = $("#characterRow").clone();

$("#profilePic1").on("click", function () {
    console.log("playerPicked: " + playerPicked +" enemyPicked: " +enemyPicked);
    if (!playerPicked) {
        $("#characterCard1").empty();
        setplayerCard(1);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard1").empty();
        setenemyCard(1);
        enemyPicked = true;
    }
});

$("#profilePic2").on("click", function () {
    if (!playerPicked) {
        $("#characterCard2").empty();
        setplayerCard(2);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard2").empty();
        setenemyCard(2);
        enemyPicked = true;
    }
});

$("#profilePic3").on("click", function () {
    if (!playerPicked) {
        $("#characterCard3").empty();
        setplayerCard(3);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard3").empty();
        setenemyCard(3);
        enemyPicked = true;
    }
});

$("#profilePic4").on("click", function () {
    if (!playerPicked) {
        $("#characterCard4").empty();
        setplayerCard(4);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard4").empty();
        setenemyCard(4);
        enemyPicked = true;
    }
});

$("#profilePic5").on("click", function () {
    if (!playerPicked) {
        $("#characterCard5").empty();
        setplayerCard(5);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard5").empty();
        setenemyCard(5);
        enemyPicked = true;
    }
});

$("#profilePic6").on("click", function () {
    if (!playerPicked) {
        $("#characterCard6").empty();
        setplayerCard(6);
        playerPicked = true;
    }
    else if (!enemyPicked) {
        $("#characterCard6").empty();
        setenemyCard(6);
        enemyPicked = true;
    }
});

$("#resetButton").on("click", function (){
    document.location.reload(true);
    // $("#characterRow").replaceWith(characterClone);
    // playerPicked = false;
    // enemyPicked = false;
    // console.log("Picked Values Reset");
    // console.log("playerPicked: " + playerPicked +" enemyPicked: " +enemyPicked);
});

function setplayerCard(index) {

};

function setenemyCard(index) {

};



