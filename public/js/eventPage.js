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
    })
})

// DROP DOWN