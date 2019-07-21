import getTime from './get-time.js';

/**
 * @param {array} 
 */
export default (data) => {
    
    data.DATE = getTime(data.MONTH_COUNTER);
    data.TASKS.forEach((task) => {
        if ( task.deal_id) {
            task.deal = data.DEALS.find((deal) => deal.ID == task.deal_id);
        }
        task.busy = [];
        data.DATE.TIMESTAMP.forEach((timestamp, index) => {
            // Собираем занятые дни к компаниям
            if (task.timestamp_end >= timestamp && task.timestamp_start <= timestamp) {
                task.busy.push(index);
            } 
        });
    });
    return data;
}