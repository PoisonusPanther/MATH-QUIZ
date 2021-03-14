player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

document.getElementById("player1-name").innerHTML = player1;
document.getElementById("player2-name").innerHTML = player2;
player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send(){
    number1 = document.getElementById("number11").value;
    number2 = document.getElementById("number22").value;
    console.log(number1, number2);
    answer = parseInt(number1)*parseInt(number2);

    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    console.log(number1, number2);
    input = "<br>Answer:<input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question + input + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number11").value = "";
    document.getElementById("number22").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";

function check(){
get_answer = document.getElementById("input_check_box").value;
if (get_answer == answer){
  if (answer_turn == "player_1"){
      update_player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = update_player1_score;
  }
  else{
    update_player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = update_player2_score;
  }
  if (question_turn == "player_1"){
      question_turn = "player_2";
      document.getElementById("question_turn").innerHTML = "Question Turn-" + player2;
  }
  else{
    question_turn = "player_1";
    document.getElementById("question_turn").innerHTML = "Question Turn-" + player1;
  }
  if (answer_turn == "player_1"){
    answer_turn = "player_2";
    document.getElementById("answer_turn").innerHTML = "Answer Turn-" + player2;
  }
  else{
  answer_turn = "player_1";
  document.getElementById("answer_turn").innerHTML = "Answer Turn-" + player1;
  }
}
}
