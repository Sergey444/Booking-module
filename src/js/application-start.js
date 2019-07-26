import getTable from "./get-table";
import getDeals from './get-deals.js';
import getTime from './get-time.js';

/**
 * 
 * @param {object} obj 
 */
const getBusyDays = (obj) => {
    obj.DEALS.forEach((deal) => {
        deal.busy = [];
        obj.DATE.TIMESTAMP.forEach((timestamp, index) => {
            if (deal.timestamp_end >= timestamp && deal.timestamp_start <= timestamp) {
                deal.busy.push(index);
            } 
        });
    });
    return obj;
}

/**
 * 
 * @param {object} obj
 */
const getTypesOfCompany = (obj) => {
    const typesOfCompany = [];
    obj.company_fields.forEach( (elem) => {
        typesOfCompany.push({
            'NAME' : elem.VALUE,
            'COMPANIES' : obj.company_list.filter( (company) => {
                        company.deals = obj.DEALS.filter((deal) => {
                            return deal.UF_CRM_1563881923 == company.ID;
                        });
                return company.UF_CRM_1561620120175 == elem.ID;
            })
        });
    });
    return typesOfCompany;
}



/**
 * 
 * @param {object} obj
 */
export default (obj) => {

    getDeals(obj).then((deals) => {
        obj['DEALS'] = deals;
        obj['DATE'] = getTime(obj.MONTH_COUNTER);
        obj['TYPES_OF_COMPANY'] = getTypesOfCompany(obj); 

        data = getBusyDays(obj);
        const content = getTable(data); 

        document.querySelector("#table").innerHTML = content;
        console.log(data);   
    });
}

