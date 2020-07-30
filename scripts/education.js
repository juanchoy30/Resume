// Import files
import { btnCertificate, mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';
import { url } from './url.js';

// Relevant variables
var education = '#academic';
var educacion = '#academico';
var courses = '#courses';
var cursos = '#cursos';

export function loadEducation() {     // Exported function
    const urlAcademic = url + '/api/read-academic/';
    const urlCourses = url + '/api/read-courses/';

    $.ajax({
        url: urlAcademic,
        type: "GET",
        beforeSend: function() {
            $(education).append('<div id="loading">Loading</div>');  // Load message
            $(educacion).append('<div id="loading">Cargando</div>');  // Load message
        },
        complete: function() {           // Once finished
            $('#loading').remove();      // Clear message
        },
        success: function(data) {           // If successful

            // Message in every <li>
            let newContent1 = '';
            for ( let i = 0; i < data.length; i++ ) {
    
                let educationA = data[i];
    
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
            // Get the <li> elements inside a <ul> element
            let UnorderList1 = '<ul ' + mainList + '>' + newContent1 + '</ul>';

            $(education).html(UnorderList1);
            $(educacion).html(UnorderList1);
        },
        fail:function() {               // Show error
            failMessage(education, educacion)  // Function which manages failure message
        }
    });

    $.ajax({
        url: urlCourses,
        type: "GET",
        beforeSend: function() {
            $(courses).append('<div id="load">Loading</div>');  // Load message
            $(cursos).append('<div id="load">Cargando</div>');  // Load message
        },
        complete: function() {           // Once finished
            $('#loading').remove();      // Clear message
        },
        success: function(data) {           // If successful

            // Message in every <li>
            let newContent2 = '';
            for ( let i = 0; i < data.length; i++ ) {

            let educationC = data[i];

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
            let UnorderList2 = '<ul ' + mainList + '>' + newContent2 + '</ul>';

            $(courses).html(UnorderList2);
            $(cursos).html(UnorderList2);
        },
        fail:function() {               // Show error
            failMessage(courses, cursos)       // Function which manages failure message
        }
    });
}