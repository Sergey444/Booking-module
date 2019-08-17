/**
 * В BX24 не реализован фильтр со сложной логикой
 * Приходится делать batch запрос
 * 
 * @param {object} date
 */
export default (date) => {
    return new Promise((resolve) => {
        BX24.callBatch({
            first : ['crm.deal.list', { 'filter': { "<=UF_CRM_1563776654352": date.start, '>=UF_CRM_1563776665746': date.start, '!UF_CRM_1563881923': false }, 'select': ["UF_CRM_1563881923"] }],
            second: ['crm.deal.list', { 'filter': { "<=UF_CRM_1563776654352": date.end, '>=UF_CRM_1563776665746': date.end, '!UF_CRM_1563881923': false }, 'select': ["UF_CRM_1563881923"] }],
            third: ['crm.deal.list', { 'filter': { ">=UF_CRM_1563776654352": date.start, '<=UF_CRM_1563776665746': date.end, '!UF_CRM_1563881923': false }, 'select': ["UF_CRM_1563881923"] }],
        }, 
        (result) => {
            return resolve([...result.first.data(), ...result.second.data(), ...result.third.data()]);
        });

    });
}