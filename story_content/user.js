function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rtA4VUmpzq":
        Script1();
        break;
      case "6b6DExAJW2O":
        Script2();
        break;
      case "5aCTcXsNc1t":
        Script3();
        break;
      case "6Tzc2ahbhgl":
        Script4();
        break;
      case "5XuyThZEHVs":
        Script5();
        break;
      case "5gotHNeL189":
        Script6();
        break;
      case "6Lg8nXJ0wYj":
        Script7();
        break;
      case "6cZLBikn9CP":
        Script8();
        break;
      case "5YywAcX9jMx":
        Script9();
        break;
      case "6NCt4vHSN6r":
        Script10();
        break;
      case "5kWCDA850Na":
        Script11();
        break;
  }
}

function Script1()
{
  let drop_targets = document.querySelectorAll("[data-acc-text='drop_targets']");
drop_targets.forEach(function (drop_tagrget){
                     gsap.to(drop_tagrget,{
                       delay: 0.5,
                       scale: 0.8,
                       yoyo: true,
                       repeat: 1,
                       duration: 1
                     });
                     });
drop_targets.forEach(function (drop_tagrget){
                     gsap.to(drop_tagrget,{
                       delay: 1.5,
                       filter: "grayscale(1)",
                       ease: "Power4.easeOut"
                     });
});
}

function Script2()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_3']");
gsap.from(piece, {
  delay: 2,
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script3()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_8']");
gsap.from(piece, {
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script4()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_4']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script5()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_9']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script6()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_2']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script7()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_6']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script8()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_1']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script9()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_7']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script10()
{
  let piece = document.querySelectorAll("[data-acc-text='piece_5']");
gsap.from(piece,{
  scale: 0.8,
  duration: 1,
  ease: "bounce.out",
  y: -200,
});
}

function Script11()
{
  var snowstars = document.querySelectorAll("[data-acc-text='snowstars']");
var snowstars_array = Array.from(snowstars);
var fireworks = document.querySelectorAll("[data-acc-text='fireworks']");
var fireworks_array = Array.from(fireworks);
var explosions = document.querySelectorAll("[data-acc-text='explosions']");
var explosions_array = Array.from(explosions);

var tl = gsap.timeline();

// Animation for the first firework
tl.to(fireworks_array[0], {
  x: 184,
  y: 206,
  scale: 1.3,
  stagger: { each: 0.2, ease: "sine.inOut" },
  duration: 1
});

// Animation for the explosion of the first firework
tl.from(explosions_array[0], {
  scale: 0.3,
  opacity: 0,
}, "-=0.1");

// Fade out the first firework
tl.to(fireworks_array[0], {
  opacity: 0,
}, "-=0.3");

// Fade out the explosion of the first firework
tl.to(explosions_array[0], {
  opacity: 0,
});

// Animation for the second firework
tl.to(fireworks_array[1], {
  x: 744,
  y: 222,
  scale: 1.3,
  stagger: { each: 0.2, ease: "sine.inOut" },
  duration: 1
});

// Animation for the explosion of the second firework
tl.from(explosions_array[1], {
  scale: 0.3,
  opacity: 0,
}, "-=0.1");

// Fade out the second firework
tl.to(fireworks_array[1], {
  opacity: 0,
}, "-=0.3");

// Fade out the explosion of the second firework
tl.to(explosions_array[1], {
  opacity: 0,
});

// Animation for the snowstars
tl.to(snowstars_array, {
  scale: 0.8,
  stagger: { each: 0.3, ease: "sine.inOut" },
  y: 400,
  ease: "bounce.out(10)",
  rotate: 360,
  duration: 1
});

// Fade out the snowstars
tl.to(snowstars_array, {
  opacity: 0,
  stagger: { each: 0.2, ease: "sine.inOut" },
  duration: 1
});
}

