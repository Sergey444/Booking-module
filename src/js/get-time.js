/**
 * Считаем количество дней в месяце
 */
Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

export default (month) => {

    const days = ['вс','пн','вт','ср','чт','пт','сб'];
    const weekend = ['weekend', '','','','','','weekend'];

    const date = new Date();

    const touday = (month == 0) ? date.getDate() : ``;

    date.setDate(1);
    date.setMonth(date.getMonth() + month);

    const startWeekDay =  date.getDay();

    const countDay = date.daysInMonth();
    const timestamp = [0];

    let head = ``;
    const timeZone = Math.abs( new Date().getTimezoneOffset() ) / 60;

    for (let i = 1, j = startWeekDay; i <= countDay; i++, j++) {
        if (j == 7) {j = 0;}

        const classTouday = (i == touday) ? `touday` : ``;

        const time = +new Date(date.getFullYear(), date.getMonth(), i) + 3600 * timeZone * 1000 ;
        head += `<td  class="rs-day-column ${weekend[j]} ${classTouday}">${days[j]}</td>`;
        timestamp.push( time ) ;
    }

    return  {
                'TIME_ZONE': timeZone,
                'TOUDAY': touday,
                'WEEKEND': weekend,
                'START_WEEK_DAY': startWeekDay,
                'COUNT_DAY': countDay,
                'MONTH': date.toLocaleString('ru', {'month': 'long', 'year': 'numeric'}),
                'TIMESTAMP': timestamp,
                'HEAD': head
            }
}

