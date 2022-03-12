document.addEventListener("scroll", scrollChange);

function scrollChange() {
  var x = document.documentElement.scrollTop;
  var y = screen.width;
  console.log(x);


  if (y > 500) {
    if (x < 387) {
      document.getElementById("scrollDownButton").innerHTML =
        "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "#aboutUsSection";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");
    }
    else if (x > 387 && x <1813) {
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "black";

      document.getElementById("Linkedin").classList.add("linkedin-1");
      document.getElementById("Facebook").classList.add("facebook-1");
      document.getElementById("Instagram").classList.add("instagram-1");

      document
        .getElementById("VerticalLine")
        .classList.remove("leftVerticalLine");
      document.getElementById("VerticalLine").classList.add("verticalLine");
    }

    else if (x > 1813 && x < 3189) {
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");
    }

    else if (x> 3189 && x< 3644){
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "black";

      document.getElementById("Linkedin").classList.add("linkedin-1");
      document.getElementById("Facebook").classList.add("facebook-1");
      document.getElementById("Instagram").classList.add("instagram-1");

      document
        .getElementById("VerticalLine")
        .classList.remove("leftVerticalLine");
      document.getElementById("VerticalLine").classList.add("verticalLine");

    }
    else if(x>3644){

      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");

    }
  }

  if (y < 500) {
    if (x < 348) {
      document.getElementById("scrollDownButton").innerHTML =
        "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "#aboutUsSection";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");
    }
    else if (x > 348 && x <1728) {
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "black";

      document.getElementById("Linkedin").classList.add("linkedin-1");
      document.getElementById("Facebook").classList.add("facebook-1");
      document.getElementById("Instagram").classList.add("instagram-1");

      document
        .getElementById("VerticalLine")
        .classList.remove("leftVerticalLine");
      document.getElementById("VerticalLine").classList.add("verticalLine");
    }

    else if (x > 1728 && x <4165) {
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");
    }

    else if(x>4165 &&x<4796){
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "black";

      document.getElementById("Linkedin").classList.add("linkedin-1");
      document.getElementById("Facebook").classList.add("facebook-1");
      document.getElementById("Instagram").classList.add("instagram-1");

      document
        .getElementById("VerticalLine")
        .classList.remove("leftVerticalLine");
      document.getElementById("VerticalLine").classList.add("verticalLine");
    }

    else if(x>4796){
      document.getElementById("scrollDownButton").innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      document.getElementById("scrollDownButton").href = "/events";
      document.getElementById("scrollDownButton").style.color = "white";

      document.getElementById("Linkedin").classList.remove("linkedin-1");
      document.getElementById("Facebook").classList.remove("facebook-1");
      document.getElementById("Instagram").classList.remove("instagram-1");

      document.getElementById("VerticalLine").classList.add("leftVerticalLine");
      document.getElementById("VerticalLine").classList.remove("verticalLine");
    }

  }
}

document.querySelectorAll('a[href^="#aboutUsSection"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
