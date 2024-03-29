/**
 * @return {object} 
 */
export default () => {
    return new Promise ( (resolve) => {	
        BX24.callBatch({
            get_deal_fields: ['crm.deal.fields', {}],
            get_company_fields: ['crm.company.fields', {}],
            get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],
            get_deal_place: ['crm.deal.get', { id: BX24.placement.info().options.ID }], 
        }, 
        (result) => {

            return resolve({
                'deal_place': result.get_deal_place.data(),
                'deal_fields': {
                    'UF_CRM_1563514438': result.get_deal_fields.data().UF_CRM_1563514438.items,
                    'UF_CRM_1565683410717': result.get_deal_fields.data().UF_CRM_1565683410717.items,
                    'UF_CRM_1565683470394': result.get_deal_fields.data().UF_CRM_1565683470394.items
                },
                'company_fields': result.get_company_fields.data().UF_CRM_1561620120175.items,
                'company_list':  result.get_company_list.data(),
                'MONTH_COUNTER': 0
            });

        });
    });
}

