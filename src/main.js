// styles
import "./css/style.css";

// js
import getCompany from './js/get-company.js';
import showTable from './js/show-table.js';
import getTime from './js/get-time.js';
import createDeal from './js/create-deal.js';

document.addEventListener('DOMContentLoaded', function() { 

	window.timestamp = [];
	window.d = new Date();
	window.month = 0;
    window.content = '';
    
    window.changeMonth = (direction) => {
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
    $('#add-deal').on('show.bs.modal',  (event)  => {
        const button = $(event.relatedTarget) 
        const modal = $(this);
        const companyName = button.data('company-name');

        modal.find('.modal-title').text(`Забронировать «${companyName}»`);
        modal.find('input[name="task-name"').val(`${companyName}`);
        modal.find('input[name="responsible"').val(`Здесь будет ответственный привязанный к сделке`);
        modal.find('input[name="company-id"').val(button.data('company-id'));
        // modal.find('.modal-body input').val(recipient)
    });

    /**
     * Созздание задачи
     */
    $('#rs-add-task-form').on('submit', (evt)=> {
        evt.preventDefault();
        console.log(evt);
        const form = evt.target;
        const data = {
            'date-start': form.querySelector('input[name="date-start"]').value,
            'date-end': form.querySelector('input[name="date-end"]').value,
            'task-name' : form.querySelector('input[name="task-name"]').value,
            'responsible': form.querySelector('input[name="responsible"]').value,
            'company-id': form.querySelector('input[name="company-id"]').value,
        }
        createDeal(data).then((resolve) => {
            console.log(resolve);
        });
    });

    /**
     * datetimepicker
     */
	$.datetimepicker.setLocale('ru');
	$('#date_timepicker_start').datetimepicker({
		format: 'd.m.Y',
		dayOfWeekStart: 1,
		value: new Date(),
		onShow: function(ct) {
			this.setOptions({
				// maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
			})
		},
		timepicker: false
	});
	$('#date_timepicker_end').datetimepicker({
		format: 'd.m.Y',
		dayOfWeekStart: 1,
		value: new Date(),
		onShow: function(ct) {
			this.setOptions({
				minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val()  : false,
			})
		},
		timepicker: false,
	});
    //----- /datetimepicker -----//
    
    

    BX24.init(() => {
        
        const place = BX24.placement.info();

        getCompany().then( (resolve) => {
            getTime();
            showTable();
        });
    });
});		
