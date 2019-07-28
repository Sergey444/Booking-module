export default (date) => {
    const busyCompany = [];
    return new Promise((resolve) => {
        BX24.callBatch({
            first : ['crm.deal.list', { 'filter': {">=UF_CRM_1563776665746": date.start, '<=UF_CRM_1563776665746': date.end, '!UF_CRM_1563881923': false }, 'select': ["UF_CRM_1563881923"] }],
            second: ['crm.deal.list', { 'filter': {"<=UF_CRM_1563776654352": date.start, '>=UF_CRM_1563776665746': date.end, '!UF_CRM_1563881923': false }, 'select': ["UF_CRM_1563881923"] }]
        }, 
        (result) => {
            result.first.data().forEach((deal) => {
                busyCompany.push(deal.UF_CRM_1563881923);
            });  
            result.second.data().forEach((deal) => {  
                busyCompany.push(deal.UF_CRM_1563881923);
            });  
            return resolve(busyCompany);
        });
    });
}