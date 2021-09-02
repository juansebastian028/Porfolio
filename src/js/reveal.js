export default function reveal() {
  document.querySelector("html").style.overflowX = "hidden";
  const sr = ScrollReveal();

  sr.reveal(".hero-image__content", {
    duration: 2500,
    origin: "top",
    distance: "300px",
  });

  sr.reveal(".about-me", {
    duration: 2500,
    origin: "left",
    distance: "300px",
  });

  sr.reveal(".my-skills__content", {
    duration: 2500,
    origin: "right",
    distance: "300px",
  });

  sr.reveal(".card-list", {
    duration: 2500,
    origin: "left",
    distance: "300px",
  });

  sr.reveal(".form", {
    duration: 2500,
    origin: "right",
    distance: "300px",
  });

  sr.reveal(".contact__info", {
    duration: 2500,
    origin: "bottom",
    distance: "300px",
  });
};
