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

//search bar code
const searchInput = document.getElementById('search-bar');
const productsContainer = document.getElementById('columns');
const products = productsContainer.getElementsByTagName('figure');

searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getElementsByTagName('figcaption')[0].textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      products[i].style.display = '';
    } else {
      products[i].style.display = 'none';
    }
  }

  if (searchTerm === '') {
    for (let i = 0; i < products.length; i++) {
      products[i].style.display = '';
    }
  }
});


//search bar code - recived from other index files
const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('search');

if (searchTerm) {
  searchInput.value = searchTerm;
}


