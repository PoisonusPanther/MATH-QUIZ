function adduser(){
    player_one = document.getElementById("player1_name").value;
    player_two = document.getElementById("player2_name").value;
    localStorage.setItem("player1",player_one);
    localStorage.setItem("player2",player_two);
    window.location.replace("quiz_game.html");
}


