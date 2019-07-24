export default (month) => {
    
    const days = ['вс', 'пн','вт','ср','чт','пт','сб'];
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
    let head = ``;

    for (let i = 1; i <= countDay; i++) {
        const time = +new Date(date.getFullYear(), date.getMonth(), i) + 3600 * 5 * 1000 ; // Временная зона +5 часов
        head += `<td  class="rs-day-column">${days[new Date(time).getDay()]}</td>`;
        timestamp.push( time ) ;
    }

    return  {
                'COUNT_DAY': countDay,
                'MONTH': date.toLocaleString('ru', {'month': 'long', 'year': 'numeric'}),
                'TIMESTAMP': timestamp,
                'HEAD': head
            }    
}

 