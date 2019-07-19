export default (data) => {
    return new Promise ( function (resolve) {	
        BX24.callBatch({
            task_add: ['tasks.task.add', {'fields':{'TITLE': data['task-name'], 'RESPONSIBLE_ID': 16, 'START_DATE_PLAN': data['date-start'], 'DEADLINE': data['date-end'], 'UF_CRM_TASK' : [data['company-id']] }}],
            // get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],
        }, function (result) {
            return resolve(result);
        });
    });
}

