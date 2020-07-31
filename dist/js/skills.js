// Import files
import { skillBadge } from './htmlVariable.js';
import { failMessage } from './failMessage.js';
import { url } from './url.js'; // Relevant variables

var programming = '#programming';
var tool = '#tool';
export function loadSkills() {
  // Exported function
  const urlProgramming = url + '/api/read-programming/';
  const urlTools = url + '/api/read-tools/';
  $.ajax({
    url: urlProgramming,
    type: "GET",
    beforeSend: function () {
      $(programming).append('<div id="loading">Loading</div>'); // Load message

      $(tool).append('<div id="loading">Loading</div>'); // Load message
    },
    complete: function () {
      // Once finished
      $('#loading').remove(); // Clear message
    },
    success: function (data) {
      // If successful
      // Message in every <li>
      let newContent1 = '';

      for (let i = 0; i < data.length; i++) {
        newContent1 += '<li><span ' + skillBadge + '>';
        newContent1 += data[i].skill;
        newContent1 += '</span></li>';
      } // Get the <li> elements inside a <ul> element


      let UnorderList1 = '<ul class="list-unstyled">' + newContent1 + '</ul>'; // Put the respective lists into the DOM

      $(programming).html(UnorderList1);
    },
    fail: function () {
      failMessage(programming, null);
    }
  });
  $.ajax({
    url: urlTools,
    type: "GET",
    beforeSend: function () {
      $(programming).append('<div id="loading">Loading</div>'); // Load message

      $(tool).append('<div id="loading">Loading</div>'); // Load message
    },
    complete: function () {
      // Once finished
      $('#loading').remove(); // Clear message
    },
    success: function (data) {
      // If successful
      // Message in every <li>
      let newContent2 = '';

      for (let i = 0; i < data.length; i++) {
        newContent2 += '<li><span ' + skillBadge + '>';
        newContent2 += data[i].skill;
        newContent2 += '</span></li>';
      }

      let UnorderList2 = '<ul class="list-unstyled">' + newContent2 + '</ul>';
      $(tool).html(UnorderList2);
    },
    fail: function () {
      failMessage(tool, null);
    }
  });
}