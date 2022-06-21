const menuBarsBtn = document.getElementById('menu')
const navLinks = document.getElementById('nav-links')

function toggleBtn() {
    navLinks.classList.toggle('show')
}

menuBarsBtn.addEventListener('click', toggleBtn)


// const menuBtn = document.getElementById('menu')
// const navLinks = document.getElementById("navLinks")
// const menuIcon = document.getElementById("menu-icon")

// sidenav.style.right = "-250px"

// menuBtn.onclick = function() {
//     if(sidenav.style.right == "-250px") {
//         sidenav.style.right ="0"; 
//         menu.src = "close.png";
//     }
//     else {
//         sidenav.style.right ="-250px";
//         menu.src = <i class="fa fa-bars" id="menu-icon"></i>;
//     }
// }