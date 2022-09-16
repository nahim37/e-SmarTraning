const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
   hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
  }
  hamburgerToggler.addEventListener("click", toggleNav)

  new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900){
      navLinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
      navLinksContainer.style.transition = "none"
    }
  }).observe(document.body)
  // BOUTONS DE RECHERCHE
  const searchBox = document.querySelector(".search-box");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const searchInput = document.querySelector("input");
  const searchData = document.querySelector(".search-data");
  searchBtn.onclick =()=>{
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if(searchInput.value != ""){
      var values = searchInput.value;
      searchData.classList.remove("active");
      searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    }else{
      searchData.textContent = "";
    }
  }
  cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
  }
  // MINIS GALERIE
  var indexValue = 0;
  function slideShow(){
    setTimeout(slideShow, 2500);
    var x;
    const img = document.querySelectorAll(".image");
    for(x = 0; x < img.length; x++){
      img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
  }
  slideShow();
