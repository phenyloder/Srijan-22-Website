document.addEventListener("scroll", scrollChange);

const scrollDownButton = document.getElementById("scrollDownButton");

window.addEventListener("load", function () {
  scrollDownButton.href = "#aboutUsSection";
});

const Linkedin = document.getElementById("Linkedin");
const Facebook = document.getElementById("Facebook");
const Instagram = document.getElementById("Instagram");
const VerticalLine = document.getElementById("VerticalLine");

function scrollChange() {
  var x = document.documentElement.scrollTop;
  var y = screen.width;

  if (y > 500) {
    if (x >= 0 && x < 387) {
      scrollDownButton.innerHTML =
        "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      scrollDownButton.href = "#aboutUsSection";
      scrollDownButton.style.color = "white";
      scrollDownButton.target = "";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    } else if (x > 387 && x < 1813) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "black";
      scrollDownButton.target = "_blank";

      Linkedin.classList.add("linkedin-1");
      Facebook.classList.add("facebook-1");
      Instagram.classList.add("instagram-1");

      VerticalLine.classList.remove("leftVerticalLine");
      VerticalLine.classList.add("verticalLine");
    } else if (x > 1813 && x < 3189) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "white";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    } else if (x > 3189 && x < 3644) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "black";
      scrollDownButton.target = "_blank";

      Linkedin.classList.add("linkedin-1");
      Facebook.classList.add("facebook-1");
      Instagram.classList.add("instagram-1");

      VerticalLine.classList.remove("leftVerticalLine");
      VerticalLine.classList.add("verticalLine");
    } else if (x > 3644) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "white";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    }
  }

  if (y < 500) {
    if (x < 348) {
      scrollDownButton.innerHTML =
        "SCROLL DOWN <i class='fa-solid fa-arrow-right-long' style='width: 45px'></i>";
      scrollDownButton.href = "#aboutUsSection";
      scrollDownButton.style.color = "white";
      scrollDownButton.target = "";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    } else if (x > 348 && x < 1728) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "black";
      scrollDownButton.target = "_blank";

      Linkedin.classList.add("linkedin-1");
      Facebook.classList.add("facebook-1");
      Instagram.classList.add("instagram-1");

      VerticalLine.classList.remove("leftVerticalLine");
      VerticalLine.classList.add("verticalLine");
    } else if (x > 1728 && x < 4165) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "white";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    } else if (x > 4165 && x < 4796) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "black";
      scrollDownButton.target = "_blank";

      Linkedin.classList.add("linkedin-1");
      Facebook.classList.add("facebook-1");
      Instagram.classList.add("instagram-1");

      VerticalLine.classList.remove("leftVerticalLine");
      VerticalLine.classList.add("verticalLine");
    } else if (x > 4796) {
      scrollDownButton.innerHTML =
        "REGISTER NOW <i class='fa-solid fa-registered' style='width: 45px'></i>";
      scrollDownButton.href = "/events";
      scrollDownButton.style.color = "white";

      Linkedin.classList.remove("linkedin-1");
      Facebook.classList.remove("facebook-1");
      Instagram.classList.remove("instagram-1");

      VerticalLine.classList.add("leftVerticalLine");
      VerticalLine.classList.remove("verticalLine");
    }
  }
}
