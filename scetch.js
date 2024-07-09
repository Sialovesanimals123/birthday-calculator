function no(){
    var ans = document.getElementById("name").value + ", You are " +((document.getElementById("currentYear").value - document.getElementById("birthYear").value )-1) + " years old!";
    document.getElementById("answer").innerHTML = ans
    var speakThis= new SpeechSynthesisUtterance(ans)
    speechSynthesis.speak(speakThis)
}

function yes(){
    var ans = document.getElementById("name").value + ", You are "+ (document.getElementById("currentYear").value  - document.getElementById ("birthYear").value)+ " years old!";
    document.getElementById("answer").innerHTML =ans
    var speakThis= new SpeechSynthesisUtterance(ans)
    speechSynthesis.speak(speakThis)
}   
    
//Homework : in HTML make one more input and ask what is your name in that box.
// in js, while showing/speaking the ans, lets make it say : Sia, you are 12 years old!





    
//fetch value from input do=> document.getElementById("").value
//set the text to id do => document.getElementById("").innerHTML

