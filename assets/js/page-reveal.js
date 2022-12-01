let tl = gsap.timeline({});

tl.fromTo(
  ".hero-container",
  {
    clipPath: "circle(0%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 1.5,
    delay: 2,
  }
);

tl.fromTo(
  ".ellipse",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);