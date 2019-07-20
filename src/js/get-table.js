/**
 * 
 * @param {object} data 
 * @param {object} task 
 * @param {object} days 
 * @return {array}
 */
const isLong = (data, task, days) => {
    const className = [];
     // Если задача с прошлого месяца
    if (days.start == 1 && task.timestamp_start < data.DATE.TIMESTAMP[days.start] - 3600 * 4 * 1000) {
        className.push('rs-line--first');
    }
    // Если задача закончится в следующем месяце 
    if (days.end == data.DATE.COUNT_DAY && task.timestamp_end > data.DATE.TIMESTAMP[days.end] ) {
        className.push('rs-line--last');
    }
    return className;
}



/**
 * 
 * @param {object}
 * @return {string}
 */
const getHead = (data) => {

    return `<tr>
                <td rowspan="2" colspan="2" class="rs-objects">Объекты</td>
                <td class="table__title" colspan="${data.DATE.COUNT_DAY}">
                    <a href="javascript:void(0)" class="btn btn--prev" data-name="control" id="prev"><i class="fas fa-backward"></i></a>
                    ${data.DATE.MONTH}
                    <a href="javascript:void(0)" class="btn btn--next" data-name="control" id="next"><i class="fas fa-forward"></i></a>
                </td>
            </tr>
            <tr>
                ${data.DATE.HEAD}
            </tr>`;
}

/**
 * 
 * @param {object} type 
 * @return {string}
 */
const getCompanyType = (type) => {
    return `<tr><td colspan="50" class="rs-type">${type.NAME}</td></tr>`;
}

/**
 * 
 * @param {object} company 
 * @return {string}
 */
const getCompanyName = (company) => {
    return  `<td>
                <a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="_blank">
                    ${company.TITLE}
                </a>
            </td>
            <td class="rs-show-modal" data-id="${company.ID}">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-id="CO_${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
            </td>`;
}

/**
 * 
 * 
 * @param {object} company
 * @param {object} data
 * @return {string} 
 */
const getDaysTable = (company, data) => {

    const result = [];
    for (let i = 1; i <= data.DATE.COUNT_DAY; i++) { 
        const index = company.tasks.findIndex((task) => task.busy[0] == i );
        // Текущий день не занят
        if (index == -1) {result.push(`<td  class="rs-day-column">${i}</td>`); continue;}
    
        const task = company.tasks[index];
        const days = {'start': i, 'end': i + task.busy.length - 1 };
        result.push(`<td colspan="${task.busy.length}"><a href="javascript:void(0)" data-toggle="modal" data-target="#show-task" data-id="${task.id}" class="rs-line ${ isLong(data, task, days).join(' ') }">${i}</a></td>`);

        //https://bazaivolga.bitrix24.ru/company/personal/user/1/tasks/task/view/${task.id}/
        i = days.end;
    } 
    return result.join('');
}

/**
 * 
 * @param {object}
 * @return {string} 
 */
const getContent = (data) => {
    const content = [];
    data.TYPES_OF_COMPANY.forEach((type) => {
        if (!type.COMPANIES.length) {return false ;}
            
        content.push(getCompanyType(type));
        type.COMPANIES.forEach((company) => {
            content.push(`<tr>${getCompanyName(company)} ${getDaysTable(company, data)}</tr>`);  
        });
    });
    return content.join('');
}

/**
 * 
 * @return {string}
 */
export default (data) => {
    return `<thead> ${ getHead(data) } </thead><tbody> ${ getContent(data) } </tbody>`;
}

