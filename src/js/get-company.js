export default () => {
    return new Promise ( function (resolve) {	
        BX24.callBatch({
            get_company_fields: ['crm.company.fields', {}],
            get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],
            get_task_list: ['tasks.task.list', {'filter': {'!UF_CRM_TASK': false}, 'select': [ "*", "UF_*",  ]}]
        }, 
        function(result) {
            console.log(result.get_task_list.data());

            window.typesOfCompany = [];
            result.get_company_fields.data().UF_CRM_1561620120175.items.forEach( (elem) => {
                window.typesOfCompany.push({
                    'NAME' : elem.VALUE,
                    'COMPANIES' : result.get_company_list.data().filter( (company) => company.UF_CRM_1561620120175 == elem.ID )
                });
            });

            window.objCompanyTasks = {};
            result.get_task_list.data().tasks.forEach((task)=> {
                if ( objCompanyTasks[task.ufCrmTask[0]] == undefined ) {
                    objCompanyTasks[task.ufCrmTask[0]] = [];
                }
                task.timestamp_start = +new Date(task.startDatePlan);
                task.timestamp_end = +new Date(task.deadline) - 3600 * 24;

                objCompanyTasks[task.ufCrmTask[0]].push(task);
            });

            return resolve(window.typesOfCompany);
        });
    });
}

