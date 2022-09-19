let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let toggle = false;
comingSoon(slideIndex2);
showSlides(slideIndex);
refresh(slideIndex3);
autoGallery(slideIndex4);
creditPlay();
(function autoSlideShow() {
  setInterval(() => {
    slideIndex++;
    slideIndex2++;
    slideIndex3++;
    slideIndex4++;
    currentSlide(slideIndex);
    comingSoon(slideIndex2);
    refresh(slideIndex3);
    autoGallery(slideIndex4);
  }, 3000);
})();
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  move();
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function move() {
  let barElement = document.getElementById("myBar");
  let width = 1;
  let interval = setInterval(() => {
    frame();
  }, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(interval);
      barElement.style.width = "0.01%";
    } else {
      width++;
      barElement.style.width = width + "%";
    }
  }
}
function currLocation(n) {
  comingSoon((slideIndex2 = n));
}
function comingSoon(n) {
  let i;
  let slidesArr = document.getElementsByClassName("locationImg");
  let dotsArr = document.getElementsByClassName("locationCurrDot");
  if (n > slidesArr.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slidesArr.length;
  }
  for (i = 0; i < slidesArr.length; i++) {
    slidesArr[i].style.display = "none";
  }
  for (i = 0; i < dotsArr.length; i++) {
    dotsArr[i].className = dotsArr[i].className.replace(" present", "");
  }
  slidesArr[slideIndex2 - 1].style.display = "block";
  dotsArr[slideIndex2 - 1].className += " present";
}
(function motion() {
  const linear = document.getElementById("motion");
  let transport = 0;
  let timeId = setInterval(() => {
    check();
  }, 4000);
  function check() {
    // console.log(transport);
    if (transport == 4400) {
      transport = 0;
      const temp = "-" + transport + "px";
      linear.style.transform = `translate3d(${temp},0,0)`;
      clearInterval(timeId);
      motion();
    } else {
      transport += 440;
      const temp = "-" + transport + "px";
      linear.style.transform = `translate3d(${temp},0,0)`;
    }
  }
})();

function refresh(n) {
  let i;
  let testimonialArr = document.getElementsByClassName("testimonialContent");
  let testimonialDots = document.getElementsByClassName("sixDots");
  if (n > testimonialArr.length) {
    slideIndex3 = 1;
  }
  for (i = 0; i < testimonialArr.length; i++) {
    testimonialArr[i].style.display = "none";
  }
  for (i = 0; i < testimonialDots.length; i++) {
    testimonialDots[i].className = testimonialDots[i].className.replace(
      "now",
      ""
    );
  }
  testimonialArr[slideIndex3 - 1].style.display = "block";
  testimonialDots[slideIndex3 - 1].className += " now";
}
function autoPlay(n) {
  refresh((slideIndex3 = n));
}
function autoGallery(n) {
  let curr = slideIndex4 + 1;
  let i;
  const creditArr = document.getElementsByClassName("creditsItems");

  if (n > creditArr.length) {
    slideIndex4 = 1;
  }
  for (i = 0; i < creditArr.length; i++) {
    creditArr[i].className = creditArr[i].className.replace("master", "");
  }
  if (curr > creditArr.length) {
    curr = 1;
  }
  creditArr[curr].className += " master";
}
function creditPlay() {
  let width = 0;
  const creditElement = document.getElementById("creditsSlidesItems");
  let timeId = setInterval(() => {
    check();
  }, 4000);
  function check() {
    width += 250;
    if (width > 3250) {
      width = 0;
      creditElement.style.transform = "translate3d(0,0,0)";
      clearInterval(timeId);
      creditPlay();
    } else {
      const temp = "-" + width + "px";
      creditElement.style.transform = `translate3d(${temp},0,0)`;
    }
  }
}
mybutton = document.getElementById("scrollTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function toggleClass() {
  navbar = document.getElementById("classicNavbar");
  sidebarArr = document.getElementsByClassName("sidebar");
  if (toggle === false) {
    navbar.className += " toggle";
    sidebarArr[0].className += " showbar";
    toggle = true;
  } else {
    navbar.className = navbar.className.replace("toggle", "");
    sidebarArr[0].className = sidebarArr[0].className.replace("showbar", "");
    toggle = false;
  }
}
function showDropdown(n) {
  const firstDropdown = document.getElementById("firstDropdown");
  const secondDropdown = document.getElementById("secondDropdown");
  const thirdDropdown = document.getElementById("thirdDropdown");
  const arrowArr = document.getElementsByClassName("arrow");
  let currClass;
  for (let i = 1; i <= 3; i++) {
    if (n == i) {
      currClass = arrowArr[i - 1];
    }
  }
  if (n === 1) {
    if (firstDropdown.style.display === "none") {
      firstDropdown.style.display = "block";
      currClass.className = currClass.className.replace("down", " up");
    } else {
      firstDropdown.style.display = "none";
      currClass.className = currClass.className.replace("up", " down");
    }
  }
  if (n === 2) {
    if (secondDropdown.style.display === "none") {
      secondDropdown.style.display = "block";
      currClass.className = currClass.className.replace("down", " up");
    } else {
      secondDropdown.style.display = "none";
      currClass.className = currClass.className.replace("up", " down");
    }
  }
  if (n === 3) {
    if (thirdDropdown.style.display === "none") {
      thirdDropdown.style.display = "block";
      currClass.className = currClass.className.replace("down", " up");
    } else {
      thirdDropdown.style.display = "none";
      currClass.className = currClass.className.replace("up", " down");
    }
  }
}
