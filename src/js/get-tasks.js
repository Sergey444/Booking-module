export default () => {
    return new Promise ( (resolve) => {	
        BX24.callMethod(
            'tasks.task.list', 
            {'filter': {'!UF_CRM_TASK': false}, 'select': [ "*", "UF_*",  ] }, 
           
            function(res){

                res.answer.result.tasks.forEach((task) => {
                    // Получаем сделку привязанную к компании 
                    task.deal = task.ufCrmTask[1] || false;
                    task.timestamp_start = +new Date(task.startDatePlan); 
                    task.timestamp_end = +new Date(task.deadline);
                });

                return resolve(res.answer.result.tasks);
            }
        );
    });
}