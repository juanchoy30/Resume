// Import files
import { btnRepository, btnLink, gitHubIcon } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

// Relevant variables
var portfolio = '#portfolio';
var portafolio = '#portafolio';

export function loadProjects() {       // Exported function
    $.getJSON('data/projects.json')    // Getting the json file
        .done( function(data) {        // If successful

            // Message in every <li>
            let newContent = '';
            for ( let i = 0; i < data.PORTFOLIO.length; i++ ) {
                
                let projectP = data.PORTFOLIO[i];

                newContent += '<li>' + projectP.title + ': ';
                if ($('div').is(portfolio)) {
                    newContent += projectP.description;     // English version
                } else if ($('div').is(portafolio)) {
                    newContent += projectP.descripcion;     // Spanish version
                }
                newContent += '<br><a ' + btnRepository;
                newContent += 'href="' + projectP.repository + '" target="blank">';
                newContent += gitHubIcon + ' Repository</a>';
                if ( projectP.link !== null ) {    // If empty data do not add
                    newContent += '<a ' + btnLink;
                    newContent += 'href="' + projectP.link + '" target="blank">Link</a></li>';
                } else {
                    newContent += '</li>';
                }
            }

            // Gets the <li> elements inside a <ul> element
            let UnorderList = '<ul>' + newContent + '</ul>';

            // Put the respective lists into the DOM
            $(portfolio).html(UnorderList);
            $(portafolio).html(UnorderList);

        }).fail( failMessage(portfolio, portafolio) ); // If unsuccessful
}

