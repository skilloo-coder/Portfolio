/*let taskbar = document.getElementsByClassName("main-footer-1p")[0]
let startmenu = document.getElementsByClassName("footer-div-2")[0]
  
  taskbar.addEventListener("click" , ()=>{
    if(startmenu.style.bottom == "50px"){
      startmenu.style.bottom = "-655px";
      
    }
    else{
      startmenu.style.bottom = "50px";
    }
  })
  */
  alert('To copy my websites link follow the steps ! 1. Scroll down for source code  2. click on copy to copy source code but first copy button is use to copy html & second for css');
  
const textarea1 = document.getElementById('textarea1');
const textarea2 = document.getElementById('textarea2');
const copybtn = document.getElementById('co-btn');

copybtn.onclick = function () {
  textarea1.select();
  document.execCommand("Copy");
}