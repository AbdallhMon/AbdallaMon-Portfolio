// add active class to nav
let navLink = document.querySelectorAll(".landing-page nav .nav-link");

navLink.forEach((li) => {
  li.addEventListener("click", (li) => {
    li.preventDefault();
    navLink.forEach((a) => {
      a.classList.remove("active");
    });
    li.target.classList.add("active");
    let selectedSection = document.querySelector(
      `.${li.target.dataset.section}`
    );
    window.scrollTo({
      top: selectedSection.offsetTop,
      behavior: "smooth",
    });
  });
});

let portfolioBtn = document.querySelector("#portfolio");

portfolioBtn.addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({
    behavior: "smooth",
  });
});

// landing-page animation
let landingImg = document.querySelector(".landing-page .faculty-holder");
let ladningText = document.querySelector(".landing-page .landing-text");
window.addEventListener("load", () => {
  ladningText.classList.add("active");
  landingImg.classList.add("active");
});
// about animation
let about = document.querySelector(".about");

let aboutFace = document.querySelector(".about .about-face");

let aboutImg = document.querySelector(".about .fb");

let blobtext = document.querySelectorAll(".about .about-face > div");

let aboutText = document.querySelector(".about .about-text");

window.addEventListener("scroll", () => {
  if (scrollY > about.offsetTop + about.offsetHeight - window.innerHeight) {
    aboutImg.classList.add("active");
    aboutFace.classList.add("active");
    blobtext.forEach((blob) => {
      blob.classList.add("active");
    });
    aboutText.classList.add("active");
  }
  if (scrollY > about.offsetTop - 400) {
    aboutImg.classList.add("activemb");
    aboutFace.classList.add("activemb");
    blobtext.forEach((blob) => {
      blob.classList.add("activemb");
    });
  }
  if (scrollY > about.offsetTop - 400) {
    aboutText.classList.add("activemb");
  }
});
// services animation
let services = document.querySelector(".services");

let servicesGrid = document.querySelector(".services .services-grid");
window.addEventListener("scroll", () => {
  if (scrollY > services.offsetTop - 400) {
    servicesGrid.classList.add("active");
  }
});

// start of portfolio
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
let projectsLi = document.querySelectorAll(".projects ul li");
let swiperSlide = document.querySelectorAll(".projects .swiper-slide");
let swip = document.querySelector(".swiper");
let swip2 = document.querySelector(".swiper-2");
swip2.classList.add("container");
swiperSlide.forEach((slide) => {
  slide.classList.add("all");
});
projectsLi.forEach((li) => {
  li.addEventListener("click", (li) => {
    projectsLi.forEach((e) => {
      e.classList.remove("active");
    });
    li.target.classList.add("active");
    let selectedImgs = document.querySelectorAll(
      `.swiper .${li.target.classList[0]}`
    );
    if (li.target.classList[0] == "all") {
      swip.style.display = "block";
      swip2.style.display = "none";
    } else {
      swip2.style.display = "flex";
      swip.style.display = "none";
      swip2.innerHTML = "";
      selectedImgs.forEach((sel) => {
        let newSlide = document.createElement("div");
        newSlide.innerHTML = sel.innerHTML;
        swip2.appendChild(newSlide);
      });
    }
  });
});

// start of testimonials animation
let testi = document.querySelector(".testmonials .container");
let testimonials = document.querySelector(".testmonials");
let testimonialsTesxt = document.querySelector(
  ".testmonials .testmonials-text"
);
let testiClient = document.querySelector(".testmonials-text .client");
window.addEventListener("scroll", () => {
  if (window.scrollY > testimonials.offsetTop - 400) {
    testi.classList.add("active");
  }
});
// start of dark mode

let input = document.querySelector(".switch input");

let sliderBtn = document.querySelector(".switch .slider");

let root = document.querySelector(":root");

let waveScreen = document.querySelector(".wave-screen");
let waveMobile = document.querySelector(".wave-mobile");
let blobtext1 = document.querySelector(".blob-text-img");
let blobtext2 = document.querySelectorAll(".blob-text-2-img");
let circleBlob = document.querySelector(".circle-blob");
let servicesBlob = document.querySelector(".services .container::after");
let setVariables = function () {};
let myVariables;
if (window.localStorage.getItem("switch") !== null) {
  input.classList.add("checked");
  switching(input);
} else {
  input.classList.remove("checked");
  switching(input);
}
sliderBtn.addEventListener("click", () => {
  input.classList.toggle("checked");
  switching(input);
});

function switching(input) {
  if (input.classList.contains("checked")) {
    window.localStorage.setItem("switch", "checked");
    setVariables = (vars) =>
      Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
    myVariables = {
      "--primary": " #171c23",
      "--secondary": "#21272f",
      "--primary-black": " #ffffff",
      "--secondary-black": "#f0fcf9",
      "--tertiary": " #919a9c",
      "--ruby": "#29d882",
      "--secondary-ruby": " #00bd95",
      "---main-transition": " 0.5s",
      "--main-padding": " 50px",
    };
    setVariables(myVariables);
    // changing wave src
    waveScreen.src = "imgs/wave (2)-black.svg";
    waveMobile.src = "imgs/wave (2)-black.svg";
    // changing-blob-text src
    blobtext1.src = "imgs/blob-text-black.png";
    blobtext2.forEach((blo) => {
      blo.src = "imgs/blob-text2-black.png";
    });
    circleBlob.style.opacity = "0.1";
  } else {
    window.localStorage.removeItem("switch");

    setVariables = (vars) =>
      Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
    myVariables = {
      "--primary": " #ffffff",
      "--secondary": "#f0fcf9",
      "--primary-black": " #171c23",
      "--secondary-black": "#21272f",
      "--tertiary": " #707779",
      "--ruby": "#29d882",
      "--secondary-ruby": " #00bd95",
      "---main-transition": " 0.5s",
      "--main-padding": " 50px",
    };
    setVariables(myVariables);
    // changing wave src
    waveScreen.src = "imgs/wave.svg";
    waveMobile.src = "imgs/wave (2).svg";
    // changing-blob-text src
    blobtext1.src = "imgs/blob-text.png";
    blobtext2.forEach((blo) => {
      blo.src = "imgs/blob-text2.png";
    });
    circleBlob.style.opacity = "1";
  }
}
