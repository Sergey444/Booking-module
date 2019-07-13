
export default () => {	
    //Считаем количество дней в месяце
    Date.prototype.daysInMonth = function() {
        return 33 - new Date(this.getFullYear(), this.getMonth() + month, 33).getDate();
    };

    var  countDay = new Date().daysInMonth();
    var  timestamp = [];

    for (var i = 1; i <= countDay; i++) {
        timestamp.push( +new Date(d.getFullYear(), d.getMonth() + month, i)) ;
    }

    var  monthName = new Date();
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
        content += `<td height="30" class="">${j}</td>`;
    }	
    content += `</tr></thead>`;

    window.dataObj = {
        'COUNT_DAY' : countDay,
        'DATE_STRING' : monthName,
        'TIMESTAMP' : timestamp
    }
}