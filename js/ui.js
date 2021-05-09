if ("ontouchstart" in document.documentElement)
{
    document.getElementById('cursor-token').style.display = "none";
    
}else{
    jQuery(document).ready(function() {

        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;
         
        $(document).mousemove(function(e){
          mouseX = e.pageX + 20;
          mouseY = e.pageY + 20; 
        });
          
        setInterval(function(){
          xp += ((mouseX - xp)/6);
          yp += ((mouseY - yp)/6);
          $("#cursor-token").css({left: xp +'px', top: yp +'px'});
        }, 20);
      
      });
}

var drawerOpned = false;
var searchFormOpened = false;
let burgermenu1 = document.getElementById('burger-menu1');
let burgermenu2 = document.getElementById('burger-menu2');
let burgermenu3 = document.getElementById('burger-menu3');
function drawerToggle() {
    console.log('Clicked');
    if(!drawerOpned){
        document.getElementById("navigation-drawer").style.left = "0vw";
        document.getElementById("navigation-drawer-shadow").style.visibility = "visible";
        drawerOpned = true;
        burgermenu2.style.visibility = "hidden";
        burgermenu1.style.transform = "rotate(45deg) translate(-2px, 15px)";
        burgermenu3.style.transform = "rotate(-45deg) translate(-2px, -15px)";
    }else{
        closeDrawer()
    }
}
function closeDrawer(){
    document.getElementById("navigation-drawer").style.left = "-100vw";
    document.getElementById("navigation-drawer-shadow").style.visibility = "hidden";
    drawerOpned = false;
    burgermenu2.style.visibility = "visible";
    burgermenu1.style.transform = "rotate(0deg) translate(-50%, 0px)";
    burgermenu3.style.transform = "rotate(0deg) translate(-50%, 0px)";
}