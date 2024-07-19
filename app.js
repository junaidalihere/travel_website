let menu = document.querySelector("header #menu")
let clse = document.querySelector("header #close")
let navbar = document.querySelector("header nav")
let listItem = document.querySelector("header nav ul li")


menu.addEventListener("click",function(){
     clse.style.display = "initial";
     menu.style.display = "none"
    navbar.classList.toggle("show")
})


clse.addEventListener("click", closeToggle);

listItems.forEach((listItem)=>{
  listItem.addEventListener("click", closeToggle)
})
function closeToggle () {
    navbar.classList.toggle("show")

  menu.style.display = "initial";
  clse.style.display = "none";
}

  

