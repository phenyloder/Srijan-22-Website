let currentList = "events";
const eventLists = [...document.querySelectorAll(".eventList")];
let eventCounter = 0;

const reset = () => {
    eventLists.forEach(() => {
        const events = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventContainer`)];
        const dots = [...document.querySelectorAll(`.eventList${`#${currentList}`} > .eventListScrollDotBar > .eventListScrollDot`)];

        events.forEach((elem,idx) => {
            elem.classList.remove("previous")
            elem.classList.remove("next");
            elem.classList.remove("active");
            console.log(idx);
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

// SCROLL EVENT ANIMATION