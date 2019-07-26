/**
 * @param {integer} id
 */
export default (id) => {
    return new Promise((resolve) => {
        BX24.callMethod(
			"crm.contact.get", 
			{ id: id }, 
			function(result) 
			{
				if(result.error()) {
                    alert('Произошла ошибка получения контакта...');	
                    return console.error(result.error());
                }
                console.log(result.data());
                return resolve(result.data());
			}
		);	
    });
}