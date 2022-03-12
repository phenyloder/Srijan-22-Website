const MENU_ACTIVE = "menuContainerActive";
const MENU_INACTIVE = "menuContainerInactive";
const MENU_TOGGLE_BUTTON_ACTIVE = "menuToggleButtonActive";
const MENU_TOGGLE_BUTTON_INACTIVE = "menuToggleButtonInctive";
const MENU_TOGGLE_BUTTON_LINES_ACTIVE = "menuToggleButtonLinesActive"
const MENU_TOGGLE_BUTTON_LINES_INACTIVE = "menuToggleButtonLinesInactive"

const handleMenuToggle = () => {
    const menuContainer = document.getElementById("menuContainer");
    const menuToggleButton = document.getElementById("menuToggleButton");
    const menuToggleButtonLines = menuToggleButton.children;
    if(menuContainer.className === MENU_ACTIVE){
        menuContainer.className = MENU_INACTIVE;
        menuToggleButton.className = MENU_TOGGLE_BUTTON_INACTIVE;
        menuToggleButtonLines[0].className = MENU_TOGGLE_BUTTON_LINES_INACTIVE;
        menuToggleButtonLines[1].className = MENU_TOGGLE_BUTTON_LINES_INACTIVE;
        document.getElementsByClassName(floating-button).style.display = "none";
    }else{
        menuContainer.className = MENU_ACTIVE;
        menuToggleButton.className = MENU_TOGGLE_BUTTON_ACTIVE;
        menuToggleButtonLines[0].className = MENU_TOGGLE_BUTTON_LINES_ACTIVE;
        menuToggleButtonLines[1].className = MENU_TOGGLE_BUTTON_LINES_ACTIVE;
    }
}

const MenuToggleButton = document.getElementById("menuToggleButton");

MenuToggleButton.addEventListener("click", handleMenuToggle);

[...document.getElementsByClassName("menuItem")].forEach(element => {
    element.addEventListener("click",handleMenuToggle);
});