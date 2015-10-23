var player1 = "player X";
var player2 = "player O";
var indexArray=[0,1,2,3,4,5,6,7,8];
var clickCount = 0;

$("header div").text("Player turn: "+player1)

$(".square").each(function (){
  $(this).on("click",function(){
    if (clickCount %2 === 0 ){
      indexArray[$(this).index()] = player1;
      $(this).css("background","green");
      $(this).append("<p>X</p>")
      clickCount++
      checkForWinner();
      $("header div").text("Player turn: "+player2)

    } else {
      indexArray[$(this).index()] = player2;
      $(this).css("background","purple");
      $(this, "p").html("<p>O</p>")
      clickCount++
      checkForWinner();
      $("header div").text("Player turn: "+player1)
    }
    // else {
    //   indexArray[$(this).index()] = ""
    //   $(this, "p").text(" ");
    //   $(this).css("background","blue");
    //   clickCount = 0;
    // }
  }
)
$("button").on("click",function() {
  $(".square").css("background","blue");
  $(".square").html(" ");
  clickCount = 0;
  turnClick=0;
  indexArray=[0,1,2,3,4,5,6,7,8];
  $(".win").remove();
})
})

$("button").eq(0).on("click", function () {
  player1 = $("input[name='1']").val();
  player2 = $("input[name='2']").val();
  $("header div").text("Player turn: "+player1)
  console.log(player1);
  console.log(player2);
})

function checkForWinner(){
  if (indexArray[0]===indexArray[1] && indexArray[0]=== indexArray[2]) {
    var winner = indexArray[0];
    console.log("Winner is: ", winner);
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[3]===indexArray[4] && indexArray[3]=== indexArray[5]) {
    var winner = indexArray[3];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[6]===indexArray[7] && indexArray[6]=== indexArray[8]) {
    var winner = indexArray[6];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[0]===indexArray[3] && indexArray[0]=== indexArray[6]) {
    var winner = indexArray[0];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[1]===indexArray[4] && indexArray[1]=== indexArray[7]) {
    var winner = indexArray[1];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[2]===indexArray[5] && indexArray[2]=== indexArray[8]) {
    var winner = indexArray[2];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[0]===indexArray[4] && indexArray[0]=== indexArray[8]) {
    var winner = indexArray[0];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  } else if (indexArray[2]===indexArray[4] && indexArray[2]=== indexArray[6]) {
    var winner = indexArray[2];
    $("main").prepend("<div class= 'win'></div>");
    $(".win").html("Winner is: "+ winner);
  }
}
