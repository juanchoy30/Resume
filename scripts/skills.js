// Import files
import { skillBadge } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

// Relevant variables
var programming = '#programming';
var tool = '#tool';

export function loadSkills() {     // Exported function
    $.getJSON('data/skills.json')  // Getting the json file
    .done( function(data) {        // If successful
        
        // Message in every <li>
        let newContent1 = '';
        for ( let i = 0; i < data.PROGRAMMING.length; i++ ) {
            
            newContent1 += '<li><span ' + skillBadge + '>';
            newContent1 += data.PROGRAMMING[i].skill;
            newContent1 += '</span></li>';
        }

        // Message in every <li>
        let newContent2 = '';
        for ( let i = 0; i < data.TOOL.length; i++ ) {
            
            newContent2 += '<li><span ' + skillBadge + '>';
            newContent2 += data.TOOL[i].skill;
            newContent2 += '</span></li>';
        }

        // Get the <li> elements inside a <ul> element
        let UnorderList1 = '<ul class="list-unstyled">' + newContent1 + '</ul>';
        let UnorderList2 = '<ul class="list-unstyled">' + newContent2 + '</ul>';

        // Put the respective lists into the DOM
        $(programming).html(UnorderList1);
        $(tool).html(UnorderList2);

    }).fail(       // If unsuccessful
        failMessage(programming, null),
        failMessage(tool, null)
    );
}