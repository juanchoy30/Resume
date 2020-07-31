// Import files
import { mainList } from './htmlVariable.js';
import { failMessage } from './failMessage.js';
import { url } from './url.js'; // Relevant variables

var idExpirience = '#expirience';
var experiencia = '#experiencia';
export function loadExpirience() {
  // Exported function
  const urlProject = url + '/api/read-expirience/';
  $.ajax({
    url: urlProject,
    type: "GET",
    beforeSend: function () {
      $(idExpirience).append('<div id="loading">Loading</div>'); // Load message

      $(experiencia).append('<div id="loading">Cargando</div>'); // Load message
    },
    complete: function () {
      // Once finished
      $('#loading').remove(); // Clear message
    },
    success: function (data) {
      // If successful
      // Message in every <li>
      let newContent = '';

      for (let i = 0; i < data.length; i++) {
        let expirienceP = data[i];

        if ($('div').is(idExpirience)) {
          // English version
          newContent += '<li><h4>' + expirienceP.title;

          if (expirienceP.company !== null) {
            newContent += ' at ' + expirienceP.company;
          } else {
            newContent += '';
          }

          newContent += ', ' + expirienceP.place + '</h4>';
          newContent += expirienceP.date + '<br>' + expirienceP.description;
        } else if ($('div').is(experiencia)) {
          // Spanish version
          newContent += '<li><h4>' + expirienceP.titulo;

          if (expirienceP.company !== null) {
            // If empty data do not add
            if ($('div').is(idExpirience)) {
              newContent += ' en ' + expirienceP.company;
            } else {
              newContent += '';
            }
          }

          newContent += ', ' + expirienceP.place + '</h4>';
          newContent += expirienceP.fecha + '<br>' + expirienceP.descripcion;
        } // Get the <li> elements inside a <ul> element


        let UnorderList = '<ul ' + mainList + '>' + newContent + '</ul>'; // Put the respective lists into the DOM

        $(idExpirience).html(UnorderList);
        $(experiencia).html(UnorderList);
      }
    },
    fail: function () {
      // Show error
      failMessage(idExpirience, experiencia); // Function which manages failure message
    }
  });
}