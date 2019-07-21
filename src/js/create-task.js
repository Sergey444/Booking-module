/**
 * @param {object}
 */
export default (taskData) => {
    return new Promise ( function (resolve) {	
        BX24.callBatch({
            task_add: ['tasks.task.add', {'fields':{'TITLE': taskData['task-name'], 'DESCRIPTION': taskData['comment'], 'RESPONSIBLE_ID': taskData['responsible'], 'START_DATE_PLAN': taskData['date-start'], 'DEADLINE': taskData['date-end'], 'UF_CRM_TASK' : [taskData['company-id'], taskData['deal-id']] }}],
        }, function (result) {
            return resolve(result);
        });
    });
}

