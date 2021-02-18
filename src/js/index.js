import contactFormValidations from "./validate_form.js";
import hamburgerMenu from "./hamburger_menu.js";
import reveal from "./reveal";

import '../assets/backgroundImageoptimized.jpg';
import '../assets/loader.svg';

import '../css/normalize.css';
import '../css/styles.css';


document.addEventListener("DOMContentLoaded", ()=>{
    contactFormValidations();
    hamburgerMenu(".panel__icon",".panel",".panel__menu");
    reveal();
})