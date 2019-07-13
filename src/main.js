// styles
import "./css/style.css";

// js
import getCompany from './js/get-company.js';
import showTable from './js/show-table.js';
import getTime from './js/get-time.js';

document.addEventListener('DOMContentLoaded', function() { 

	window.timestamp = [];
	window.d = new Date();
	window.month = 0;
	window.content = '';

    window.changeMonth = (direction) => {
        console.log(direction);
        if (direction == 'next') {
            month++;
        } else {
            month--;
        }
        getTime();
        showTable();
    }
    
    /**
     * Форма bootstrap 4 - забронировать время
     */
    $('#add-deal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        var modal = $(this);
        modal.find('.modal-title').text(`Забронировать «${button.data('company-name')}»`)
        // modal.find('.modal-body input').val(recipient)
    })

    /**
     * datetimepicker
     */
	$.datetimepicker.setLocale('ru');
	$('#date_timepicker_start').datetimepicker({
		format: 'Y/m/d',
		dayOfWeekStart: 1,
		value: new Date(),
		onShow: function(ct) {
			this.setOptions({
				maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
			})
		},
		timepicker: false
	});
	$('#date_timepicker_end').datetimepicker({
		format: 'Y/m/d',
		dayOfWeekStart: 1,
		value: new Date(),
		onShow: function(ct) {
			this.setOptions({
				minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val() : false,
			})
		},
		timepicker: false,
	});
	//----- /datetimepicker -----//

    BX24.init(() => {
        getCompany().then( (resolve) => {
            getTime();
            showTable();
        });
    });
});		
