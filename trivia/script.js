$(document).ready(function() {
    var scoreCount = 0;
  
    function updateScore(n) {
      scoreCount += n;
      scoreCountString = scoreCount.toString();
      $("#score-count").text(scoreCountString + " Points");
      console.log(scoreCountString);
    }

    $.get(
      "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium",
      function(data) {
        history = data.results;
      }
    );
    $.get(
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium",
      function(data) {
        art = data.results;
      }
    );
    $.get(
      "https://opentdb.com/api.php?amount=10&category=25&difficulty=hard",
      function(data) {
        science = data.results;
      }
    );

 
    $("#a1").click(function(){
        $("#a1").html("<div class='center'><p>"+history[0].question+"</p><br><p>"+history[0].incorrect_answers[0]+"</p><p>"+history[0].incorrect_answers[1]+"</p><p>"+history[0].correct_answer+"</p><p>"+history[0].incorrect_answers[2]+"</p></div>");
    })

    $("#a2").click(function(){
        $("#a2").html("<div class='center'><p>"+history[1].question+"</p><br><p>"+history[1].incorrect_answers[0]+"</p><p>"+history[1].incorrect_answers[1]+"</p><p>"+history[1].correct_answer+"</p><p>"+history[1].incorrect_answers[2]+"</p></div>");
    })

    $("#a3").click(function(){
        $("#a3").html("<div class='center'><p>"+history[2].question+"</p><br><p>"+history[2].incorrect_answers[0]+"</p><p>"+history[2].incorrect_answers[1]+"</p><p>"+history[2].correct_answer+"</p><p>"+history[2].incorrect_answers[2]+"</p></div>");
    })


    $("#b1").click(function(){
        $("#b1").html("<div class='center'><p>"+science[0].question+"</p><br><p>"+science[0].incorrect_answers[0]+"</p><p>"+science[0].incorrect_answers[1]+"</p><p>"+science[0].correct_answer+"</p><p>"+science[0].incorrect_answers[2]+"</p></div>");
    })

    $("#b2").click(function(){
        $("#b2").html("<div class='center'><p>"+science[1].question+"</p><br><p>"+science[1].incorrect_answers[0]+"</p><p>"+science[1].incorrect_answers[1]+"</p><p>"+science[1].correct_answer+"</p><p>"+science[1].incorrect_answers[2]+"</p></div>");
    })

    $("#b3").click(function(){
        $("#b3").html("<div class='center'><p>"+science[2].question+"</p><br><p>"+science[2].incorrect_answers[0]+"</p><p>"+science[2].incorrect_answers[1]+"</p><p>"+science[2].correct_answer+"</p><p>"+science[2].incorrect_answers[2]+"</p></div>");
    })


    $("#c1").click(function(){
        $("#c1").html("<div class='center'><p>"+art[0].question+"</p><br><p>"+art[0].incorrect_answers[0]+"</p><p>"+art[0].incorrect_answers[1]+"</p><p>"+art[0].correct_answer+"</p><p>"+art[0].incorrect_answers[2]+"</p></div>");
    })

    $("#c2").click(function(){
        $("#c2").html("<div class='center'><p>"+art[1].question+"</p><br><p>"+art[1].incorrect_answers[0]+"</p><p>"+art[1].incorrect_answers[1]+"</p><p>"+art[1].correct_answer+"</p><p>"+art[1].incorrect_answers[2]+"</p></div>");
    })

    $("#c3").click(function(){
        $("#c3").html("<div class='center'><p>"+art[2].question+"</p><br><p>"+art[2].incorrect_answers[0]+"</p><p>"+art[2].incorrect_answers[1]+"</p><p>"+art[2].correct_answer+"</p><p>"+art[2].incorrect_answers[2]+"</p></div>");
    })

})
