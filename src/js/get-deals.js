const getStartDate = (month) => {
    const  date = new Date();
           date.setMonth(date.getMonth() + month - 1); 
           date.setDate(1);  
    return date;
}


/**
 * 
 * 
 * UF_CRM_1563776654352 - date_start
 * UF_CRM_1563776665746 - date_end
 * UF_CRM_1563881923 - object
 */
export default (obj) => {
    let deals = [];
    return new Promise ((resolve) => {
        BX24.callMethod(
            "crm.deal.list",  
            { 
                order: { "STAGE_ID": "ASC" },
                filter: { ">=UF_CRM_1563776654352": getStartDate(obj.MONTH_COUNTER), '!UF_CRM_1563881923': false, },
                select: [ "*", "UF_*" ] 	
            },function(result)  { 
                if(result.error()) {
                    alert('Произошла ошибка получения сделки...');			
                    return console.error(result.error()); 	
                }	

                deals = deals.concat(result.data());
                if(result.more()) {
                   return result.next();
                } 

                deals.forEach((deal) => {
                    deal.timestamp_start = +new Date(deal.UF_CRM_1563776654352); 
                    deal.timestamp_end = +new Date(deal.UF_CRM_1563776665746);
                });
                return resolve(deals);
            }
        );
    }); 
}