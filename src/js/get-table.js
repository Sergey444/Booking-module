/**
 * 
 * @param {object} data 
 * @param {object} deal 
 * @param {object} days 
 * @return {array}
 */
const isLong = (data, deal, days) => {
    const className = [];
     // Если задача с прошлого месяца
    if (days.start == 1 && deal.timestamp_start < data.DATE.TIMESTAMP[days.start] - 3600 * 4 * 1000) {
        className.push('rs-line--first');
    }
    // Если задача закончится в следующем месяце 
    if (days.end == data.DATE.COUNT_DAY && deal.timestamp_end > data.DATE.TIMESTAMP[days.end] ) {
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
            <td class="rs-show-modal rs-hidden" data-id="${company.ID}">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#show-deal" data-company-id="${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
            </td>`;

}

const getColor = (deal) => {
    const colors = {
        '78' : 'rs-green',
        '80' : 'rs-red',
        '82' : 'rs-grey'
    }
    return colors[deal.UF_CRM_1563514438];
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
    for (let i = 1, j = data.DATE.START_WEEK_DAY; i <= data.DATE.COUNT_DAY; i++, j++) { 
        
        if (j == 7) {j = 0;}
        // Подсветка текущего дня
        let classTouday = ``;
        if (data.DATE.TOUDAY == i) {classTouday = 'touday';}


        
        const index = company.deals.findIndex((deal) => deal.busy[0] == i );
        // Текущий день не занят
        if (index == -1) {result.push(`<td  class="rs-day-column ${data.DATE.WEEKEND[j]} ${classTouday} ">${i}</td>`); continue;}
    
        const deal = company.deals[index];
        const day = {'start': i, 'end': i + deal.busy.length - 1 };
        const interval = day.start == day.end ? day.start : `${day.start} - ${day.end}`;
      
        const color = getColor(deal);

        result.push(`<td colspan="${deal.busy.length}"><a href="javascript:void(0)" data-toggle="modal" data-target="#show-deal" data-id="${deal.ID}" class="${color} rs-line ${ isLong(data, deal, day).join(' ') }">${interval}</a></td>`);
        i = day.end;
        j = j + deal.busy.length % 7 - 1;
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
            // Для фильтра
            if (data.busy_companies ) {
                const test = data.busy_companies.some((id) => id == company.ID);
                if (test) {
                    return false;
                }
            };

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

