import { btnRepository, btnLink, gitHubIcon } from './htmlVariable.js';

// THIS FUNCTION COLLECTS THE DATA FROM THE PROJECT JSON FILE
var portfolio = '#portfolio';
var portafolio = '#portafolio';

export function loadProjects() {
    $.getJSON('data/projects.json')
        .done( function(data) {

            var newContent = '';
            for ( var i = 0; i < data.PORTFOLIO.length; i++ ) {
                
                var projectP = data.PORTFOLIO[i];

                newContent += '<li>' + projectP.title + ': ';
                if ($('div').is(portfolio)) {
                    newContent += projectP.description;     // English version
                } else if ($('div').is(portafolio)) {
                    newContent += projectP.descripcion;     // Spanish version
                }
                newContent += '<br><a ' + btnRepository;
                newContent += 'href="' + projectP.repository + '" target="blank">';
                newContent += gitHubIcon + ' Repository</a>';
                if ( projectP.link !== null ) {
                    newContent += '<a ' + btnLink;
                    newContent += 'href="' + projectP.link + '" target="blank">Link</a></li>';
                } else {
                    newContent += '';
                }
            }

            var UnorderList = '<ul>' + newContent + '</ul>';

            $(portfolio).html(UnorderList);
            $(portafolio).html(UnorderList);

        }).fail( function() {
            $(portfolio).html('Sorry, We could not load the portfolio at the moment. Please check out later');
            $(portafolio).html('Lo sentimos, el portafalio no se encuentra disponible en estos momentos. Por favor revise más tarde');
        });
}

