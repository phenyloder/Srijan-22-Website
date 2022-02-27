const addBtn = document.querySelector(".add-btn");
const addMemberSec = document.getElementById("add-member");
const submitBtn = document.querySelector(".submit");
const fName = document.getElementsByClassName("fname");
const lName = document.getElementsByClassName("lname");
const pNumber = document.getElementsByClassName("pnumber");

addBtn.addEventListener("click", () => {
    addMemberSec.insertAdjacentHTML("beforebegin", '<br><br><div class="name"><div class="name-f"><label for="fname" class="first-name">First Name*</label><input type="text" id="fname" class="fname" placeholder="John" required></div><div class="name-l"><label for="lname" class="last-name">Last Name*</label><input type="text" id="lname" class="lname" placeholder="DSouza" required></div></div><br><label for="pnumber" class="phone-number">Phone Number*</label><div class="number"><span class="cc">+91</span><input type="tel" id="pnumber" class="pnumber" placeholder="9876543210" required></div><br><label for="gender" class="p-gender">Gender*</label><select name="gender" id="gender"><option value="male">Male</option><option value="female">Female</option></select><br><div class="line" id="line"></div>')
});

submitBtn.addEventListener("click", () => {
    // console.log(fName);
    let i=1;
    for(let fname of fName)
    {
        if(fname.value.length===0 )
        {
            i=0;
        }
    }
    for(let lName of lName)
    {
        if(lName.value.length===0 )
        {
            i=0;
        }
    }
    for(let pNumber of pNumber)
    {
        if(pNumber.value.length===0 )
        {
            i=0;
        }
    }
    if(i===1){
        document.forms[0].submit();
    }
})