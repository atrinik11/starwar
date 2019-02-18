$(document).ready(function() {
  $(".attack").hide();
  $(".begin").on("click", function() {
    $(".display-pg").show();
    $(".yourPlayer").hide();
    $(".selectEnemyToFight").hide();
    $(".begin").hide();
  });
  var playerList = [];
  var playerSelected;
  var enemySelected;
  var i = 0;
  //Active players
  var usersPlayer;
  var enemyActive;
  var usersPlayerBaseAttack;

  function newGame() {
    $(".yourCharcter").empty();
    $(".selectedEnemy").empty();
    $(".selectEnemyToFight").empty();
    $("#display-img").empty();

    playerList[0] = {
      name: "Obi-Wan Kenobi",
      health: 220,
      attack: 30,
      counter: 10,
      img: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
    };
    playerList[1] = {
      name: "Sheev Palpatine",
      health: 190,
      attack: 35,
      counter: 11,
      img:
        "https://vignette.wikia.nocookie.net/luketoiletwalker/images/8/8a/Darth_sidious.jpg/revision/latest?cb=20161119213449"
    };
    playerList[2] = {
      name: "Boba Fett",
      health: 150,
      attack: 20,
      counter: 10,
      img:
        "https://i.pinimg.com/originals/37/95/f4/3795f4590eeb8cbd67b8e85c27ebff74.jpg"
    };
    playerList[3] = {
      name: "Chewbacca",
      health: 250,
      attack: 40,
      counter: 15,
      img:
        "http://freeaddon.com/wp-content/uploads/2017/10/star-wars-characters-1.jpg"
    };
    playerSelected = false;
    enemySelected = true;

    $(playerList).each(function() {
      var imgCard = $("<div>");
      imgCard.addClass("card card-success playerImg");

      var imgCardHeader = $("<div>");
      imgCardHeader.addClass("card-header");

      var imgCardBody = $("<img>");
      imgCardBody.addClass("card-body");

      var imgCardFooter = $("<div>");
      imgCardFooter.addClass("stats");

      imgCard.append(imgCardHeader);
      imgCard.append(imgCardBody);
      imgCard.append(imgCardFooter);
      console.log("append: ", imgCard);

      $("#display-img").append(imgCard);
    });

    $(".playerImg").each(function() {
      console.log("1: ", playerList[i].name);
      $(this).attr("data-name", playerList[i].name);
      console.log($(this).attr("data-name", playerList[i].name));
      i++;
      console.log("2: ", i);
    });
    i = 0;

    $(".card-header").each(function() {
      $(this).html(playerList[i].name);
      i++;
    });
    i = 0;
    $(".card-body").each(function() {
      $(this).attr("src", playerList[i].img);
      i++;
    });
    i = 0;
    $(".stats").each(function() {
      $(this).html(
        "Health Point: " +
          playerList[i].health +
          "<br>Attack: " +
          playerList[i].attack +
          "<br>Counter: " +
          playerList[i].counter
      );
      i++;
    });
    i = 0;
    playerSelected = false;
    enemySelected = false;
  }
  newGame();
  console.log("Before Selecting: ", playerList);
  //Select your player
  $("#display-img").on("click", ".playerImg", function() {
    // var p;
    $(".yourPlayer").show();
    if (playerSelected === false && enemySelected === false) {
      usersPlayer = $(this).attr("data-name");
      var keys = Object.keys(usersPlayer);
      for (var i = 0; i < keys.length; i++) {
        // get the current character out of the object
        var characterKey = keys[i];
        var character = usersPlayer[characterKey];
        console.log(characterKey);
        console.log("Character: ", character);
      }

      // append elements to the #character-area element
      // var charDiv = createCharDiv(character, characterKey)
      // console.log("Object: ", Object.keys(usersPlayer));
      // // playerList.splice(p, 1);
      // console.log("P: ", usersPlayer);
      // var playerDiv = $(
      //   "<div class='card card-selected' id ='selectedPlayer'>"
      // );
      // var playerHeader = $("<div class='card-header'>").text(usersPlayer);
      // // var playerBody = $("<img class='card-body' id='choosePlayer'>").attr(
      // //   "src",
      // //   playerList[i].img
      // // );
      // console.log("Image selected: ", playerList[i]);
      // // var playerStats = $("<div class='stats'>").text(playerList[i - 1].health);
      // // playerDiv
      // //   .append(playerHeader)
      // //   .append(playerBody)
      // //   .append(playerStats);

      // $("#yourCharacter").append(this);
      // $(this).remove();
      // $(".selectPlayer").hide();

      // playerSelected = true;
      // enemySelected = false;
    } else if (playerSelected === true && enemySelected === false) {
      var q;
      $(".selectEnemyToFight").show();
      q = $(this).attr("data-value");
      enemyActive = playerList[q];
      playerList.splice(q, 1);
      var playerChar = this;
      console.log("Enemy q: ", q);
      console.log("Enemy q: ", playerList);
      var enemyDiv = $("<div class='card card-selected' id ='selectedEnemy'>");
      var enemyHeader = $("<div class='card-header'>").text(enemyActive.name);
      var enemyBody = $("<img class='card-body' id='choosenEnemy'>").attr(
        "src",
        enemyActive.img
      );
      var enemyStats = $("<div class='stats'>").text(enemyActive.health);
      enemyDiv
        .append(enemyHeader)
        .append(enemyBody)
        .append(enemyStats);

      $(".selectedEnemy").append(enemyDiv);
      $(this).remove();
      $(".selectPlayer").hide();

      playerSelected = true;
      enemySelected = true;
    }
  });
});
