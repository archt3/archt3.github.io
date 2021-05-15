// Add active class to current nav selected link
var a = document.querySelectorAll(".navbar li a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".navbar li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
  };
}

// Color palette variables
let dark = '#252525';
let mid = '#888';
let light = 'rgba(255, 255, 255, 0.4)';

// Add scrollmagic controller
let controller = new ScrollMagic.Controller();

//------------------
//TIMELINE 2
//------------------

let tl4 = anime.timeline({autoplay: false});

// Add animations
let s3a2 = {
  targets: '#two .card-container',
  opacity: [0,1],
  translateX: {
    value: ['-100%', '0%'],
    duration: 3500,
  },
  duration: 3000,
  delay: 0,
  easing: 'easeInOutSine'
};

// Add children
tl4.add(s3a2);

//------------------
//SCENE 3
//------------------

//Add third scrollmagic scene
let scene3 = new ScrollMagic.Scene({
  triggerElement: "#site-banner",
  duration: 2000,
  triggerHook: 0
})


// Trigger animation timeline
//Use scroll position to play animation

.on("progress", function (event) {
  tl4.seek((tl4.duration * event.progress) * 3);
})

.setPin('#three')
.addTo(controller);

let scroll_tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.factsContainer',
      start: "top center",
      // pin: true,
      scrub: true,
      end: "+=300",
      // markers: true,
  }
}),
  facts = [...document.querySelectorAll('.fact')]
scroll_tl.to('.factsContainer h2', {
  scale: 1.5,
  duration: 1,
  ease: "slow"
})
scroll_tl.to(facts, {
  xPercent: -85 * (facts.length - 1),
  scrollTrigger: {
      trigger: ".factsContainer_sm",
      start: "center center",
      pin: true,
      // horizontal: true,
      // pinSpacing:false,
      // markers: true,
      scrub: 1,
      snap: 1 / (facts.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      // end: () => `+=${smallFactsContainer.offsetWidth}`
      end: () => `+=4320`
  }
});







