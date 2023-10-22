var timeE1 = document.querySelector("#time");
var buttonStartQuiz= document.getElementById("clickbutton");
var mainScreen=document.getElementById("header");
var secondsLeft=10;
var firstOption =document.getElementById("firstOption");
var secondOption =document.getElementById("secondOption");
var thirdOption =document.getElementById("thirdOption");
var fourthOption =document.getElementById("fourthOption");

console.log(buttonStartQuiz);
console.log(mainScreen);
console.log(timeE1);

console.log("1");

var deductTime= function  () {
  secondsLeft=secondsLeft-1;
  console.log( "time deducted")
}
// used this function https://stackoverflow.com/questions/5933157/how-to-remove-an-html-element-using-javascript
var removeButton=function () {
  var elem = document.getElementById('clickbutton');
  console.log("remove button")
  elem.remove(elem);
 }

var question1=function (){
  mainScreen.textContent=" Which Scripting language is most popular with HTML and CSS";
  firstOption.textContent="Cobol";
  secondOption.textContent="C++";
  thirdOption.textContent="C#";
  fourthOption.textContent="Java Script";
  console.log("reached the function ")
 
  
}

var question2= function () {
  mainScreen.textContent=" What is the easiest programming language";
  firstOption.textContent="Vikas";
  secondOption.textContent="David";
  thirdOption.textContent="Html";
  fourthOption.textContent="JSon";
}
  buttonStartQuiz.onclick = function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeE1.textContent = 'Time :'+ secondsLeft;
      console.log(secondsLeft);
      
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        sendMessage();

      }
      else {
        
        question1()
      }
  
    }, 1000);    
    
    
    
    





  };


  
  function sendMessage() {
    timeE1.textContent="Your Time is over";
      
  }

  
  