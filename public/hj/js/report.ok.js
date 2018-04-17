$('#report_ok_table').DataTable({"pageLength": 50,"scrollX": false,"scrollCollapse": false,"searching": false});
$('#first_data').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
$('#second_data').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
$( "#excel_button" ).click(function(e) {
    var first_date = $('#first_data').val();
    var second_date = $('#second_data').val();
    if(first_date >= second_date){
        alert('تاریخ اول باید کوچکتر باشد.');
    }
    var formData = new FormData;
    formData.append('first_date', first_date);
    formData.append('second_date', second_date);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'ok/excel',
        dataType : 'json',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        encode: true,
        success:function(response) {
            //alert('dddddddddt');
            e.preventDefault();  //stop the browser from following
            window.location.href = '../reports/OK.List.xls';
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
            console.log('error');
            //alert('ttttttttd');
            console.log(JSON.stringify(jqXHR));
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
});