export default () => {
        content += `<tbody>`;	

        typesOfCompany.forEach(function (type) {
            if (!type['COMPANIES'].length) {return false ;}

            content += `<tr><td colspan="50" class="rs-type">${type['NAME']}</td></tr>`;
            type['COMPANIES'].forEach(function (company) {
            
                content += `<tr>
                        <td><a href="https://bazaivolga.bitrix24.ru/crm/company/details/${company.ID}/" target="blank">${company.TITLE}</a></td>
                        <td class="rs-show-modal" data-id="${company.ID}">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#add-deal" data-company-id="CO_${company.ID}" data-company-name="${company.TITLE}"><i class="fas fa-user-plus"></i></a>
                        </td>`;
                
               let arTasks = [];
               if (window.objCompanyTasks[`CO_${company.ID}`]) {
                    arTasks = window.objCompanyTasks[`CO_${company.ID}`].filter((task) => {
                        return task.timestamp_end >= timestamp[0] && task.timestamp_start <= timestamp[window.dataObj['COUNT_DAY'] - 1];
                    }).sort((a, b) => {
                        return a.timestamp_start - b.timestamp_start;
                    });
               } 

                let flag_start = false;
                let count = 0;
                let todayClass = '';
                let i = 0;
                
                /**
                 * Вывод диаграммы
                 */

                 console.log(arTasks);
                for ( let j = 1; j <= window.dataObj['COUNT_DAY']; j++ ) {
                   
                    if (window.objCompanyTasks[`CO_${company.ID}`]) {
                        if (flag_start && (arTasks[i].timestamp_end <= timestamp[j] )  ) { 
                            i++;
                            
                            count++;
                            content += `<td colspan="${count}" class="td-for-task ${todayClass}"><a href="#" class="rs-line ${todayClass}"></a></td>`;
                            
                            if ( arTasks[i] && arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
                                todayClass = 'rs-touday';
                                count = 0;
                                continue;
                            }

                            count = 0;
                            todayClass = '';
                            flag_start = false;
                            continue; 
                        }

                        if ( arTasks[i] && arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
                            flag_start = true;
                        }
                        console.log(flag_start)
                        if ( flag_start && window.dataObj['COUNT_DAY'] == j ) {
                            count++;
                            if (arTasks[i].timestamp_end > timestamp[j - 1]) {
                                content +=  `<td colspan="${count}" class="td-for-task ${todayClass}"><a href="#" class="rs-line rs-line--last"></a></td>`;
                            } else {
                                content += `<td colspan="${count}" class="td-for-task ${todayClass}"><a href="#" class="rs-line"></a></td>`;
                            }
                          
                        }

                        if (flag_start) {
                            count++;
                            continue;
                        }

                        content += `<td  class="">${j}</td>`;
                    } else {
                        content += `<td  class="">${j}</td>`;
                    }
                }
                return content += `</tr>`;	
                // }

              

                // for ( var j = 1; j <= window.dataObj['COUNT_DAY']; j++ ) {

                   
                //     for (let i = 0; i < arTasks.length; i++) {
                //         if (arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
                //             content += '<td  class="td-for-task">'+ j +'</td>';
                //         } else {
                //             content += `<td  class=""></td>`;
                //         }
                //     }
                    
                    
                    
                //     // if ( dateEndPlan >= timestamp[j] && dateStart <= timestamp[j] ) {//|| dateStart > timestamp[1]) ) {
                //     // 	daysForTask += '<td  class="td-for-task">'+ j +'</td>';
                //     // } else {
                //     //     content += `<td  class=""></td>`;
                //     // }	
                // }		

            });	
        });	
        content += `</tbody>`;	

        $("#table").html(content);
    }
    