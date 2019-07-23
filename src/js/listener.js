import updateTask from './task-update.js';
import createTask from './create-task.js';
import changeMonth from'./change-month.js';
import applicationStart from './application-start';

/**
 * Слушатель на таблицу, для изменения месяца
 */
document.querySelector('#table').addEventListener('click', (evt)=> { 
    if (evt.target.closest('[data-name="control"]')) {
        const target = evt.target.closest('[data-name="control"]');  
        target.id == 'next' ? changeMonth(true) : changeMonth(false);
    }
});

/**
 * Форма bootstrap 4 - забронировать время
 */
$('#add-deal').on('show.bs.modal',  (evt)  => {
    const button = $(evt.relatedTarget) 
    const modal = $(evt.target);

    const companyName = button.data('company-name');
    modal.find('.modal-title').text(`Забронировать «${companyName}»`);
    modal.find('input[name="task-name"]').val(`${companyName}`);
    modal.find('input[name="responsible"]').val(`Здесь будет ответственный привязанный к сделке`);
    modal.find('input[name="company-id"]').val(button.data('company-id'));
    modal.find('#date_timepicker_start').val($('#date_timepicker_find_start').val());
    modal.find('#date_timepicker_end').val($('#date_timepicker_find_end').val());
    modal.find('input[name="deal-id"]').val(data.deal_place.ID);
    modal.find('input[name="deal-name"]').val(data.deal_place.TITLE);
    modal.find('input[name="responsible"]').val(data.deal_place.ASSIGNED_BY_ID);

});

/**
 * Создание задачи
 */
$('#rs-add-task-form').on('submit', (evt)=> {
    evt.preventDefault();
    const form = evt.target;
    const dateStart = form.querySelector('input[name="date-start"]').value.split('/').reverse().join('.');
    const dateEnd = form.querySelector('input[name="date-end"]').value.split('/').reverse().join('.');
    const taskData = {
        'date-start': dateStart,
        'date-end': dateEnd,
        'task-name' : form.querySelector('input[name="task-name"]').value,
        'responsible': form.querySelector('input[name="responsible"]').value,
        'company-id': form.querySelector('input[name="company-id"]').value,
        'crm-deal-id': `D_${form.querySelector('input[name="deal-id"]').value}`,
        'deal-id': form.querySelector('input[name="deal-id"]').value,
        'comment': form.querySelector('[name="comment"]').value
    }

    createTask(taskData).then((resolve) => {
        applicationStart(data);
        console.log(resolve);
        $('#add-deal').modal('hide');
    });
});

/**
 * 
 * @param {object} date 
 * @return {string} 
 */
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1) ).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
}

/**
 * Просмотр задачи
 */
$('#show-task').on('show.bs.modal',  (evt)  => {

    const button = $(evt.relatedTarget) 
    const modal = $(evt.target);
    const task = data.TASKS.find((element) => element.id == button.data(`id`));
    const start = new Date(task.timestamp_start);
    const end = new Date(task.timestamp_end);

    modal.find(`.modal-title`).text(task.title);
    modal.find(`[name="task-id"]`).val(task.id);
    modal.find(`[name="responsible"]`).val(task.responsible.name);
    modal.find(`#date_timepicker_task_start`).val(formatDate(start));
    modal.find(`#date_timepicker_task_end`).val(formatDate(end));
    modal.find(`#task-detail`).attr(`href`, `https://bazaivolga.bitrix24.ru/company/personal/user/1/tasks/task/view/${task.id}/`);
    modal.find('input[name="deal-id"]').val(task.deal.ID);

    if (task.deal) {
        modal.find(`#deal`).html(`<a href="https://bazaivolga.bitrix24.ru/crm/deal/details/${task.deal_id}/" target="_blank">${task.deal.TITLE}</a>`);
    } else {
        modal.find(`#deal`).text('К задаче не привязана сделка');
    }
});

$('#form-task-update').on('submit', (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const dateStart = form.querySelector('input[name="date-start"]').value.split('/').reverse().join('.');
    const dateEnd = form.querySelector('input[name="date-end"]').value.split('/').reverse().join('.');
    const taskData = {
        'id': form.querySelector('input[name="task-id"]').value,
        'date-start': dateStart,
        'date-end': dateEnd,
        'deal-id': form.querySelector('input[name="deal-id"]').value
    }
    updateTask(taskData).then((resolve) => {
        applicationStart(data);
        $('#show-task').modal('hide');
    });
});
