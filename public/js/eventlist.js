
window.addEventListener("scroll",()=>{
    // const scrollable = document.scrollHeight - window.innerHeight;
    const scrolled=window.scrollY;
 console.log(scrolled)
    if(scrolled<200){
       document.getElementById("logo").src="./images/logo.png";
    
   }
 
    if(scrolled>=200 && scrolled<400){
        document.getElementById("logo").src="./images/book-mark.png";
        
    }
    if (scrolled>=400){
        document.getElementById("logo").src="./images/champagne.png";
    }
 })
 