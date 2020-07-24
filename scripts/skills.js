import { skillBadge } from './htmlVariable.js';
import { failMessage } from './failMessage.js';

var programming = '#programming';
var tool = '#tool';

export function loadSkills() {
    $.getJSON('data/skills.json')
    .done( function(data) {
        
        var newContent1 = '';
        for ( var i = 0; i < data.PROGRAMMING.length; i++ ) {
            
            newContent1 += '<li><span ' + skillBadge + '>';
            newContent1 += data.PROGRAMMING[i].skill;
            newContent1 += '</span></li>';
        }

        var newContent2 = '';
        for ( var i = 0; i < data.TOOL.length; i++ ) {
            
            newContent2 += '<li><span ' + skillBadge + '>';
            newContent2 += data.TOOL[i].skill;
            newContent2 += '</span></li>';
        }

        var UnorderList1 = '<ul class="list-unstyled">' + newContent1 + '</ul>';
        var UnorderList2 = '<ul class="list-unstyled">' + newContent2 + '</ul>';
        $(programming).html(UnorderList1);
        $(tool).html(UnorderList2);

    }).fail( 
        failMessage(programming, null),
        failMessage(tool, null)
    );
}