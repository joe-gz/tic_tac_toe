var player1 = "player X";
var player2 = "player O";

  $("header div").text("Player turn: "+player1)

$(".square").each(function (){
  var clickCount = 0;
  $(this).on("click",function(){
    if (clickCount === 0 ){
      $(this).css("background","green");
      $(this).append("<p>X</p>")
      clickCount++
      $("header div").text("Player turn: "+player2)

    } else if (clickCount === 1){
      $(this).css("background","purple");
      $(this, "p").html("<p>O</p>")
      clickCount++
      $("header div").text("Player turn: "+player1)
    } else {
      $(this, "p").text(" ");
      $(this).css("background","blue");
      clickCount = 0;
    }
  }
)
  $("button").on("click",function() {
    $(".square").css("background","blue");
    $(".square").html(" ");
    clickCount = 0;
    turnClick=0;
  })
})

$("button").eq(0).on("click", function () {
  player1 = $("input[name='1']").val();
  player2 = $("input[name='2']").val();
  $("header div").text("Player turn: "+player1)
  console.log(player1);
  console.log(player2);
})
