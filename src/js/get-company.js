export default () => {
    return new Promise ( function (resolve) {	
        BX24.callBatch({
            get_company_fields: ['crm.company.fields', {}],
            get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],
        }, 
        function(result) {
            window.typesOfCompany = [];
            result.get_company_fields.data().UF_CRM_1561620120175.items.forEach(function (elem) {
                window.typesOfCompany.push({
                    'NAME' : elem.VALUE,
                    'COMPANIES' : result.get_company_list.data().filter(function (company) {
                        return company.UF_CRM_1561620120175 == elem.ID;
                    })
                });
            });

            return resolve(window.typesOfCompany);
        });
    });
}