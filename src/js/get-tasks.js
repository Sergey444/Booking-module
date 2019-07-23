/**
 * @param {integer}
 */
const getStartDate = (month) => {
    const  date = new Date();
           date.setMonth(date.getMonth() + month - 1); 
           date.setDate(1);  
    return date;
}

/**
 * @param {object}
 */
export default (obj) => {
    
    return new Promise ( (resolve) => {	
        BX24.callMethod(
            'tasks.task.list', 
            {'filter': {'>START_DATE_PLAN': getStartDate(obj.MONTH_COUNTER), '!UF_CRM_TASK': false}, 'select': [ "*", "UF_*",  ] }, 
           
            function(res){
                const tasks = res.answer.result.tasks.filter( (task) => task.ufCrmTask[1] );

                tasks.forEach((task) => {
                    // Получаем сделку привязанную к компании 
                    task.deal_id = task.ufCrmTask[1] || false;
                    if (task.deal_id) {
                        task.deal_id = Number(task.deal_id.match(/[0-9]$/g));
                    }
                    task.timestamp_start = +new Date(task.startDatePlan); 
                    task.timestamp_end = +new Date(task.deadline);
                });
                
                return resolve( tasks );
            }
        );
    });
}