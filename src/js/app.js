import $ from 'jquery';
import {parseCode, extractBody} from './code-analyzer';

$(document).ready(function () {

    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);

        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        let tableArrayData = extractBody(codeToParse);

        document.getElementById('ResultTable').innerHTML = createTable(tableArrayData);
    });
});


function createTable(tableArray) {
    var html = '<table border=\'1|1\'>';
    for (var i = 0; i < tableArray.length; i++) {
        html+='<tr>';
        html+='<td>'+tableArray[i].line+'</td>';
        html+='<td>'+tableArray[i].type+'</td>';
        html+='<td>'+tableArray[i].name+'</td>';
        html+='<td>'+tableArray[i].condition+'</td>';
        html+='<td>'+tableArray[i].value+'</td>';
        html+='</tr>';
    }
    html+='</table>';

    return html;
}

