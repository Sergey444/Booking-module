/**
 * 
 */
const getIds = (objCompany) => {
    return objCompany.TASKS.map((task) => task.deal_id);
}


/**
 * 
 */
export default (objCompany) => {
    return new Promise ((resolve) => {
        BX24.callMethod(
            "crm.deal.list",  
            { 
                order: { "STAGE_ID": "ASC" },
                filter: { "ID": getIds(objCompany)},
                select: [ "*", "UF_*" ] 	
            },function(result)  { 
                if(result.error()) {			
                    return console.error(result.error()); 	
                }		

                if(result.more()) {
                    result.next();
                } 

                return resolve(result.data());
            }
        );
    }); 
}