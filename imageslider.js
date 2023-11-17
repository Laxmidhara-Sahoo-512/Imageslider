let back=document.getElementById("backbutton");
let next=document.getElementById("nextbutton");
let imagebox=document.getElementById("imageboxes");
back.addEventListener("click",()=>{
    imagebox.scrollLeft -=210;
})
next.addEventListener("click",()=>{
    imagebox.scrollLeft +=210;
})
