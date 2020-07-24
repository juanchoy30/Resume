import { loadProjects } from './projects.js';
import { loadExpirience } from './expirience.js';
import { loadEducation } from './education.js';
import { loadSkills } from './skills.js';
import { loadInfo } from './personalInfo.js'

$(function() {

    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    // THIS FUNCTION COLLECTS THE DATA FROM THE PROJECT JSON FILE
    loadSkills();
    loadProjects();
    loadExpirience();
    loadEducation();
    loadInfo();
});