// styles
import "./css/style.css";

// js
import "./js/datetimepicker.js";

import getCompany from './js/get-company.js';
import getBusyDays from './js/get-busy-days.js';
import getTable from "./js/get-table";
import createTask from './js/create-task.js';
import getTasks from './js/get-tasks.js';
import getDeals from './js/get-deals.js';
import updateTask from './js/task-update.js';

document.addEventListener('DOMContentLoaded', function() { 
     
    let data = {};

    /**
     * 
     * @param {boolean} next 
     */
    const changeMonth = function (next) {
        next ? data.MONTH_COUNTER++ : data.MONTH_COUNTER--;
        applicationStart(data);
    }

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
            'deal-id': `D_${form.querySelector('input[name="deal-id"]').value}`,
            'comment': form.querySelector('[name="comment"]').value
        }

        createTask(taskData).then((resolve) => {
            applicationStart(data);
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
        }
        updateTask(taskData).then((resolve) => {
            applicationStart(data);
            $('#show-task').modal('hide');
        });
    });

    /**
     * 
     * @param {object} objCompany 
     */
    const getData = (objCompany) => {
        const typesOfCompany = [];
        objCompany.company_fields.forEach( (elem) => {
            typesOfCompany.push({
                'NAME' : elem.VALUE,
                'COMPANIES' : objCompany.company_list.filter( (company) => {
                            company.tasks = objCompany.TASKS.filter((task) => {
                                return task.ufCrmTask[0] == `CO_${company.ID}`;
                            });
                    return company.UF_CRM_1561620120175 == elem.ID;
                })
            });
        });
        
        return {
            'deal_place':  objCompany.deal_place,
            'company_fields' : objCompany.company_fields,
            'company_list' :  objCompany.company_list,
            'MONTH_COUNTER' : objCompany.MONTH_COUNTER,
            'TYPES_OF_COMPANY' : typesOfCompany,
            'TASKS': objCompany.TASKS,
            'DEALS': objCompany.deals
        };
    }

    /**
     * 
     * @param {object} objCompany 
     */
    const applicationStart = (objCompany) => {
        getTasks(objCompany.MONTH_COUNTER).then((tasks) => {
            objCompany['TASKS'] = tasks;
            getDeals(objCompany).then((deals) => {
                objCompany['deals'] = deals;

                data = getBusyDays( getData(objCompany) );  
                const content = getTable(data); 
                document.querySelector("#table").innerHTML = content;
            });
        });
    }
    
    
    BX24.init(() => {
        getCompany().then( (objCompany) => {
            applicationStart(objCompany);
        });
    });
});		
