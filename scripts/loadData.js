// Import files
import { loadProjects } from './projects.js';
import { loadExpirience } from './expirience.js';
import { loadEducation } from './education.js';
import { loadSkills } from './skills.js';
import { loadLanguage } from './language.js';

// On load function
$(function() {

    // Verification
    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    // DATA MANAGEMENT
    loadSkills();          // Functions which manages the skills
    loadProjects();        // Functions which manages the portfolio
    loadExpirience();      // Functions which manages the expiriences
    loadEducation();       // Functions which manages the education

    // URL
    $('.languageLink').on('click', function (e) { // Click event to change the language
        e.preventDefault();
        loadLanguage(this.href);  // Functions which manages the language selection
    });

    // Hides and shows the language button
    $('#spanish').on('click', function() {
        $('#english').removeClass('hiddenFromPage');
        $('#spanish').addClass('hiddenFromPage');
    });
    $('#english').on('click', function() {
        $('#spanish').removeClass('hiddenFromPage');
        $('#english').addClass('hiddenFromPage');
    });
});