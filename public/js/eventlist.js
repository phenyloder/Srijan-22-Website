let event1 = document.getElementById("event1");
let event2 = document.getElementById("event2");
let event3 = document.getElementById("event3");
let event4 = document.getElementById("event4");
let event = document.querySelector(".event");

window.addEventListener("scroll",()=>{
   // const scrollable = document.scrollHeight - window.innerHeight;
   const scrolled=window.scrollY;
console.log(scrolled)

  
   if(scrolled<64){
      document.getElementById("logo").src="images/logo.png";
      document.getElementById("event1").innerHTML =`<h2>IPL Auction1</h2>
       <div class="desc">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit maxime, quae, minus quos delectus sequi numquam necessitatibus veniam maiores debitis fugiat. Unde omnis eveniet consequatur neque ad iusto voluptas quaerat aliquam.</p>
       </div>
       <button class="btn">Register Now</button>`
     
  }

   if(scrolled>=64 && scrolled<128){
       document.getElementById("logo").src="images/book-mark.png";
       document.getElementById("event1").innerHTML = `<h2>IPL Auction2</h2>
       <div class="desc">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit maxime, quae, minus quos delectus sequi numquam necessitatibus veniam maiores debitis fugiat. Unde omnis eveniet consequatur neque ad iusto voluptas quaerat aliquam.</p>
       </div>
       <button class="btn">Register Now</button>`
       
   }
   if (scrolled>=128 && scrolled<192){
       document.getElementById("logo").src="images/champagne.png";
       document.getElementById("event1").innerHTML=` <h2>IPL Auction3</h2>
       <div class="desc">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit maxime, quae, minus quos delectus sequi numquam necessitatibus veniam maiores debitis fugiat. Unde omnis eveniet consequatur neque ad iusto voluptas quaerat aliquam.</p>
       </div>
       <button class="btn">Register Now</button>`
   }
   if (scrolled>=192 && scrolled<256){
    document.getElementById("logo").src="images/red-carpet.png";
    document.getElementById("event1").innerHTML=` <h2>IPL Auction4</h2>
    <div class="desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit maxime, quae, minus quos delectus sequi numquam necessitatibus veniam maiores debitis fugiat. Unde omnis eveniet consequatur neque ad iusto voluptas quaerat aliquam.</p>
    </div>
    <button class="btn">Register Now</button>`
}
if (scrolled>=256){
        document.getElementById("icon").style.display="none";
        document.getElementById("event1").style.display='none';
    }
    else{
        document.getElementById("event1").style.display='flex';
        document.getElementById("icon").style.display="flex";
    }
    

})
