const animBox = document.querySelector(".about-anim");
const animBoxFlip = document.querySelector(".about-anim.flipped")
const eventCircle = document.querySelector(".logo-circle-l");
const nitsCircle = document.querySelector(".logo-circle-s");
const logo1 = document.querySelector(".about-logo1");
const logo2 = document.querySelector(".about-logo2");
animBox.classList.add("absolute");




window.addEventListener("scroll", () => {
    // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    // console.log(window.scrollY);
    if(scrolled<800)
    {
        nitsCircle.classList.add("transition");
        setTimeout(()=>{
            eventCircle.classList.remove("transition");
            nitsCircle.classList.remove("transition");
            animBox.classList.remove("flipped");
            eventCircle.classList.remove("flipped");
            nitsCircle.classList.remove("flipped");
        }, 500);
        logo1.classList.remove("hidden");
        logo2.classList.add("hidden");
    }
    else if(Math.ceil(scrolled)>800)
    { 
        eventCircle.classList.add("transition");
        setTimeout(()=>{
            eventCircle.classList.remove("transition");
            nitsCircle.classList.remove("transition");
            animBox.classList.add("flipped");
            eventCircle.classList.add("flipped");
            nitsCircle.classList.add("flipped");
        }, 500);
        logo1.classList.add("hidden");
        logo2.classList.remove("hidden");
    }
    if(scrolled>1110 || scrolled<230)
    {
        animBox.classList.add("absolute");
    }
    else{
        animBox.classList.remove("absolute");
    }
})