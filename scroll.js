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

// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations
let s2a1 = {
  targets: '#two',
  opacity: [0.3,1],
  scale: [4,1],
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s2a2 = {
  targets: '#two',
  scale: 1,
  duration: 2000,
};

// Add children
tl2.add(s2a1).add(s2a2);

// Get section height
let twoHeight = document.getElementById("two").clientHeight;
console.log('twoHeight: ' + twoHeight);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 4500,
  triggerHook: 0,
})


// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);

