$('.select_user').change(function() {
    var is_checked = false;
    if($(this).is(":checked")) {
        is_checked = true;
        //alert($(this).attr("id"));
    }else {
        is_checked = false;
    }
    var id = $(this).attr("id");
    var formData = new FormData;
    formData.append('id', id);
    formData.append('is_checked', is_checked);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'click_checkbox_user',
        dataType : 'html',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success:function(response) {
            //console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
            //console.log('error');
            //console.log(JSON.stringify(jqXHR));
            //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
});