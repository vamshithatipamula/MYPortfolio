// alert("hi");
let about=document.querySelector(".contents");
let resumepage=document.querySelector(".resumepage");
let portfoliopage=document.querySelector(".portfoliopage");
let contactpage=document.querySelector(".contactpage");
let aboutbtn=document.querySelector(".aboutbtn");
let resumebtn=document.querySelector(".resumebtn");
let portfoliobtn=document.querySelector(".portfoliobtn");
let contactbtn=document.querySelector(".contactsbtn");
let showbtn=document.querySelector(".showcontacts");
let forsmallbtn=document.querySelector(".forsmallsizebtn")
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
let secondinf=document.querySelector(".secondinf");
let conts="close";
showbtn.addEventListener("click",()=>{
  if(conts==="close"){
    conts="open";
    console.log("dhs")
    secondinf.style.display="flex";
  }
  else{
    conts="close";
    console.log("dde");
    secondinf.style.display="none"
  }
})



forsmallbtn.addEventListener("click",()=>{
  if(conts==="close"){
    conts="open";
    console.log("dhs")
    secondinf.style.display="flex";
  }
  else{
    conts="close";
    console.log("dde");
    secondinf.style.display="none"
  }
})




const myDiv = document.getElementsByClassName('full');
// const toggleButton = document.getElementById('toggle-button');

// Create a media query matcher for small screens
const mediaQuery = window.matchMedia('(max-width: 768px)'); // Customize the breakpoint as needed

// Function to handle show/hide behavior
const toggleDiv = () => {
  if (mediaQuery.matches) { // Check if small screen
    myDiv.style.height= window.innerHeight; // Toggle visibility on click
  } 
};

window.addEventListener('resize', toggleDiv);

// Initial state based on screen size
toggleDiv();