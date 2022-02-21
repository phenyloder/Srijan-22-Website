document.addEventListener("scroll", scrollChange);

function scrollChange() {
    var x = document.documentElement.scrollTop;
    if(x>372){
        document.getElementById("scrollDownButton").innerHTML= "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
        document.getElementById("scrollDownButton").href="Register_Page_Link";
        document.getElementById("scrollDownButton").style.color="black";

        document.getElementById("Linkedin").classList.add("linkedin");
        document.getElementById("Facebook").classList.add("facebook");
        document.getElementById("Instagram").classList.add("instagram");

        document.getElementById("VerticalLine").classList.remove("leftVerticalLine");
        document.getElementById("VerticalLine").classList.add("verticalLine");
    }
    else{
        document.getElementById("scrollDownButton").innerHTML= "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
        document.getElementById("scrollDownButton").href="#aboutUsSection";
        document.getElementById("scrollDownButton").style.color="white";
        
        document.getElementById("Linkedin").classList.remove("linkedin");
        document.getElementById("Facebook").classList.remove("facebook");
        document.getElementById("Instagram").classList.remove("instagram");

        document.getElementById("VerticalLine").classList.add("leftVerticalLine");
        document.getElementById("VerticalLine").classList.remove("verticalLine");
    }
}

document.querySelectorAll('a[href^="#aboutUsSection"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})