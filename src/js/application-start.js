import getTable from "./get-table";
import getTasks from './get-tasks.js';
import getDeals from './get-deals.js';
import getTime from './get-time.js';


/**
 * 
 * @param {object} obj 
 */
const getBusyDays = (obj) => {
    obj.TASKS.forEach((task) => {
        if ( task.deal_id) {
            task.deal = obj.DEALS.find((deal) => deal.ID == task.deal_id);
        }
        task.busy = [];
        obj.DATE.TIMESTAMP.forEach((timestamp, index) => {
            if (task.timestamp_end >= timestamp && task.timestamp_start <= timestamp) {
                task.busy.push(index);
            } 
        });
    });
    return obj;
}

/**
 * 
 * @param {object} objCompany 
 */
const getTypesOfCompany = (obj) => {

    const typesOfCompany = [];
    obj.company_fields.forEach( (elem) => {
        typesOfCompany.push({
            'NAME' : elem.VALUE,
            'COMPANIES' : obj.company_list.filter( (company) => {
                        company.tasks = obj.TASKS.filter((task) => {
                            return task.ufCrmTask[0] == `CO_${company.ID}`;
                        });
                return company.UF_CRM_1561620120175 == elem.ID;
            })
        });
    });
    return typesOfCompany;
}

/**
 * 
 * @param {object} objCompany 
 */
export default (obj) => {
    getTasks(obj).then((tasks) => {
        obj['TASKS'] = tasks;
        getDeals(obj).then((deals) => {
            
            obj['DATE'] = getTime(obj.MONTH_COUNTER);
            obj['DEALS'] = deals;
            obj['TYPES_OF_COMPANY'] = getTypesOfCompany(obj);  
            
            data = getBusyDays(obj);

            const content = getTable(data); 
            document.querySelector("#table").innerHTML = content;

        });
    });
}

