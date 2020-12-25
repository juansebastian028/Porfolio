export default function contactFormValidations() {
  const $form = document.querySelector(".form");
  const $inputs = document.querySelectorAll(".form [required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form__error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".form [required]")) {
      let $input = e.target;
      let pattern = e.target.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regax = new RegExp(pattern);

        return !regax.exec($input.value)
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      const $loader = document.querySelector(".form__loader"),
        $response = document.querySelector(".form__response");

      $loader.classList.remove("none");

      let dataForm = new FormData($form);

      fetch("php/index.php", {
        method: "POST",
        body: dataForm,
      })
        .then((res) => res.json())
        .then((data) => {
          $loader.classList.add("none");

          const $element = document.createElement("p");
          const $text = document.createTextNode(data);
          $element.appendChild($text);

          $response.insertAdjacentElement("afterbegin", $element);
          $response.classList.remove("none");
          $form.reset();
        });

      setTimeout(() => $response.classList.add("none"), 4000);
    }
  });
}
