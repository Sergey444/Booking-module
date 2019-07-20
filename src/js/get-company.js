/**
 * @return {object} 
 */
export default () => {
    return new Promise ( (resolve) => {	
        BX24.callBatch({
            get_company_fields: ['crm.company.fields', {}],
            get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],
            // get_task_list: ['tasks.task.list', {'filter': {'!UF_CRM_TASK': false}, 'select': [ "*", "UF_*",  ]}]
        }, 

        (result) => {
            // const typesOfCompany = [];
            // result.get_company_fields.data().UF_CRM_1561620120175.items.forEach( (elem) => {
            //     typesOfCompany.push({
            //         'NAME' : elem.VALUE,
            //         'COMPANIES' : result.get_company_list.data().filter( (company) => {
            //                    company.tasks = result.get_task_list.data().tasks.filter((task) => {
            //                         return task.ufCrmTask[0] == `CO_${company.ID}`;
            //                    });
            //             return company.UF_CRM_1561620120175 == elem.ID;
            //         })
            //     });
            // });
            
            // result.get_task_list.data().tasks.forEach((task) => {
            //     task.timestamp_start = +new Date(task.startDatePlan); 
            //     task.timestamp_end = +new Date(task.deadline);
            // });
           
            // return resolve({
            //     'MONTH_COUNTER' : 0,
            //     'TYPES_OF_COMPANY' : typesOfCompany,
            //     'TASKS': result.get_task_list.data().tasks
            // });

            return resolve({
                'company_fields': result.get_company_fields.data().UF_CRM_1561620120175.items,
                'company_list':  result.get_company_list.data()
            });

        });
    });
}

