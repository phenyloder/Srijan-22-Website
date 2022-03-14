let eventList = document.getElementById('event-scroll-container');
let eventLogo = document.getElementById('event-logo');
let eventIcon = document.getElementById("event-icon")
var query1 = window.matchMedia("(max-width:730px)");
var query2 = window.matchMedia("(max-width:500px)");
window.addEventListener('scroll',(e)=>{
   
    let eventList = document.getElementById('event-scroll-container');
//   var x = eventList.scrollLeft;
  let x = window.scrollY;
  var y = eventList.scrollTop;
  console.log(x);
//   console.log(y);
//   if(window.matchMedia("(max-width: 730px)").matches) {
//     if(x<3022){
//         eventLogo.src='images/technerd.svg'
//     }
//     if(x>=3022 && x<3475.3){
//         eventLogo.src='images/en auction.svg'
//     }
//     if(x>=3475.3 && x<3850.6){
//         eventLogo.src='images/pitch.svg'
//     }
//     if(x>=3850.6 && x<4264){
//         eventLogo.src='images/pannel discussion.svg'
//     }
//     if(x>=4264){
//         eventLogo.src='images/idea exchange.svg'
//     }
  
// }
// else 
if(query2.matches){
    if(x<2714){
        eventLogo.src='images/technerd.svg'
    }
    if(x>=2714 && x<3008){
        eventLogo.src='images/en auction.svg'
    }
    if(x>=3008 && x<3268.6){
        eventLogo.src='images/pitch.svg'
    }
    if(x>=3268.6 && x<3554.6){
        eventLogo.src='images/pannel discussion.svg'
    }
    if(x>=3554.6){
        eventLogo.src='images/idea exchange.svg'
    }
}
// if(query2.matches){
//     if(x<2472.6){
//         eventLogo.src='images/technerd.svg'
//     }
//     if(x>=2472.6 && x<2814){
//         eventLogo.src='images/en auction.svg'
//     }
//     if(x>=2814 && x<3076){
//         eventLogo.src='images/pitch.svg'
//     }
//     if(x>=3076 && x<3337){
//         eventLogo.src='images/pannel discussion.svg'
//     }
//     if(x>=3337){
//         eventLogo.src='images/idea exchange.svg'
//     }
// }
else{
   
    if(x<2440){
        eventLogo.src='images/technerd.svg'
    }
    if(x>=2440 && x<2819.7){
        eventLogo.src='images/en auction.svg'
    }
    if(x>=2819.7 && x<3172.6){
        eventLogo.src='images/pitch.svg'
    }
    if(x>=3172.6 && x<3592.7){
        eventLogo.src='images/pannel discussion.svg'
    }
    if(x>=3592.7){
        eventLogo.src='images/idea exchange.svg'
    }
  
}

  
})