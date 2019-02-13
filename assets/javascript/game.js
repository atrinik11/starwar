$(document).ready(function() {
  var imgArray = [
    "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
    "https://vignette.wikia.nocookie.net/luketoiletwalker/images/8/8a/Darth_sidious.jpg/revision/latest?cb=20161119213449",
    "https://i.pinimg.com/originals/37/95/f4/3795f4590eeb8cbd67b8e85c27ebff74.jpg",
    "http://freeaddon.com/wp-content/uploads/2017/10/star-wars-characters-1.jpg"
  ];
  for (var i = 0; i < imgArray.length; i++) {
    var playerPower = Math.floor(Math.random() * 1000) + 1;
    var imgCard = $("<div>");
    imgCard.addClass("card");

    var imgCardHeader = $("<div>");
    imgCardHeader.addClass("card-header");

    var imgCardBody = $("<div>");
    imgCardBody.addClass("card-body");

    var starImage = $("<img>");
    starImage.addClass("starImage");
    starImage.attr("src", imgArray[i]);
    imgCardBody.append(starImage);

    var imgCardFooter = $("<div>");
    imgCardFooter.addClass("card-footer");
    imgCardFooter.append(playerPower);

    imgCard.append(imgCardHeader);
    imgCard.append(imgCardBody);
    imgCard.append(imgCardFooter);

    $("#display-img").append(imgCard);
  }
});
