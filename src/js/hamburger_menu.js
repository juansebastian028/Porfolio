export default function hamburgerMenu(panelBtn, panel, menu) {
  
  const $panelBtn = document.querySelector(panelBtn);
  const $panel = document.querySelector(panel);
  const $menu = document.querySelectorAll(menu);

  document.addEventListener("click", (e) => {
    if (e.target === $panelBtn) {
      $panel.classList.toggle("is-active");
    }
  });

  $menu.forEach((element) => {
    element.addEventListener("click", () => {
      $panel.classList.remove("is-active");
    });
  });
}
