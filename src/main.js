// styles
import "./css/style.css";

// js
import "./js/datetimepicker.js";
import './js/listener.js';
import getCompany from './js/get-company.js';
import applicationStart from './js/application-start';

document.addEventListener('DOMContentLoaded', function() { 

    window.data = {};

    BX24.init(() => {
        getCompany().then( (objCompany) => {
            applicationStart(objCompany);
        });
    });
});		
