export default () => {
        content += `<tbody>`;	
        typesOfCompany.forEach(function (type) {
            if (!type['COMPANIES'].length) {return false ;}

            content += `<tr><td colspan="50" class="rs-type">${type['NAME']}</td></tr>`;
            type['COMPANIES'].forEach(function (company) {
                content += `<tr>
                                <td><a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="blank">${company.TITLE}</a></td>
                                <td class="rs-show-modal" data-id="${company.ID}">
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
                                </td>`;

                for ( var j = 1; j <= window.dataObj['COUNT_DAY']; j++ ) {
                    // if ( dateEndPlan >= timestamp[j] && dateStart <= timestamp[j] ) {//|| dateStart > timestamp[1]) ) {
                    // 	daysForTask += '<td height="30" class="td-for-task">'+ j +'</td>';
                    // } else {
                        content += `<td height="30" class=""></td>`;
                    // }	
                }	
                content += `</tr>`;		

            });	
        });	
        content += `</tbody>`;	

        $("#table").html(content);
    }
    