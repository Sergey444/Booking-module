import updateDeal from './deal-update.js';
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
 * 
 * @param {object} filter 
 */
const onUpdateDeal = (filter) => {
    updateDeal(filter).then((resolve) => {
        applicationStart(data);
        console.log(resolve);
        $('.modal').modal('hide');
    });
}

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
 * Просмотр сделки
 * 
 * @param {object} -global data
 */
$('#show-deal').on('show.bs.modal',  (evt)  => {
    const button = $(evt.relatedTarget) 
    const modal = $(evt.target);
    const deal = data.DEALS.find((element) => element.ID == button.data(`id`));
    const start = new Date(deal.timestamp_start);
    const end = new Date(deal.timestamp_end);

    const sum = parseInt(deal.UF_CRM_1561618989990) || 0;
    const prepaid = parseInt(deal.UF_CRM_1561618933585) || 0;

    console.log(deal);

    modal.find(`.modal-title`).text(deal.TITLE);
    modal.find(`[name="deal-id"]`).val(deal.ID);
    modal.find(`[name="responsible"]`).val(deal.ASSIGNED_BY_ID);
    modal.find(`#date_timepicker_deal_start`).val(formatDate(start));
    modal.find(`#date_timepicker_deal_end`).val(formatDate(end));
    modal.find(`#deal-detail`).attr(`href`, `https://bazaivolga.bitrix24.ru/crm/deal/details/${deal.ID}/`);
    modal.find(`input[name="sum-deal"]`).val(sum);
    modal.find(`input[name="prepaid-deal"]`).val(prepaid);
    modal.find(`input[name="count-people"]`).val(deal.UF_CRM_1561535444028);

    const status = data.deal_fields.map((field) => {
        const selected = deal.UF_CRM_1563514438 == field.ID ? `selected` : ``;
        return `<option value="${field.ID}" ${selected}>${field.VALUE}</option>`;
    });
    modal.find(`select[name="status-deal"]`).html(`<option value="0">Не выбран</option>${status.join('')}`) ;

});

/**
 * Форма bootstrap 4 - забронировать время
 */
$('#add-deal').on('show.bs.modal',  (evt)  => {
    const button = $(evt.relatedTarget) 
    const modal = $(evt.target);
    const companyName = button.data('company-name');

    console.log(data.deal_place);

    // modal.find('input[name="deal-name"]').val(data.deal_place.TITLE);
    modal.find('.modal-title').text(`Забронировать «${companyName}»`);
    modal.find('input[name="company-id"]').val(button.data('company-id'));
    modal.find('#date_timepicker_start').val($('#date_timepicker_find_start').val());
    modal.find('#date_timepicker_end').val($('#date_timepicker_find_end').val());
    modal.find('input[name="deal-id"]').val(data.deal_place.ID);
    // modal.find('input[name="responsible"]').val(data.deal_place.ASSIGNED_BY_ID);
    modal.find('input[name="sum-deal"]').val(data.deal_place.OPPORTUNITY);
    modal.find('input[name="prepaid-deal"]').val(data.deal_place.UF_CRM_1561618933585);
    
});

/**
 * Обновление сделки
 */
$('#rs-add-deal-form').on('submit', (evt)=> {
    evt.preventDefault();
    const form = evt.target;
    const id= form.querySelector('input[name="deal-id"]').value;
    const dateStart = form.querySelector('input[name="date-start"]').value.split('/').join('.');
    const dateEnd = form.querySelector('input[name="date-end"]').value.split('/').join('.');
  
    const filter = {
        'id': id,
        'fields' : {

            'UF_CRM_1563776654352': dateStart,
            'UF_CRM_1563776665746': dateEnd,
            'UF_CRM_1563881923': form.querySelector('input[name="company-id"]').value
        }
    }
    return onUpdateDeal(filter);
});

/**
 * Обновление сделки
 */
$('#form-deal-update').on('submit', (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const dateStart = form.querySelector('input[name="date-start"]').value.split('/').join('.');
    const dateEnd = form.querySelector('input[name="date-end"]').value.split('/').join('.');
    
    const filter = {
        'id': form.querySelector('input[name="deal-id"]').value,
        'fields': {
            'UF_CRM_1563776654352': dateStart,
            'UF_CRM_1563776665746': dateEnd
        }
    }
    return onUpdateDeal(filter);
});


