let eventList = document.getElementById('event-scroll-container');
let eventLogo = document.getElementById('event-logo');
var query = matchMedia("(max-width:730px)")
eventList.addEventListener('scroll',(e)=>{
   
    let eventList = document.getElementById('event-scroll-container');
//   var x = eventList.scrollLeft;

  var y = eventList.scrollTop;
  console.log(y);
  if(!query.matches) {
    if(y<398){
        eventLogo.src='images/technerd.svg'
    }
    if(y>=398 && y<794){
        eventLogo.src='images/en auction.svg'
    }
    if(y>=794 && y<1250){
        eventLogo.src='images/pitch.svg'
    }
    if(y>=1250 && y<2300){
        eventLogo.src='images/pannel discussion.svg'
    }
    if(y>=2300){
        eventLogo.src='images/idea exchange.svg'
    }
}else{
    if(y<398){
        eventLogo.src='images/technerd.svg'
    }
    if(y>=398 && y<1338){
        eventLogo.src='images/en auction.svg'
    }
    if(y>=1338 && y<2008){
        eventLogo.src='images/pitch.svg'
    }
    if(y>=2008 && y<2675){
        eventLogo.src='images/pannel discussion.svg'
    }
    if(y>=2675){
        eventLogo.src='images/idea exchange.svg'
    }
}
      
})