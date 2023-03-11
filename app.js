
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
let activeLink = 0;
links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




$(function() {

    $("#slider").QCslider({
        duration: 4000
      });
    
})



