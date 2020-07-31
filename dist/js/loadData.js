// Import files
import { loadProjects } from './projects.js';
import { loadExpirience } from './expirience.js';
import { loadEducation } from './education.js';
import { loadSkills } from './skills.js';
import { loadLanguage } from './language.js';
import { backForwars } from './backForwards.js';
import { changeButton } from './changeButton.js'; // On load function

$(function () {
  // Verification
  $.ajax({
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  }); // DATA MANAGEMENT

  loadSkills(); // Functions which manages the skills

  loadProjects(); // Functions which manages the portfolio

  loadExpirience(); // Functions which manages the expiriences

  loadEducation(); // Functions which manages the education
  // URL MANAGEMENT

  $('.languageLink').on('click', function (e) {
    // Click event to change the language
    e.preventDefault();
    let href = this.href;
    loadLanguage(href); // Functions which manages the language selection

    history.pushState('', $(this).text, href); // The pushState() method of the hi story object updates the history stack.
  }); // FOR BACKWARDS AND FORWARDS

  window.onpopstate = function () {
    backForwars();
  }; // Hides and shows the language button


  $('nav a').on('click', function () {
    changeButton(location.pathname);
  });
});