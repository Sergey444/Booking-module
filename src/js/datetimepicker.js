
$.datetimepicker.setLocale('ru');
$('#date_timepicker_find_start').datetimepicker({
    format: 'd/m/Y',
    dayOfWeekStart: 1,
    value: new Date(),
    scrollMonth: false,
    onShow: function(ct) {
        this.setOptions({
            maxDate:  $('#date_timepicker_find_end').val() ? $('#date_timepicker_find_end').val().split('/').reverse().join('/') : false
        })
    },
    timepicker: false
});
$('#date_timepicker_find_end').datetimepicker({
    format: 'd/m/Y',
    dayOfWeekStart: 1,
    value: new Date(),
    scrollMonth: false,
    onShow: function(ct) {
        this.setOptions({
            minDate: $('#date_timepicker_find_start').val() ? $('#date_timepicker_find_start').val().split('/').reverse().join('/')  : false
        })
    },
    timepicker: false,
});

$('#date_timepicker_deal_start').datetimepicker({
    format: 'd/m/Y',
    dayOfWeekStart: 1,
    value: '',
    scrollMonth: false,
    onShow: function(ct) {
        this.setOptions({ 
           
        })
    },
    timepicker: false
});
$('#date_timepicker_deal_end').datetimepicker({
    format: 'd/m/Y',
    dayOfWeekStart: 1,
    value: '',
    scrollMonth: false,
    onShow: function(ct) {
        this.setOptions({
            minDate: $('#date_timepicker_deal_start').val() ? $('#date_timepicker_deal_start').val().split('/').reverse().join('/')  : false // Странный эффект, если не reverse(), то не работает
        })
    },
    timepicker: false,
});
//----- /datetimepicker -----//