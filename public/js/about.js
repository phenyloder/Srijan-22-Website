const animBox = document.querySelector(".about-anim");
const animBoxFlip = document.querySelector(".about-anim.flipped");
const aboutEvent = document.querySelector(".about-event");
const aboutNits = document.querySelector(".about-nits");
const eventCircle = document.querySelector(".logo-circle-l");
const nitsCircle = document.querySelector(".logo-circle-s");
const logo1 = document.querySelector(".about-logo1");
const logo2 = document.querySelector(".about-logo2");
const width = window.innerWidth;
animBox.classList.add("absolute");
eventCircle.classList.remove("transition");
nitsCircle.classList.remove("transition");
let transit1 = 0;
let transit2 = 0;



window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / scrollable)*100;
    // console.log(percentScrolled);
    if(percentScrolled<15 && width>768)
    {
        if(animBox.classList.contains("flipped")){
            logo2.classList.add("hidden");
            logo1.classList.add("hidden");
            nitsCircle.classList.add("transition");
            eventCircle.classList.add("transition");
            aboutEvent.classList.remove("invisible");
        }
        setTimeout(()=>{
            if(animBox.classList.contains("flipped")){
                animBox.classList.add("animate-anticlockwise");
            }
        }, 700);
        setTimeout(()=>{
            animBox.classList.remove("flipped");
            eventCircle.classList.remove("flipped");
            nitsCircle.classList.remove("flipped");
            nitsCircle.classList.remove("transition");
            eventCircle.classList.remove("transition");
            logo1.classList.remove("hidden");
            logo2.classList.add("hidden");
            animBox.classList.remove("animate-anticlockwise");
        },2200)
    }
    else if(percentScrolled>15 && width>768)
    { 
        if(!animBox.classList.contains("flipped")){
            logo2.classList.add("hidden");
            logo1.classList.add("hidden");
            eventCircle.classList.add("transition");
            nitsCircle.classList.add("transition");
            aboutEvent.classList.add("invisible");
        }
        setTimeout(()=>{
            if(!animBox.classList.contains("flipped")){
                animBox.classList.add("animate-clockwise");
            }
        }, 700);
        setTimeout(()=>{
            animBox.classList.add("flipped");
            eventCircle.classList.add("flipped");
            nitsCircle.classList.add("flipped");
            nitsCircle.classList.remove("transition");
            eventCircle.classList.remove("transition");
            logo2.classList.remove("hidden");
            logo1.classList.add("hidden");
            animBox.classList.remove("animate-clockwise");
        }, 2200);
    }
    if(percentScrolled<12 || percentScrolled>24)
    {
        animBox.classList.add("absolute");
    }
    else{
        animBox.classList.remove("absolute");
    }


    if(width <= 768)
    {
        if(percentScrolled>10)
        {
            animBox.classList.add("sticky");
        }
        if(percentScrolled>11 && transit1===0)
        {
            aboutEvent.classList.add("invisible");
            logo1.classList.add("hidden");
            transit2 = 0;
            eventCircle.classList.add("transition");
            setTimeout(()=>{
                    eventCircle.innerHTML = '<img src="/logos/about2.svg" alt="" class="about-logo2">'
                    logo1.classList.remove("hidden");
                    eventCircle.classList.remove("transition");
                    transit1 = 1;
            }, 500)
        }
        else if(percentScrolled>11 && transit1===1)
        {
            logo1.classList.remove("hidden");
            eventCircle.classList.remove("transition");
        }
        else if(percentScrolled<=11 && transit2===0){
            logo1.classList.remove("hidden");
            transit1 = 0;
            aboutEvent.classList.remove("invisible");
            eventCircle.classList.add("transition");

            setTimeout(()=>{
                eventCircle.innerHTML = '<img src="/logos/about1.svg" alt="" class="about-logo1">'
                logo1.classList.remove("hidden");
                eventCircle.classList.remove("transition");
                transit2 = 1;
        }, 500)
        }
        if(percentScrolled>21)
        {
            aboutNits.classList.add("invisible");

        }
        else
        {
            aboutNits.classList.remove("invisible");
        }
        
    }
})