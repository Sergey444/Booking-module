import getBusyDays from './get-busy-days.js';
import getTable from "./get-table";
import getTasks from './get-tasks.js';
import getDeals from './get-deals.js';

/**
 * 
 * @param {object} objCompany 
 */
const getData = (objCompany) => {

    const typesOfCompany = [];
    objCompany.company_fields.forEach( (elem) => {
        typesOfCompany.push({
            'NAME' : elem.VALUE,
            'COMPANIES' : objCompany.company_list.filter( (company) => {
                        company.tasks = objCompany.TASKS.filter((task) => {
                            return task.ufCrmTask[0] == `CO_${company.ID}`;
                        });
                return company.UF_CRM_1561620120175 == elem.ID;
            })
        });
    });
    
    return {
        'deal_place':  objCompany.deal_place,
        'company_fields' : objCompany.company_fields,
        'company_list' :  objCompany.company_list,
        'MONTH_COUNTER' : objCompany.MONTH_COUNTER,
        'TYPES_OF_COMPANY' : typesOfCompany,
        'TASKS': objCompany.TASKS,
        'DEALS': objCompany.deals
    };
}

/**
 * 
 * @param {object} objCompany 
 */
export default (objCompany) => {
    getTasks(objCompany.MONTH_COUNTER).then((tasks) => {
        objCompany['TASKS'] = tasks;
        getDeals(objCompany).then((deals) => {
            objCompany['deals'] = deals;

            data = getBusyDays( getData(objCompany) );  
            const content = getTable(data); 
            document.querySelector("#table").innerHTML = content;
        });
    });
}