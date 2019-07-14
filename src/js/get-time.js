export default () => {	
    //Считаем количество дней в месяце
    Date.prototype.daysInMonth = function() {
        return 33 - new Date(this.getFullYear(), this.getMonth() + month, 33).getDate();
    };

    let countDay = new Date().daysInMonth();
    window.timestamp = [];

    for (let i = 1; i <= countDay; i++) {
        timestamp.push( +new Date(d.getFullYear(), d.getMonth() + month, i)) ;
    }

    let monthName = new Date();
        monthName = new Date(monthName.getFullYear(), monthName.getMonth() + window.month, monthName.getDate());
        monthName = monthName.toLocaleString('ru', {'month': 'long', 'year': 'numeric'}) ;

    content = `<thead><tr>
                    <td rowspan="2" colspan="2" class="rs-objects">Объекты</td>
                    <td class="table__title" colspan="${countDay}">
                        <a href="javascript:void(0)" onclick="changeMonth('prev')" class="btn btn--prev" id="prev"><i class="fas fa-backward"></i></a>
                        ${monthName}
                        <a href="javascript:void(0)" onclick="changeMonth('next')" class="btn btn--next" id="next"><i class="fas fa-forward"></i></a>
                    </td>
                </tr>`;
    content += `<tr>`;			
    for ( let j = 1; j <= countDay; j++ ) {
        content += `<td  class="rs-day-column">${j}</td>`;
    }	
    content += `</tr></thead>`;

    window.dataObj = {
        'COUNT_DAY' : countDay,
        'DATE_STRING' : monthName,
        'TIMESTAMP' : timestamp
    }
}