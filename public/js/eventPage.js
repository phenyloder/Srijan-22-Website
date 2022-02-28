// DROP DOWN

const dropDown = document.getElementById("eventDropDown");

dropDown.addEventListener("click",(e) => {
    dropDown.classList.toggle("active");
});

dropDown.addEventListener("focusout",() => {
    dropDown.classList.remove("active");
});

[...document.getElementsByClassName("dropDownOption")].forEach((elem) => {
    elem.addEventListener("click",(e) => {
        const dropDown = document.getElementById("CurrentEventText");
        dropDown.innerText = e?.target?.innerText;
    })
})

// DROP DOWN

// SCROLL EVENT ANIMATION

const eventList = document.getElementById("eventList");

let eventCounter = 0;

const handleScroll = (e) => {    
    const events = [...document.getElementsByClassName("eventContainer")];
    const dots = [...document.querySelectorAll(".eventListScrollDot")];
    events.forEach((elem) => {
        elem.classList.remove("active");
    })

    dots.forEach((elem) => {
        elem.classList.remove("active");
    })

    if(e.deltaY>0){
        eventCounter = Math.min(events.length-1,eventCounter+1);
        events[eventCounter-1].classList.add("previous");
        events[eventCounter].classList.remove("next");
        events[eventCounter].classList.add("active");
        dots[eventCounter].classList.add("active");
    }else{
        eventCounter = Math.max(0,eventCounter-1);
        events[eventCounter+1].classList.add("next");
        events[eventCounter].classList.remove("previous");
        events[eventCounter].classList.add("active");
        dots[eventCounter].classList.add("active");
    }
    
    eventList.removeEventListener("wheel",handleScroll);
    setTimeout(() => eventList.addEventListener("wheel",handleScroll), 400);
}
eventList.addEventListener(("wheel"),handleScroll);

// SCROLL EVENT ANIMATION