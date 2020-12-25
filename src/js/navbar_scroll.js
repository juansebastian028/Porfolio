export default function scrollNavBar(btn) {
  const $nav = document.querySelector(btn);

  $nav.classList.add("navbar");

  document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 400) {
      $nav.classList.add("navbar--fixed");

    } else {
      $nav.classList.remove("navbar--fixed");
    }
  });
}
