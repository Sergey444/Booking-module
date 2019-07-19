export default (month) => {
    
    const date = new Date();
          date.setMonth(date.getMonth() + month); 

    /**
     * Считаем количество дней в месяце
     */
    Date.prototype.daysInMonth = function() {
        return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };

    const countDay = date.daysInMonth();
    const timestamp = [0];
    let head = '';

    for (let i = 1; i <= countDay; i++) {
        head += `<td  class="rs-day-column">${i}</td>`;
        timestamp.push( +new Date(date.getFullYear(), date.getMonth(), i) + 3600 * 2 * 1000  ) ;
    }

    return  {
                'COUNT_DAY': countDay,
                'MONTH': date.toLocaleString('ru', {'month': 'long', 'year': 'numeric'}),
                'TIMESTAMP': timestamp,
                'HEAD': head
            }    
}

 