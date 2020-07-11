
var seconds=0
var hours=0
var mins=0
var interval;
var hour=document.getElementById('hour');
var min=document.getElementById('min');
var sec=document.getElementById('sec');
var button_disable=document.getElementById('disable_btn');


function timer(){
    seconds++
    console.log("ss");
    sec.innerHTML=seconds
    if (seconds>=60){
        mins++;
        seconds=0
        sec.innerHTML=seconds
        min.innerHTML=mins
    }
    else if(mins>=60){
        hours++;
        mins=0
        min.innerHTML=mins
        hour.innerHTML=hours
    }
    else if(hours>=12){
        hours=0
        hour.innerHTML=hours
        
    }


}


function start(){
    interval=setInterval(timer,1000);
    button_disable.disabled = true

}


function stop(){
    button_disable.disabled = false
    clearInterval(interval);
}

function clear_display(){
    seconds=0;
    hours=0;
    mins=0;
    console.log("clear")
    sec.innerHTML=seconds;
    min.innerHTML=mins;
    hour.innerHTML=hours;
    stop()
}






