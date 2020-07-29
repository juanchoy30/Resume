// Import files
import { mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

// Relevant variables
var expirience = '#expirience';
var experiencia = '#experiencia';

export function loadExpirience() {      // Exported function
    $.getJSON('data/expirience.json')   // Getting the json file
    .done( function(data) {             // If successful

        // Message in every <li>
        let newContent = '';
        for ( let i = 0; i < data.EXPIRIENCE.length; i++ ) {

            let expirienceP = data.EXPIRIENCE[i];

            if ($('div').is(expirience)) {                     // English version
                newContent += '<li><h4>' + expirienceP.title;
                if ( expirienceP.company !== null ) {
                    newContent += ' at ' + expirienceP.company;
                } else {
                    newContent += '';
                }
                newContent += ', ' + expirienceP.place + '</h4>';
                newContent += expirienceP.date + '<br>' + expirienceP.description;

            } else if ($('div').is(experiencia)) {            // Spanish version
                newContent += '<li><h4>' + expirienceP.titulo;
                if ( expirienceP.company !== null ) {    // If empty data do not add
                    if ($('div').is(expirience)) {
                        newContent += ' en ' + expirienceP.company;
                } else {
                    newContent += '';
                    }
                }
            newContent += ', ' + expirienceP.place + '</h4>';
            newContent += expirienceP.fecha + '<br>' + expirienceP.descripcion;
        }

        // Get the <li> elements inside a <ul> element
        let UnorderList = '<ul ' + mainList + '>' + newContent + '</ul>';

        // Put the respective lists into the DOM
        $(expirience).html(UnorderList);
        $(experiencia).html(UnorderList);
    }
    }).fail( failMessage(expirience, experiencia)  // Function which manages failure message
    );
}