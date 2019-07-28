/**
 * 
 * @param {object} contact 
 */
const updateContact = (contact) => {
    BX24.callMethod(
        "crm.contact.update", 
        {  id: contact.id, fields:{ "NAME": contact.name }}, 
        (result) => {
            if(result.error()) {
                alert('Произошла ошибка обновления контакта...');
                return console.error(result.error());
            }
            return console.info(result.data());						
        }
    );	
}

/**
 * @param {object} filter
 */
export default (filter, contact = false) =>  {
    if (contact.id) { updateContact(contact); }
    return new Promise ( function (resolve) {	
        BX24.callMethod( "crm.deal.update",  filter, function(result) {
                if(result.error()) {
                    alert('Произошла ошибка обновления сделки...');
                    return console.error(result.error());			
                }
                return resolve(result);
            }
        );
    });
}