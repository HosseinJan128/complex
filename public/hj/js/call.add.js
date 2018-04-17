var city_id = $( ".city_id" ).val();
var district_id = $( ".district_id" ).val();
//alert(city_id);
var id = $('.province_select option:selected').attr('id');
var formData = new FormData;
formData.append('id', id);
$.ajax({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    url: 'select_province',
    dataType : 'json',
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    success:function(response) {
        //console.log(response);
        //alert(response[1]['name']);
        //alert(id_city);
        var city =  $('.city_select').find('select');
        city.empty();
        city.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
        for(var i = 0; i < response.length; i++) {
            $option = $('<option id=' + response[i]['id'] + ' value=' + response[i]['id'] + '>' + response[i]['name'] + '</option>');
            if(response[i]['id'] == city_id){
                $option.attr('selected', 'selected');
            }
            city.append($option);
        }
        $('.city_select').selectpicker('render');
        $('.city_select').selectpicker('refresh');
        var formData = new FormData;
        formData.append('id', city_id);
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: 'select_city',
            dataType : 'json',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success:function(response) {
                //console.log(response);
                //alert(response[1]['name']);
                //alert(id_city);
                var district =  $('.district_select').find('select');
                district.empty();
                district.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
                for(var i = 0; i < response.length; i++) {
                    $option = $('<option id=' + response[i]['id'] + ' value=' + response[i]['id'] + '>' + response[i]['name'] + '</option>');
                    if(response[i]['id'] == district_id){
                        $option.attr('selected', 'selected');
                    }
                    district.append($option);
                }
                $('.district_select').selectpicker('render');
                $('.district_select').selectpicker('refresh');
            },
            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                //console.log('error');
                //console.log(JSON.stringify(jqXHR));
                //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
    },
    error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
        //console.log('error');
        //console.log(JSON.stringify(jqXHR));
        //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
    }
});
$( ".province_select" ).change(function() {
    //var id = $('option:selected').attr('id');
    var city_id = $( ".city_id" ).val();
    //alert(city_id);
    var id = $('.province_select option:selected').attr('id');
    //alert(id);
    var formData = new FormData;
    formData.append('id', id);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'select_province',
        dataType : 'json',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success:function(response) {
            //console.log(response);
            //alert(response[1]['name']);
            //alert(id_city);
            var city =  $('.city_select').find('select');
            city.empty();
            city.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
            for(var i = 0; i < response.length; i++) {
                $option = $('<option id=' + response[i]['id'] + ' value=' + response[i]['id'] + '>' + response[i]['name'] + '</option>');
                if(response[i]['id'] == city_id){
                    $option.attr('selected', 'selected');
                }
                city.append($option);
            }
            $('.city_select').selectpicker('render');
            $('.city_select').selectpicker('refresh');
        },
        error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
            //console.log('error');
            //console.log(JSON.stringify(jqXHR));
            //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
});
$( ".city_select" ).change(function() {
    //var id = $('option:selected').attr('id');
    var id_city = $('.city_select option:selected').attr('id');
    var district_id = $( ".district_id" ).val();
    //alert(id_city);
    //alert(id);
    var formData = new FormData;
    formData.append('id', id_city);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'select_city',
        dataType : 'json',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success:function(response) {
            //console.log(response);
            //alert(response[1]['name']);
            //alert(id_city);
            var district =  $('.district_select').find('select');
            district.empty();
            district.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
            for(var i = 0; i < response.length; i++) {
                $option = $('<option id=' + response[i]['id'] + ' value=' + response[i]['id'] + '>' + response[i]['name'] + '</option>');
                if(response[i]['id'] == district_id){
                    $option.attr('selected', 'selected');
                }
                district.append($option);
            }
            $('.district_select').selectpicker('render');
            $('.district_select').selectpicker('refresh');
        },
        error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
            //console.log('error');
            //console.log(JSON.stringify(jqXHR));
            //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
});