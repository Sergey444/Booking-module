import applicationStart from './application-start';

/**
 * 
 * @param {boolean} next 
 */
export default (next) => {
    next ? data.MONTH_COUNTER++ : data.MONTH_COUNTER--;
    applicationStart(data);
}