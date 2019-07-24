/**
 * @param {object} filter
 */
export default (filter) =>  {
    return new Promise ( function (resolve) {	
        BX24.callMethod( "crm.deal.update",  filter, function(result) {
                if(result.error()) {
                    return console.error(result.error());			
                }
                return resolve(result);
            }
        );
    });
}