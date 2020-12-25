import contactFormValidations from "./validate_form.js";
import scrollNavBar from "./navbar_scroll.js";
import hamburgerMenu from "./hamburger_menu.js";
import reveal from "./reveal";

import '../assets/backgroundImageoptimized.jpg';
import '../assets/loader.svg';

import '../css/normalize.css';
import '../css/styles.css';


document.addEventListener("DOMContentLoaded", ()=>{
    contactFormValidations();
    scrollNavBar(".navbar");
    hamburgerMenu(".panel__icon",".panel",".panel__menu");
    reveal();
})