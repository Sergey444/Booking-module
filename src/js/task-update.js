export default (data) =>  {
    return new Promise ( function (resolve) {	
        BX24.callMethod(
            'tasks.task.update', 
            {taskId: data.id, fields:{'START_DATE_PLAN': data['date-start'], 'DEADLINE': data['date-end']}}, 
            function(res){
                return resolve(res.answer.result);
            }
        );
    });
}