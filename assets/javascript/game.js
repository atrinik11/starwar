$(document).ready(function() {
  let characters, gameState, playerSelected, enemySelected;

  startGame = () => {
    $(".attack").hide();
    $(".yourPlayer").hide();
    $(".selectEnemyToFight").hide();
    $(".benchEnemy").hide();
    $(".yourEnemy").hide();
    $(".selectPlayer").show();
    playerSelected = false;
    enemySelected = false;
    characters = resetCharacters();
    gameState = resetGameState();

    renderCharacters();
  };

  resetCharacters = () => {
    return {
      obiWanKenobi: {
        name: "Obi-Wan Kenobi",
        health: 220,
        attack: 30,
        counter: 10,
        img: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"
      },
      sheevPalpatine: {
        name: "Sheev Palpatine",
        health: 190,
        attack: 35,
        counter: 11,
        img:
          "https://vignette.wikia.nocookie.net/luketoiletwalker/images/8/8a/Darth_sidious.jpg/revision/latest?cb=20161119213449"
      },
      bobaFett: {
        name: "Boba Fett",
        health: 150,
        attack: 20,
        counter: 10,
        img:
          "https://i.pinimg.com/originals/37/95/f4/3795f4590eeb8cbd67b8e85c27ebff74.jpg"
      },
      chewbacca: {
        name: "Chewbacca",
        health: 250,
        attack: 40,
        counter: 15,
        img:
          "http://freeaddon.com/wp-content/uploads/2017/10/star-wars-characters-1.jpg"
      }
    };
  };

  resetGameState = () => {
    return {
      playerSelected: false,
      enemySelected: false,
      selectedCharacter: null,
      selectedEnemy: null,
      enemiesInBench: 0,
      enemiesLeft: 0,
      numAttack: 0
    };
  };

  renderCharacters = () => {
    let keys = Object.keys(characters);
    console.log("Keys: ", keys);
    for (let i = 0; i < keys.length; i++) {
      let characterKey = keys[i];
      let character = characters[characterKey];
      let charDiv = $("<div>");
      charDiv.addClass("character");
      charDiv.attr("data-name", characterKey);
      let charName = $("<div>");
      charName.addClass("characterName");
      charName.html(character.name);
      let charImg = $("<img>");
      charImg.addClass("characterImg");
      charImg.attr("src", character.img);
      let charHealth = $("<div>");
      charHealth.addClass("characterHealth");
      charHealth.html(character.health);
      charDiv
        .append(charName)
        .append(charImg)
        .append(charHealth);
      console.log(charDiv);
      $("#display-img").append(charDiv);
    }
  };

  //Select Enemy
  selectEnemy = selectedKey => {};

  //Attack function
  attack = () => {
    gameState.selectedDefender.health -= gameState.selectedCharacter.attack;
  };

  //Defend function
  defend = () => {
    gameState.selectedCharacter.health -= gameState.selectedDefender.counter;
  };

  //Function to determine the status of the game
  isTheGameOver = () => {
    if (gameState.selectedDefender.health <= 0 && enemiesLeft !== 0) {
      alert(
        "You have defeated " +
          gameState.selectedDefender.name +
          " !! Choose another player.."
      );
      numAttack = 0;
      enemySelected = false;
      enemiesLeft--;
      $(".selectedEnemy").empty();
    }
    if (gameState.selectedDefender.health <= 0 && enemiesLeft === 0) {
      alert("You have won the game!!");
      $(".selectedEnemy").empty();
      $("#yourCharacter").empty();
      enemySelected = false;
      playerSelected = false;
      startGame();
    }
    if (gameState.selectedCharacter.health <= 0) {
      alert(
        "You have been defeated by " + gameState.selectedDefender.name + " !!"
      );
      $("#yourCharacter").empty();
      $(".selectedEnemy").empty();
      enemySelected = false;
      playerSelected = false;
      startGame();
    }
  };

  //Selecting the player and defender image
  $("#display-img").on("click", ".character", function() {
    if (playerSelected === false && enemySelected === false) {
      $(".yourPlayer").show();
      let selectedKey = $(this).attr("data-name");
      console.log(selectedKey);
      gameState.selectedCharacter = characters[selectedKey];
      console.log(gameState.selectedCharacter);
      $("#yourCharacter").append(this);
      $(".selectPlayer").hide();
      $(".selectEnemyToFight").show();
      playerSelected = true;
      enemiesLeft = 3;
      enemiesInBench = 3;
    } else if (playerSelected === true && enemySelected === false) {
      enemiesInBench--;
      $(".selectedEnemy").show();
      $(".yourEnemy").show();
      selectedKey = $(this).attr("data-name");
      console.log("enemy: ", selectedKey);
      gameState.selectedDefender = characters[selectedKey];
      $(".selectedEnemy").append(this);
      $(".selectEnemyToFight").hide();
      $(".benchEnemy").show();
      $(".attack").show();
      enemySelected = true;
    }
  });

  //Attacking the defender
  $(".attack").on("click", function() {
    if ($(".selectedEnemy").text().length <= 0) {
      alert("Select an enemy..");
    } else {
      gameState.numAttack++;
      attack(gameState.numAttack);
      defend();
      $("#yourCharacter .characterHealth").text(
        gameState.selectedCharacter.health
      );
      $(".selectedEnemy .characterHealth").text(
        gameState.selectedDefender.health
      );
      isTheGameOver();
    }
  });
  startGame();
});
