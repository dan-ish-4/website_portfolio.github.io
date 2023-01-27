
console.log("js running.......");
document.querySelector('.cross').style.display='none';
let icons = document.getElementsByClassName("icons");
let cross =document.getElementsByClassName("cross");

document.querySelector('.icons').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebargo')
if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector('.ham').style.display="inline";
    document.querySelector('.cross').style.display="none";

}
else{
    document.querySelector('.ham').style.display="none";
    setTimeout(()=>{
       document.querySelector('.cross').style.display="inline";
        console.log("ddddd");
    },400);
    }
   
})

// document.querySelector('.cross').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//     console.log("click");
// })


console.log("jssss");