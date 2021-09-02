import contactFormValidations from "./validate_form.js";
import reveal from "./reveal";

import '../assets/images/backgroundImageoptimized.jpg';
import '../assets/images/basic-cleaner.jpg';
import '../assets/images/colombian-restaurant.jpg';
import '../assets/images/extrapolator.jpg';
import '../assets/images/nips.jpg';
import '../assets/images/to-do-list.jpg';
import '../assets/images/loader.svg';

import '../css/normalize.css';
import '../css/styles.css';


document.addEventListener("DOMContentLoaded", () => {
    contactFormValidations();
    reveal();
});