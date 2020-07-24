import { mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

var expirience = '#expirience';
var experiencia = '#experiencia';

export function loadExpirience() {
    $.getJSON('data/expirience.json')
    .done( function(data) {

        var newContent = '';
        for ( var i = 0; i < data.EXPIRIENCE.length; i++ ) {

            var expirienceP = data.EXPIRIENCE[i];

            if ($('div').is(expirience)) {
                newContent += '<li><h4>' + expirienceP.title;
                if ( expirienceP.company !== null ) {
                    newContent += ' at ' + expirienceP.company;
                } else {
                    newContent += '';
                }
                newContent += ', ' + expirienceP.place + '</h4>';
                newContent += expirienceP.date + '<br>' + expirienceP.description;

            } else if ($('div').is(experiencia)) {
                newContent += '<li><h4>' + expirienceP.titulo;
                if ( expirienceP.company !== null ) {
                    if ($('div').is(expirience)) {
                        newContent += ' en ' + expirienceP.company;
                } else {
                    newContent += '';
                    }
                }
            newContent += ', ' + expirienceP.place + '</h4>';
            newContent += expirienceP.fecha + '<br>' + expirienceP.descripcion;
        }

        var UnorderList = '<ul ' + mainList + '>' + newContent + '</ul>';

        $(expirience).html(UnorderList);
        $(experiencia).html(UnorderList);
    }
    }).fail( failMessage(expirience, experiencia) );
}