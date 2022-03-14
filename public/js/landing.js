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

  function InitialState() {
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
  }

  function changeColorToBlack() {
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
  }

  function changeColorToWhite() {
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

  if (y > 500) {
    if (x >= 0 && x < 387) {
      InitialState();
    } else if (x > 387 && x < 2084) {
      changeColorToBlack();
    } else if (x > 2084 && x < 5308) {
      changeColorToWhite();
    } else if (x > 5308 && x < 5788) {
      changeColorToBlack();
    } else if (x > 5788) {
      changeColorToWhite();
    }
  }

  if (y < 500) {
    if (x < 348) {
      InitialState();
    } else if (x > 348 && x < 1926) {
      changeColorToBlack();
    } else if (x > 1926 && x < 6222) {
      changeColorToWhite();
    } else if (x > 6222 && x < 6830) {
      changeColorToBlack();
    } else if (x > 6830) {
      changeColorToWhite();
    }
  }
}
