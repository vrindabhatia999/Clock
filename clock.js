setInterval(setClock, 1000);



const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');



//set clock to be called after interval of 1000ms

function setClock(){



 const currentDate=new Date();  
 //gives us current date,time
 const secondsRatio=currentDate.getSeconds()/60;
 // 1min has 60 secs
 const minuteRatio=(secondsRatio+ currentDate.getMinutes())/60;
 // 1 hr has 60 mins
 const hourRatio=(minuteRatio+ currentDate.getHours())/12;

 //1 cycle of 2 hrs








 // call the rorations
 setRotation(secondHand, secondsRatio);
 setRotation(minuteHand, minuteRatio);
 setRotation(hourHand, hourRatio);
 
}






//rotation function
function setRotation(element,rot){
    element.style.setProperty('--rotation', rot *360);
}


setClock();




// functions to change the bg color of nubers



function change(color){
    document.getElementById('clock').style.color=color;
}


// number color



function change2(color){
    document.getElementById('clock').style.color=color;
}

//event listeners
document.getElementById("my").addEventListener("click",fync1);


function fync1(){
    document.getElementById("vdiv").style.backgroundImage='url(summer.jpg)';
}
function remove(){
    document.getElementById("vdiv").style.boxShadow='5px 5px 5px #ffcccb ';
}


