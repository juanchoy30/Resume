// Import files
import { btnCertificate, mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

// Relevant variables
var education = '#academic';
var educacion = '#academico';
var courses = '#courses';
var cursos = '#cursos';

export function loadEducation() {     // Exported function
    $.getJSON('data/education.json')  // Getting the json file
    .done( function(data) {           // If successful

        // Message in every <li>
        var newContent1 = '';
        for ( var i = 0; i < data.ACADEMIC.length; i++ ) {

            var educationA = data.ACADEMIC[i];

            newContent1 += '<li><h4>';
            if ($('div').is(education)) {             // English version
                newContent1 += educationA.title;
                newContent1 += '</h4><h5>' + educationA.institution + '</h5>';
                newContent1 += '<span>' + educationA.date + '</span></li>'
            } else if ($('div').is(educacion)) {     // Spanish version
                newContent1 += educationA.titulo;
                newContent1 += '</h4><h5>' + educationA.institution + '</h5>';
                newContent1 += '<span>' + educationA.fecha + '</span></li>'
            }
        }

        // Message in every <li>
        var newContent2 = '';
        for ( var i = 0; i < data.COURSES.length; i++ ) {

            var educationC = data.COURSES[i];

            newContent2 += '<li><h4>' + educationC.title + '</h4>';
            newContent2 += '<h5>' + educationC.institution + '</h5>';
            if ( educationC.certificate !== null ) {    // If empty data do not add
                newContent2 += '<a ' + btnCertificate;
                newContent2 += ' href="' + educationC.certificate + '" target="blank">Certificate</a></li>';
            } else {
                newContent2 += '</li>';
            }
        }

        // Get the <li> elements inside a <ul> element
        var UnorderList1 = '<ul ' + mainList + '>' + newContent1 + '</ul>';
        var UnorderList2 = '<ul ' + mainList + '>' + newContent2 + '</ul>';

        // Put the respective lists into the DOM
        $(education).html(UnorderList1);
        $(educacion).html(UnorderList1);
        $(courses).html(UnorderList2);
        $(cursos).html(UnorderList2);

    }).fail(      // If unsuccessful
        failMessage(education, educacion),
        failMessage(courses, cursos)       // Function which manages failure message
    );
}