/**
 * datetimepicker
 */
$.datetimepicker.setLocale('ru');
$('#date_timepicker_start').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function(ct) {
        this.setOptions({
            maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
        })
    },
    timepicker: false
});
$('#date_timepicker_end').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function(ct) {
        this.setOptions({
            minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val()  : false
        })
    },
    timepicker: false,
});

$('#date_timepicker_find_start').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function(ct) {
        this.setOptions({
            maxDate: $('#date_timepicker_find_end').val() ? $('#date_timepicker_find_end').val() : false
        })
    },
    timepicker: false
});
$('#date_timepicker_find_end').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function(ct) {
        this.setOptions({
            minDate: $('#date_timepicker_find_start').val() ? $('#date_timepicker_find_start').val()  : false
        })
    },
    timepicker: false,
});

$('#date_timepicker_deal_start').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: '',
    onShow: function(ct) {
        this.setOptions({
            maxDate: $('#date_timepicker_deal_end').val() ? $('#date_timepicker_deal_end').val() : false
        })
    },
    timepicker: false
});
$('#date_timepicker_deal_end').datetimepicker({
    format: 'Y/m/d',
    dayOfWeekStart: 1,
    value: '',
    onShow: function(ct) {
        this.setOptions({
            minDate: $('#date_timepicker_deal_start').val() ? $('#date_timepicker_deal_start').val()  : false
        })
    },
    timepicker: false,
});
//----- /datetimepicker -----//