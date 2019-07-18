export default (data) => {
    console.log(data);
    const getContent = () => {
        let content = ``;
        data.TYPES_OF_COMPANY.forEach((type) => {
            if (!type.COMPANIES.length) {return false ;}    
            content += `<tr><td colspan="50" class="rs-type">${type.NAME}</td></tr>`;
            type.COMPANIES.forEach((company) => {
                content += `
                <tr>
                    <td>
                        <a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="blank">
                            ${company.TITLE}
                        </a>
                    </td>
                    <td class="rs-show-modal" data-id="${company.ID}">
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-id="CO_${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
                    </td>
                    <table>
                    `;

                    for (let i = 1; i <= data.DATE.COUNT_DAY; i++) {
                        company.tasks.forEach((task) => {
                            if ( task.busy[0] == i ) {
                                content += `<td colspan="${task.busy.length}"><a href="https://bazaivolga.bitrix24.ru/company/personal/user/1/tasks/task/view/${task.id}/" class="rs-line"></a></td>`;
                                return i += task.busy.length ;
                            } 
                        }); 
                        content += `<td  class="rs-day-column">${i}</td>`;
                    } 

                    content += `</table>`;    
                
            });
        });
        return content;
    }
   
    return ` <thead>
            <tr>
                <td rowspan="2" colspan="2" class="rs-objects">Объекты</td>
                <td class="table__title" colspan="${data.DATE.COUNT_DAY}">
                    <a href="javascript:void(0)" onclick="changeMonth('prev')" class="btn btn--prev" id="prev"><i class="fas fa-backward"></i></a>
                    ${data.DATE.MONTH}
                    <a href="javascript:void(0)" onclick="changeMonth('next')" class="btn btn--next" id="next"><i class="fas fa-forward"></i></a>
                </td>
            </tr>
            <tr>
                ${data.DATE.HEAD}
            </tr>
        </thead>  
        <tbody>
            ${ getContent() }
        </tbody>`;
}










// rs-line--last












    
        // content = `<thead><tr>
        //     <td rowspan="2" colspan="2" class="rs-objects">Объекты</td>
        //     <td class="table__title" colspan="${countDay}">
        //         <a href="javascript:void(0)" onclick="changeMonth('prev')" class="btn btn--prev" id="prev"><i class="fas fa-backward"></i></a>
        //         ${monthName}
        //         <a href="javascript:void(0)" onclick="changeMonth('next')" class="btn btn--next" id="next"><i class="fas fa-forward"></i></a>
        //     </td>
        // </tr>`;

    //     content += `<tr>`;		

    //     for ( let j = 1; j <= countDay; j++ ) {
    //         content += `<td  class="rs-day-column">${j}</td>`;
    //     }	
    //     content += `</tr></thead>`;

        // content += `<tbody>`;	

        // typesOfCompany.forEach(function (type) {
        //     if (!type['COMPANIES'].length) {return false ;}

        //     content += `<tr><td colspan="50" class="rs-type">${type['NAME']}</td></tr>`;
        //     type['COMPANIES'].forEach(function (company) {
            
                // content += `<tr>
                //         <td><a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="blank">${company.TITLE}</a></td>
                //         <td class="rs-show-modal" data-id="${company.ID}">
                //             <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-id="CO_${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
                //         </td>`;
                
                // let arTasks = [];
                // if (window.objCompanyTasks[`CO_${company.ID}`]) {
                //     arTasks = window.objCompanyTasks[`CO_${company.ID}`].filter((task) => {
                //         return task.timestamp_end >= timestamp[0] && task.timestamp_start <= timestamp[window.dataObj['COUNT_DAY'] - 1];
                //     }).sort((a, b) => {
                //         return a.timestamp_start - b.timestamp_start;
                //     });
                // } 

                

        //     });	
        // });	
    //     content += `</tbody>`;	

    //     $("#table").html(content);
    // }
    