let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let npassword = document.getElementById("npassword")
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const areaHide = document.querySelector('.t-btn');
const myItem = document.querySelector('.my-item');
const details = document.querySelector('.details');
const nb = document.querySelector('.navbar-brand');


areaHide.addEventListener('click',()=>{
    areaHide.classList.add("hide")
    myItem.classList.remove("hide")
    details.classList.add('new-width')
    nb.classList.add('mr')
})
myItem.addEventListener('click',()=>{
    myItem.classList.add("hide")
    areaHide.classList.remove("hide");
    details.classList.remove('new-width');
    nb.classList.remove('mr')
})

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("click", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("click", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});



submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

function show() {
    if(password.type == "password"){
        password.type = "text"
    } else{
        password.type = "password"
    }
}
function show1() {
    if(cpassword.type == "password"){
        cpassword.type = "text"
    } else{
        cpassword.type = "password"
    }
}
function show2() {
    if(npassword.type == "password"){
        npassword.type = "text"
    } else{
        npassword.type = "password"
    }
}
// function hide() {
//     if(toggle.type == "password"){
//         toggle.type = "text"
//     } else{
//         toggle.type = "password"
//     }
// }