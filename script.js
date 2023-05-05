const navbar = document.getElementById("navbar");
const navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("click", function(){
        for (let j = 0; j < navItems.length; j++){
            navItems[j].classList.remove("active");
        }
        this.classList.add("active");
      });
}
