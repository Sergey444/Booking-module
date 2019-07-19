/**
 * 
 * @param {object} type 
 */
const getCompanyType = (type) => {
    return `<tr><td colspan="50" class="rs-type">${type.NAME}</td></tr>`;
}

/**
 * 
 * @param {object} company 
 */
const getCompanyName = (company) => {
    return  `<td>
                <a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="blank">
                    ${company.TITLE}
                </a>
            </td>
            <td class="rs-show-modal" data-id="${company.ID}">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-id="CO_${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
            </td>`;
}

/**
 * 
 * @param {object} company
 * @param {object} data
 * 
 * @return {string} 
 */
const getDaysTable = (company, data) => {

    const result = [];
    for (let i = 1; i <= data.DATE.COUNT_DAY; i++) { 
        const className = ['rs-line'];
        const index = company.tasks.findIndex((task) => task.busy[0] == i );
        const task = company.tasks[index];

        // Текущий день не занят
        if (index == -1) {result.push(`<td  class="rs-day-column">${i}</td>`); continue;}
        // Если задача с прошлого месяца
        if (i == 1 && task.timestamp_start < data.DATE.TIMESTAMP[i] / 3600 * 4 * 1000) {
            className.push('rs-line--first');
        }

        const end =  i + task.busy.length - 1;

        // Если задача закончится в следующем месяце 
        if (end == data.DATE.COUNT_DAY && task.timestamp_end > data.DATE.TIMESTAMP[end] ) {
            className.push('rs-line--last');
        }

        result.push(`<td colspan="${task.busy.length}"><a href="https://bazaivolga.bitrix24.ru/company/personal/user/1/tasks/task/view/${task.id}/" target="_blank" class="${className.join(' ')}">${i}</a></td>`);
        
        i = end;
    } 
    return result.join('');
}

const getContent = () => {
    const content = [];
    data.TYPES_OF_COMPANY.forEach((type) => {
        if (!type.COMPANIES.length) {return false ;}
            
        content.push(getCompanyType(type));
        type.COMPANIES.forEach((company) => {
            content.push(`<tr>${getCompanyName(company)} ${getDaysTable(company, data)}</tr>`);  
        });
    });
    return content;
}


export default (data) => {
    // console.log(data);
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
            ${ getContent().join('') }
        </tbody>`;
}

