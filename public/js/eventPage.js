let currentList = "events";
const eventLists = [...document.querySelectorAll(".eventList")];
let eventCounter = 0;
const arrowButtons = [...document.querySelectorAll(".arrowButton")];

let firstTouch = null;

const reset = () => {
    eventLists.forEach(() => {
        const events = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventContainer`)];
        const dots = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventListScrollDotBar > .eventListScrollDot`)];

        events.forEach((elem,idx) => {
            elem.classList.remove("previous")
            elem.classList.remove("next");
            elem.classList.remove("active");
            if(idx===0){
                elem.classList.add("active");
            }else{
                elem.classList.add("next");
            }
        })

        dots.forEach((elem,idx) => {
            elem.classList.remove("active")
            if(idx===0){
                elem.classList.add("active");
            }
        })
        eventCounter = 0;
    })
}

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
        currentList = e?.target?.getAttribute("value");
        eventLists.forEach((elem) => elem?.classList?.remove("active"));

        reset();

        document.querySelector(`.eventList${`#${currentList}`}`)?.classList?.add("active");
    })
})

// DROP DOWN

// SCROLL EVENT ANIMATION



const handleScroll = (e) => {    
    const events = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventContainer`)];
    const dots = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventListScrollDotBar > .eventListScrollDot`)];
    
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
    
    // eventLists.forremoveEventListener("wheel",handleScroll);
    eventLists.forEach((elem) => {
        elem.removeEventListener("wheel",handleScroll);
    })
    setTimeout(() => {
        eventLists.forEach((elem) => {
            elem.addEventListener("wheel",handleScroll);
        });
    }, 150);
}
eventLists.forEach((elem) => {
    elem.addEventListener("wheel",handleScroll);
})

arrowButtons.forEach((elem) => {
    if(elem.classList.contains("up")){
        elem.addEventListener("click", (e) => {
            e.deltaY= -1;
            handleScroll(e);
        })
    }else{
        elem.addEventListener("click", (e) => {
            e.deltaY = 1;
            handleScroll(e);
        })
    }
})

const handleTouchStart = (e) => {
    firstTouch = e.touches[0].clientX;
}

const handleTouchMove = (e) => {
    e.preventDefault();
    const currTouch = e.touches[0].clientX;
    
    if(Math.abs(firstTouch - currTouch) >= 50){
        e.deltaY = firstTouch - currTouch;
        handleScroll(e);
        eventLists.forEach((elem) => {
            elem.removeEventListener("touchmove",handleTouchMove);
        })
    }
}

const handleTouchEnd = () => {
    eventLists.forEach((elem) => {
        elem.removeEventListener("touchmove",handleTouchMove);
    })
    eventLists.forEach((elem) => {
        elem.addEventListener("touchmove",handleTouchMove);
    })
}

eventLists.forEach((elem) => {
    elem.addEventListener("touchstart", handleTouchStart);

    elem.addEventListener("touchmove",handleTouchMove);

    elem.addEventListener("touchend", handleTouchEnd);
})

// SCROLL EVENT ANIMATION