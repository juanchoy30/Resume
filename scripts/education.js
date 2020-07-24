import { btnCertificate, mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

var education = '#academic';
var educacion = '#academico';
var courses = '#courses';
var cursos = '#cursos';

export function loadEducation() {
    $.getJSON('data/education.json')
    .done( function(data) {

        var newContent1 = '';
        for ( var i = 0; i < data.ACADEMIC.length; i++ ) {

            var educationA = data.ACADEMIC[i];

            newContent1 += '<li><h4>';
            if ($('div').is(education)) {
                newContent1 += educationA.title;     // English version
                newContent1 += '</h4><h5>' + educationA.institution + '</h5>';
                newContent1 += '<span>' + educationA.date + '</span></li>'
            } else if ($('div').is(educacion)) {
                newContent1 += educationA.titulo;     // Spanish version
                newContent1 += '</h4><h5>' + educationA.institution + '</h5>';
                newContent1 += '<span>' + educationA.fecha + '</span></li>'
            }
        }

        var newContent2 = '';
        for ( var i = 0; i < data.COURSES.length; i++ ) {

            var educationC = data.COURSES[i];

            newContent2 += '<li><h4>' + educationC.title + '</h4>';
            newContent2 += '<h5>' + educationC.institution + '</h5>';
            if ( educationC.certificate !== null ) {
                newContent2 += '<a ' + btnCertificate;
                newContent2 += ' href="' + educationC.certificate + '" target="blank">Certificate</a></li>';
            } else {
                newContent2 += '</li>';
            }
        }

        var UnorderList1 = '<ul ' + mainList + '>' + newContent1 + '</ul>';
        var UnorderList2 = '<ul ' + mainList + '>' + newContent2 + '</ul>';
        $(education).html(UnorderList1);
        $(educacion).html(UnorderList1);
        $(courses).html(UnorderList2);
        $(cursos).html(UnorderList2);

    }).fail(
        failMessage(education, educacion),
        failMessage(courses, cursos)
    );
}