gsap.to("svg", {
  rotation: 360,
  repeat: -1,
  duration: 10,
  delay: 0,
  ease: "none"
})

window.addEventListener("load", (event) => {
  document.querySelector("#loading").style.display = "none";

  AOS.init();
  ScrollReveal().reveal('.image-holder .image,.invitation', { interval: 5, opacity: 0, reset: true });
  // ScrollReveal().reveal('.image-holder .image', { interval: 5, opacity: 0, reset: true });

  gsap.from("#Lap-Heading", {
    x: -500,
    duration: 1,
  });

  let mm = gsap.matchMedia();
  mm.add("(min-width: 950px)", () => {
    gsap.from(".right-items li", {
      y: -100,
      duration: 1,
      stagger: 0.1
    });
  });


  // Navigation Function

  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".navList");

  function handelNav() {
    navList.classList.toggle('open');
    if (hamburger.classList.contains("fa-bars")) {
      hamburger.classList.replace("fa-bars", "fa-xmark");
    }

    else {
      hamburger.classList.replace("fa-xmark", "fa-bars");
    }
  }

  hamburger.addEventListener('click', function () {
    handelNav();
  });

  navList.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'item' || e.target.classList[0] == 'navList') {
      handelNav();
    }
  })

  // Animation For The LOGO

  gsap.to(".logoOuter", {
    rotation: 360,
    repeat: -1,
    duration: 80,
    delay: 0,
    ease: "none"
  })


  var aboutUs = new Typed("#Aboutus .subHeading", {
    strings: [
      "|| Sarvajanik Shree Shree Kali Puja Committee ||",
      `<span style="font-family: 'Arya', sans-serif;">|| सार्वजनिक श्री श्री काली पूजा मंडळ ||</span>`,
      `<span style="font-family: 'Alkatra', sans-serif;">|| সার্বজনীন   শ্রী   শ্রী  কালী পূজা কমিটি ||</span>`,
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
  });


  var followUs = new Typed("#Reach-Us .followUs", {
    strings: [
      `<span style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);-webkit-background-clip: text; ">#instagram</span>`,
      `<span style="color:#4267B2">#facebook</span>`,
      `<span style="color:#cd201f">#youtube</span>`,
      `<span style="color:#1da1f2">#twitter</span>`,
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
  });

  const checkBox = document.querySelector("#check");
  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      gsap.to(".invitations", {
        rotationY: -180,
        duration: 1
      })
    }
    else {
      gsap.to(".invitations", {
        rotationY: 0,
        duration: 1
      })
    }
  })


  // Futher Updates
  // const swiper = new Swiper('.swiper', {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

});

