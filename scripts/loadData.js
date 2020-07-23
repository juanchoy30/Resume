import { loadProjects } from './projects.js';
import { loadExpirience } from './expirience.js';

$(function() {

    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    // THIS FUNCTION COLLECTS THE DATA FROM THE PROJECT JSON FILE
    loadProjects();
    loadExpirience();

});