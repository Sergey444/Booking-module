// styles
import "./css/style.css";

// js
import "./js/datetimepicker.js";

import getCompany from './js/get-company.js';
import getBusyDays from './js/get-busy-days.js';
import getTable from "./js/get-table";
import createDeal from './js/create-deal.js';
import getTasks from './js/get-tasks.js';

document.addEventListener('DOMContentLoaded', function() { 

    let data = {};

    /**
     * 
     * @param {boolean} next 
     */
    const changeMonth = function (next) {
        next ? data.MONTH_COUNTER++ : data.MONTH_COUNTER--;
        
        getBusyDays(data); 
        const content = getTable(data); 
        document.querySelector("#table").innerHTML = content;
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
        // modal.find('.modal-body input').val(recipient)
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
            'deal-id': form.querySelector('input[name="deal-id"]').value
        }

        createDeal(taskData).then((resolve) => {
            console.log(resolve);
        });
    });
    
    /**
     * 
     * @param {object} date 
     * @return {string} 
     */
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = ("0" + date.getMonth()).slice(-2);
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
        modal.find(`[name="responsible"]`).val(task.responsible.name);
        modal.find(`#date_timepicker_task_start`).val(formatDate(start));
        modal.find(`#date_timepicker_task_end`).val(formatDate(end));
        modal.find(`#task-detail`).attr(`href`, `https://bazaivolga.bitrix24.ru/company/personal/user/1/tasks/task/view/${task.id}/`);

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
                            company.tasks = objCompany.task_list.filter((task) => {
                                return task.ufCrmTask[0] == `CO_${company.ID}`;
                            });
                    return company.UF_CRM_1561620120175 == elem.ID;
                })
            });
        });
        
        return {
            'MONTH_COUNTER' : 0,
            'TYPES_OF_COMPANY' : typesOfCompany,
            'TASKS': objCompany.task_list
        };
    }
    
    BX24.init(() => {

        const place = BX24.placement.info();    
        console.log(place);

        getCompany().then( (objCompany) => {
            getTasks().then((tasks) => {
                objCompany['task_list'] = tasks;

                data = getBusyDays(getData(objCompany));  
                const content = getTable(data); 

                document.querySelector("#table").innerHTML = content;
            });
        });
    });
});		
