const animBox = document.querySelector(".about-anim");
const animBoxFlip = document.querySelector(".about-anim.flipped")
const eventCircle = document.querySelector(".logo-circle-l");
const nitsCircle = document.querySelector(".logo-circle-s");
const logo1 = document.querySelector(".about-logo1");
const logo2 = document.querySelector(".about-logo2");
animBox.classList.add("absolute");
eventCircle.classList.remove("transition");
nitsCircle.classList.remove("transition");




window.addEventListener("scroll", () => {
    // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    // console.log(window.scrollY);
    if(scrolled<800)
    {
        nitsCircle.classList.add("transition");
        if(animBox.classList.contains("flipped")){
            eventCircle.classList.add("transition");
            logo2.classList.add("hidden");
            logo1.classList.add("hidden");
        }
        setTimeout(()=>{
            if(animBox.classList.contains("flipped")){
                animBox.classList.add("animate-anticlockwise");
            }
        }, 700);
        setTimeout(()=>{
            animBox.classList.remove("animate-anticlockwise");
            eventCircle.classList.remove("flipped");
            nitsCircle.classList.remove("flipped");
            nitsCircle.classList.remove("transition");
            eventCircle.classList.remove("transition");
            logo1.classList.remove("hidden");
            logo2.classList.add("hidden");
            animBox.classList.remove("flipped");
        },2200)
    }
    else if(scrolled>=800)
    { 
        eventCircle.classList.add("transition");
        if(!animBox.classList.contains("flipped")){
            nitsCircle.classList.add("transition");
            logo2.classList.add("hidden");
            logo1.classList.add("hidden");
        }
        setTimeout(()=>{
            if(!animBox.classList.contains("flipped")){
                animBox.classList.add("animate-clockwise");
            }
        }, 700);
        setTimeout(()=>{
            animBox.classList.remove("animate-clockwise");
            eventCircle.classList.add("flipped");
            nitsCircle.classList.add("flipped");
            nitsCircle.classList.remove("transition");
            eventCircle.classList.remove("transition");
            logo2.classList.remove("hidden");
            logo1.classList.add("hidden");
            animBox.classList.add("flipped");
        }, 2200);
    }
    if(scrolled>1110 || scrolled<470)
    {
        animBox.classList.add("absolute");
    }
    else{
        animBox.classList.remove("absolute");
    }
})