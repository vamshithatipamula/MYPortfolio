// alert("hi");
let about=document.querySelector(".contents");
let resumepage=document.querySelector(".resumepage");
let portfoliopage=document.querySelector(".portfoliopage");
let contactpage=document.querySelector(".contactpage");
let aboutbtn=document.querySelector(".aboutbtn");
let resumebtn=document.querySelector(".resumebtn");
let portfoliobtn=document.querySelector(".portfoliobtn");
let contactbtn=document.querySelector(".contactsbtn");
let showbtn=document.querySelector(".show");
// let forsmallbtn=document.querySelector(".show")
let inf=document.querySelector(".inf");



aboutbtn.addEventListener("click",()=>{
    about.classList.remove("hide");
    console.log("hi");
    resumepage.classList.add("hide");
    portfoliopage.classList.add("hide");
    contactpage.classList.add("hide");
})
resumebtn.addEventListener("click",()=>{
    about.classList.add("hide");
    portfoliopage.classList.add("hide");
    resumepage.classList.remove("hide");
    contactpage.classList.add("hide");
    
});
portfoliobtn.addEventListener("click",()=>{
    about.classList.add("hide");
    resumepage.classList.add("hide");
    portfoliopage.classList.remove("hide");
    contactpage.classList.add("hide");
})
contactbtn.addEventListener("click",()=>{
    about.classList.add("hide");
    resumepage.classList.add("hide");
    portfoliopage.classList.add("hide");
    contactpage.classList.remove("hide");
})
let another=document.querySelector(".anotherdetailbox");
let conts="close";
showbtn.addEventListener("click",()=>{
  if(conts==="close"){
    conts="open";
    anotherdetailbox.style.display="block";
    console.log("dhs")
    
  }
  else{
    conts="close";
    console.log("dde");
    another.style.display="none";
  }
})





