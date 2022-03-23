const addBtn = document.querySelector(".add-btn");
const subBtn = document.querySelector(".sub-btn");
const subMember = document.getElementById("sub-member");
const members = document.getElementsByClassName("member");
const memberSec = document.getElementById("members");
const submitBtn = document.querySelector(".submit");
const fName = document.getElementsByClassName("fname");
const lName = document.getElementsByClassName("lname");
const pNumber = document.getElementsByClassName("pnumber");

addBtn.addEventListener("click", () => {
    // console.log(members);
    memberSec.insertAdjacentHTML("beforeend", '<div class="member"><br><br><div class="name"><div class="name-f"><label for="fname" class="first-name">Name*</label><input type="text" id="fname" class="fname" name="name" placeholder="John" required></div><div class="name-l"><label for="email" class="last-name" >Email*</label><input type="email" id="lname" class="lname" name="email"  placeholder="DSouza@email.com" required></div></div><br><label for="pnumber" class="phone-number">Phone Number*</label><div class="number"><span class="cc">+91</span><input type="tel" id="pnumber" class="pnumber" name="cnumber" placeholder="9876543210" required></div><br><label for="gender" class="p-gender">Gender*</label><select name="gender" id="gender"><option value="male">Male</option><option value="female">Female</option></select><br><div class="line" id="line"></div></div>')

    if(members.length>0)
    {
        subMember.style.display = "initial";
    }
    else{
        subMember.style.display = "none";
    }
});

subBtn.addEventListener("click", () => {
    memberSec.removeChild(memberSec.lastElementChild);

    if(members.length>0)
    {
        subMember.style.display = "initial";
    }
    else{
        subMember.style.display = "none";
    }
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
    for(let lname of lName)
    {
        if(lname.value.length===0 )
        {
            i=0;
        }
    }
    for(let pnumber of pNumber)
    {
        if(pnumber.value.length===0 )
        {
            i=0;
        }
    }
    if(i===1){
        document.forms[0].submit();
        // alert("Registration Completed Successfully..!!");
    }
})