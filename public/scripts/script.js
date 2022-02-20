const animBox = document.querySelector(".about-anim");
const eventCircle = document.querySelector(".logo-circle-l");
const nitsCircle = document.querySelector(".logo-circle-s");
const logo1 = document.querySelector(".about-logo1");
const logo2 = document.querySelector(".about-logo2");





window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(scrolled===0)
    {
        animBox.classList.remove("flipped");
        eventCircle.classList.remove("flipped");
        nitsCircle.classList.remove("flipped");
        logo1.classList.remove("hidden");
        logo2.classList.add("hidden");
    }
    else if(Math.ceil(scrolled)===scrollable)
    {
        animBox.classList.add("flipped");
        eventCircle.classList.add("flipped");
        nitsCircle.classList.add("flipped");
        logo1.classList.add("hidden");
        logo2.classList.remove("hidden");
    }
})