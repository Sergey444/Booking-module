import updateDeal from './update-deal.js';
import changeMonth from'./change-month.js';
import applicationStart from './application-start.js';
import getContact from './get-contact.js';
import findFreeCompany from './find-free-company.js';


/**
 * Фильтр для занятых компаний
 */
document.querySelector('#findTasks').addEventListener('click', (evt) => {
    evt.preventDefault();
    const date = {
        start: new Date(+new Date (document.querySelector('#date_timepicker_find_start').value.split('/').reverse().join('/')) + 1000 * 3600 * data.DATE.TIME_ZONE),
        end : new Date(+new Date(document.querySelector('#date_timepicker_find_end').value.split('/').reverse().join('/')) + 1000 * 3600 * data.DATE.TIME_ZONE)
    }
    findFreeCompany(date).then((resolve) => {
        data.busy_companies = resolve.map((deal) => deal.UF_CRM_1563881923 );
        applicationStart(data);
    });
});

/**
 * Перезапуск приложения
 */
document.querySelector('#resetApp').addEventListener('click', (evt) => {
    evt.preventDefault();
    data.busy_companies = [];
    applicationStart(data);
});

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
const onUpdateDeal = (filter, contact = false) => {
    updateDeal(filter, contact).then((resolve) => {
        applicationStart(data);
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
    return `${day}/${month}/${year}`;
}

/**
 * Просмотр сделки
 *
 * @param {object} -global data
 */
$('#show-deal').on('show.bs.modal', (evt) => {
    const button = evt.relatedTarget
    let deal = {};
    let companyId = ``;

    if ( button.hasAttribute('data-company-id') ) {
        deal = data.deal_place;
        companyId = button.getAttribute('data-company-id');
    } else {
        deal = data.DEALS.find((element) => element.ID == button.getAttribute(`data-id`));
        companyId = deal.UF_CRM_1563881923;
    }

    const modal = evt.target;
    const start = deal.UF_CRM_1563776654352 ? new Date(deal.UF_CRM_1563776654352) : false;
    const end = deal.UF_CRM_1563776665746 ? new Date(deal.UF_CRM_1563776665746) : false;
    const sum = parseInt(deal.OPPORTUNITY) || 0;
    const prepaid = parseInt(deal.UF_CRM_1561618933585) || 0;
    const contactInput = modal.querySelector(`input[name="contact-name"]`);
          contactInput.value = '';
          contactInput.setAttribute('disabled', 'disabled');

    if ( deal.CONTACT_ID ) {
        contactInput.removeAttribute('disabled');
        contactInput.setAttribute('placeholder', 'Получаю контакт...');
        getContact(deal.CONTACT_ID).then((contact) => {
           contactInput.value = contact.NAME;
           contactInput.setAttribute('placeholder', 'Не указан');
        });
    }

    modal.querySelector(`.modal-title`).textContent = deal.TITLE;
    modal.querySelector(`[name="deal-id"]`).value = deal.ID;
    modal.querySelector(`[name="contact-id"]`).value = deal.CONTACT_ID;
    modal.querySelector(`#date_timepicker_deal_start`).value = start ? formatDate(start) : document.querySelector('#date_timepicker_find_start').value ;
    modal.querySelector(`#date_timepicker_deal_end`).value = end ? formatDate(end) :  document.querySelector('#date_timepicker_find_end').value ;
    modal.querySelector(`#deal-detail`).setAttribute(`href`, `https://bazaivolga.bitrix24.ru/crm/deal/details/${deal.ID}/`);
    modal.querySelector(`input[name="sum-deal"]`).value = sum;
    modal.querySelector(`input[name="prepaid-deal"]`).value = prepaid;
    modal.querySelector(`input[name="count-people"]`).value = deal.UF_CRM_1561535444028;
    modal.querySelector('input[name="company-id"]').value = companyId;
    modal.querySelector('textarea[name="comments"]').value = deal.COMMENTS;

    const getFields = (id) => {
        return data.deal_fields[id].map((field) => {
            const selected = deal[id] == field.ID ? `selected` : ``;
            return `<option value="${field.ID}" ${selected}>${field.VALUE}</option>`;
        }).join(' ');
    }
    
    modal.querySelector(`select[name="status-deal"]`).innerHTML = `<option value="0">Не выбран</option>${getFields('UF_CRM_1563514438')}`;
    modal.querySelector(`select[name="type-of-prepaid"]`).innerHTML = `<option value="0">Не выбран</option>${getFields('UF_CRM_1565683410717')}`;
    modal.querySelector(`select[name="type-of-postpay"]`).innerHTML = `<option value="0">Не выбран</option>${getFields('UF_CRM_1565683470394')}`;
});

/**
 * Обновление сделки
 */
$('#form-deal-update').on('submit', (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const status = form.querySelector('select[name="status-deal"]').value;
    const date = {
        'start': status == 120 ? '' : form.querySelector('input[name="date-start"]').value.split('/').join('.'),
        'end': status == 120 ? '' : form.querySelector('input[name="date-end"]').value.split('/').join('.')
    }
    const company_id = form.querySelector('input[name="company-id"]').value;

    const filter = {
        'id': form.querySelector('input[name="deal-id"]').value,
        'fields': {
            'OPPORTUNITY': form.querySelector('input[name="sum-deal"]').value,
            'COMMENTS': form.querySelector('textarea[name="comments"]').value,
            'UF_CRM_1563514438': status,
            'UF_CRM_1565683410717': form.querySelector(`select[name="type-of-prepaid"]`).value,
            'UF_CRM_1565683470394': form.querySelector(`select[name="type-of-postpay"]`).value,
            'UF_CRM_1561618933585': form.querySelector('input[name="prepaid-deal"]').value,
            'UF_CRM_1561535444028': form.querySelector('input[name="count-people"]').value,
            'UF_CRM_1563776654352': date.start,
            'UF_CRM_1563776665746': date.end,
            'UF_CRM_1563881923' : company_id
        }
    }

    const contact = {
        'id': form.querySelector('input[name="contact-id"]').value,
        'name': form.querySelector('input[name="contact-name"]').value
    }
    return onUpdateDeal(filter, contact);
});





