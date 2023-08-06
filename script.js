const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5]

function setNavAnimation(oldState, newState){
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${oldState}-${index+1}`,`slide-${newState}-${index+1}`);
    })
}
function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');    
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')){
        // Animate in - Overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        // Animate In - Nav Items
        setNavAnimation('out', 'in');
        
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate Out - Nav Items
        setNavAnimation('in', 'out')

    }
}


// Event Listiners
// menuBars.addEventListener('click', toggleNav);
[menuBars, ...navItems].forEach((nav) => {
    nav.addEventListener('click', toggleNav);
})