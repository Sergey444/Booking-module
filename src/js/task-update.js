export default (data) =>  {
    return new Promise ( function (resolve) {	
        BX24.callBatch({
            task_add: ['tasks.task.update', {'taskId': data.id, 'fields':{'START_DATE_PLAN': data['date-start'], 'DEADLINE': data['date-end']}},],
            deal_update: ['crm.deal.update', {'id': data['deal-id'], 'fields': {'UF_CRM_1563776654352': data['date-start'], 'UF_CRM_1563776665746': data['date-end'] }}]
        }, function (result) {
            return resolve(result);
        });
    });
}