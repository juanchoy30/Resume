// Import files
import { loadProjects } from './projects.js';
import { loadExpirience } from './expirience.js';
import { loadEducation } from './education.js';
import { loadSkills } from './skills.js';

export function loadLanguage(url) {   // Exported function, the argument must be a URL

    // Removes the content and change it for the other language version
    $('#resumeBody').remove();
    $('#movableContent').load(url + ' #resumeBody').hide().fadeIn('1500');

    // Functions to reload the JSON content
    loadSkills();
    loadProjects();
    loadExpirience();
    loadEducation();
}