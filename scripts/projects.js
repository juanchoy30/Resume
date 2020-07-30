// Import files
import { btnRepository, btnLink, gitHubIcon } from './htmlVariable.js';
import { failMessage } from './failMessage.js';
import { url } from './url.js';

// Relevant variables
var idPortfolio = '#portfolio';
var portafolio = '#portafolio';

export function loadProjects() {       // Exported function
    const urlProject = url + '/api/read-portfolio/';
    $.ajax({
        url: urlProject,
        type: "GET",
        beforeSend: function() {
            $(idPortfolio).append('<div id="load">Loading</div>');  // Load message
            $(portafolio).append('<div id="load">Cargando</div>');  // Load message
        },
        complete: function() {           // Once finished
            $('#loading').remove();      // Clear message
        },
        success: function(data) {        // If successful

            // Message in every <li>
            let newContent = '';
            for ( let i = 0; i < data.length; i++ ) {
                
                let projectP = data[i];

                newContent += '<li>' + projectP.title + ': ';
                if ($('div').is(idPortfolio)) {
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
            $(idPortfolio).html(UnorderList);
            $(portafolio).html(UnorderList);

        },
        fail: function() {               // Show error
            failMessage(idPortfolio, portafolio)
        }
    });
}

