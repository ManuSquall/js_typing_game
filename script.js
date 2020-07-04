//List of words for game
const words = [
    'programmation',
    'compilation',
    'test',
    'ligne de codes',
    'instruction',
    'bloc',
    'main',
    'procedure',
    'fonction',
    'javascrip',
    'ecma'
];

//##################################################

var cpt=0;
var goal = 0;
var compte=10;

var score = document.getElementById("score").innerHTML;

var endgameEl = document.getElementById("end-game-container");

var time = document.getElementById("time").innerHTML;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("word").innerHTML = getRandomWord();
    goal = document.getElementById("word").innerHTML.length;
    //alert(goal);
});

document.getElementById("text").addEventListener('keyup', function(){
    cpt++;
    var a = document.getElementById("text").value;
    //console.log(document.getElementById("word").innerHTML);
    //console.log(document.getElementById("text").value);
    if(cpt == goal){
        if( document.getElementById("word").innerHTML == document.getElementById("text").value){
            alert("meme mot :-)");
            
            
            alert("score");
            alert("time");
        }
    }
});


//##################################################

var go = setInterval(function() {
      compte --;
      time = compte;
      document.getElementById("time").innerHTML = time +" s";
      
      
      //alert(time);
      if(time == 0){
          document.getElementsByTagName('body')[0].setAttribute("src","endgameEl");
          
          gameOver();
          clearInterval(go);
      }
}, 1000);












//Generate random word form the array of word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}


//Game over, show end screen
function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;

    //displqy element
    endgameEl.style.display = 'flex';
}




