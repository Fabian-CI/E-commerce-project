//logo effect
function hover(img)
{
    img.src="img/LogoOnHover.gif";

}

function hoverOut(img)
{
    img.src="img/Logo.png";

}

//sticky navigtion bar
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var main = document.querySelector(".mainSection");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    main.classList.add("main-margin");
    main.style.marginTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("sticky");
    main.classList.remove("main-margin");
    main.style.marginTop = "0";
  }
}


//shopping code
const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value.toLowerCase();
    window.location.href = `shopping-index.html?search=${searchTerm}`;
  }
});


