$('#call_list_table').DataTable({"pageLength": 50,"scrollX": false,"scrollCollapse": false,"searching": false});
$('#first_data').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
$('#second_data').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
$('#preloader_modal').modal({backdrop: 'static', keyboard: false})
$('#preloader_modal').modal('hide');
$('#edit_call_modal').on('shown.bs.modal', function (e) {
    //if (!data) return e.preventDefault();
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
                var district =  $('.district_select').find('select');
                district.empty();
                $('.district_select').selectpicker('render');
                $('.district_select').selectpicker('refresh');
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
    $( "#save" ).click(function(e) {
        var errorList = new Array();
        //errorList[0] = 'dd';
        //alert($('#province').val());
        //alert($('.is_post').is(":checked"))
        var is_error = false;
        var status = $('#status');
        if (status.val() == 0) {
            is_error = true;
            $("label.error.status").html('لطفا یک وضعیت انتخاب نمایید');
        }
        else if (status.val() == 1) {
            $("label.error.status").html('');
            var firstName = $('#firstname');
            if (!firstName.val()) {
                is_error = true;
                errorList[0] = 'فیلد نام ضروری می باشد';
                $("label.error.firstname").html('فیلد نام ضروری می باشد');
            } else if (firstName.val().length < 3) {
                is_error = true;
                errorList[0] = 'فیلد نام باید بیشتر از دو کاراکتر باشد';
                $("label.error.firstname").html('فیلد نام باید بیشتر از دو کاراکتر باشد');
            } else {
                is_error = false;
                errorList[0] = '';
                $("label.error.firstname").html('');
            }

            var lastname = $('#lastname');
            if (!lastname.val()) {
                is_error = true;
                errorList[1] = 'فیلد نام خانوادگی ضروری می باشد';
                $("label.error.lastname").html('فیلد نام خانوادگی ضروری می باشد');
            } else if (lastname.val().length < 3) {
                is_error = true;
                errorList[1] = 'فیلد نام خانوادگی باید بیشتر از دو کاراکتر باشد';
                $("label.error.lastname").html('فیلد نام خانوادگی باید بیشتر از دو کاراکتر باشد');
            } else {
                is_error = false;
                errorList[1] = '';
                $("label.error.lastname").html('');
            }

            var national_id = $('#national_id');
            if (!$.isNumeric(national_id.val()) && national_id.val()) {
                is_error = true;
                errorList[2] = 'فیلد کد ملی باید تنها شامل عدد باشد';
                $("label.error.national_id").html('فیلد کد ملی باید تنها شامل عدد باشد');
            } else if (national_id.val().length != 10 && national_id.val()) {
                is_error = true;
                errorList[2] = 'فیلد کد ملی باید 10 کاراکتر باشد';
                $("label.error.national_id").html('فیلد کد ملی باید 10 کاراکتر باشد');
            } else {
                is_error = false;
                errorList[2] = '';
                $("label.error.national_id").html('');
            }
            var mobile = $('#mobile');
            if (!mobile.val()) {
                is_error = true;
                errorList[3] = 'فیلد موبایل ضروری می باشد';
                $("label.error.mobile").html('فیلد موبایل ضروری می باشد');
            } else if (!$.isNumeric(mobile.val())) {
                is_error = true;
                errorList[3] = 'فیلد موبایل باید تنها شامل عدد باشد';
                $("label.error.mobile").html('فیلد موبایل باید تنها شامل عدد باشد');
            } else if (mobile.val().length != 11) {
                is_error = true;
                errorList[3] = 'فیلد موبایل باید شامل 11 کاراکتر باشد';
                $("label.error.mobile").html('فیلد موبایل باید شامل 11 کاراکتر باشد');
            } else {
                is_error = false;
                errorList[3] = '';
                $("label.error.mobile").html('');
            }

            var postcode = $('#postcode');
            if (!$.isNumeric(postcode.val()) && postcode.val()) {
                is_error = true;
                errorList[4] = 'فیلد کد پستی باید تنها شامل عدد باشد';
                $("label.error.postcode").html('فیلد کد پستی باید تنها شامل عدد باشد');
            } else if (postcode.val().length != 10 && postcode.val()) {
                is_error = true;
                errorList[4] = 'فیلد کدپستی باید 10 کاراکتر باشد';
                $("label.error.postcode").html('فیلد کدپستی باید 10 کاراکتر باشد');
            } else {
                is_error = false;
                errorList[4] = '';
                $("label.error.postcode").html('');
            }

            var province = $('#province');
            if (province.val() == 0) {
                is_error = true;
                errorList[5] = 'لطفا یک استان انتخاب کنید';
                $("label.error.province").html('لطفا یک استان انتخاب کنید');
            } else {
                is_error = false;
                errorList[5] = '';
                $("label.error.province").html('');
            }

            var city = $('#city_select');
            if (city.val() == 0) {
                is_error = true;
                errorList[6] = 'لطفا یک شهر انتخاب نمایید';
                $("label.error.city").html('لطفا یک شهر انتخاب نمایید');
            } else {
                is_error = false;
                errorList[6] = '';
                $("label.error.city").html('');
            }

            var district = $('#district_select');
            if (district.val() == 0 || !district.val()) {
                is_error = true;
                errorList[7] = 'لطفا یک محله انتخاب نمایید';
                $("label.error.district").html('لطفا یک محله انتخاب نمایید');
            } else {
                is_error = false;
                errorList[7] = '';
                $("label.error.district").html('');
            }

            var address = $('#address');
            if (!address.val()) {
                is_error = true;
                errorList[8] = 'فیلد آدرس ضروری می باشد';
                $("label.error.address").html('فیلد آدرس ضروری می باشد');
            } else if (address.val().length < 10) {
                is_error = true;
                errorList[8] = 'فیلد آدرس باید بیشتر از 10 کاراکتر باشد';
                $("label.error.address").html('فیلد آدرس باید بیشتر از 10 کاراکتر باشد');
            } else {
                is_error = false;
                errorList[8] = '';
                $("label.error.address").html('');
            }

            var address2 = $('#address2');
            if (address2.val().length < 10 && address2.val()) {
                is_error = true;
                errorList[9] = 'فیلد آدرس دوم باید بیشتر از 10 کاراکتر باشد';
                $("label.error.address2").html('فیلد آدرس دوم باید بیشتر از 10 کاراکتر باشد');
            } else {
                is_error = false;
                errorList[9] = '';
                $("label.error.address2").html('');
            }
        }
        else{
            is_error = false;
            errorList = new Array();
            $("label.error").html('');
        }
        //is_error = true;
        var $erroeMessage = '';
        $.each( errorList, function( key, value ) {
            //alert( key + ": " + value );
            $erroeMessage = $erroeMessage + value;
        });
        //alert($erroeMessage);

        if($erroeMessage == ''){
            var formData = new FormData;
            formData.append('district_id', $('#district_select').val());
            formData.append('raw_data_id', $('#raw_data_id').val());
            formData.append('user_id', $('#user_id').val());
            formData.append('status_id', $('#status').val());
            formData.append('firstname', $('#firstname').val());
            formData.append('lastname', $('#lastname').val());
            formData.append('national_id', $('#national_id').val());
            formData.append('homephone', $('#homephone').val());
            formData.append('mobile', $('#mobile').val());
            formData.append('address', $('#address').val());
            formData.append('address2', $('#address2').val());
            formData.append('postcode', $('#postcode').val());
            formData.append('call_id', $('#call_id').val());
            if($('.is_post').is(":checked")){
                formData.append('is_post', 1);
            }else{
                formData.append('is_post', 0);
            }
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: 'list/call_list_edit',
                dataType : 'json',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success:function(response) {
                    //alert(response[1]['name']);
                    console.log(response);
                    $('#edit_call_modal').modal('hide');
                },
                error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                    console.log('error');
                    //console.log(JSON.stringify(jqXHR));
                    //console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
            });
        }
    });
});
$('button.edit_button').click(function(e) {
    //alert($(this).attr("id"));
    var call_id = $(this).attr("id");
    var province_id = $(this).attr("data-province_id");
    var city_id = $(this).attr("data-city_id");
    var status_id = $(this).attr("data-status_id");
    var msisdn = $(this).attr("data-msisdn");
    var formData = new FormData;
    formData.append('call_id', call_id);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'load_province_status_call',
        dataType : 'json',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success:function(response) {
            //console.log(response['province'][0]['name']);
            //alert(response['province'][0]['name']);
            var province =  $('.province_select').find('select');
            province.empty();
            province.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
            for(var i = 0; i < response['province'].length; i++) {
                $option = $('<option id=' + response['province'][i]['id'] + ' value=' + response['province'][i]['id'] + '>' + response['province'][i]['name'] + '</option>');
                if(response['province'][i]['id'] == province_id){
                    $option.attr('selected', 'selected');
                }
                province.append($option);
            }
            $('.province_select').selectpicker('render');
            $('.province_select').selectpicker('refresh');

            var status =  $('.status_select').find('select');
            status.empty();
            status.append('<option id=' + 0 + ' value=' + 0 + '>' + '-- Please select --' + '</option>');
            for(var i = 0; i < response['status'].length; i++) {
                $option = $('<option id=' + response['status'][i]['id'] + ' value=' + response['status'][i]['id'] + '>' + response['status'][i]['name'] + '</option>');
                if(response['status'][i]['id'] == status_id){
                    $option.attr('selected', 'selected');
                }
                status.append($option);
            }
            $('.status_select').selectpicker('render');
            $('.status_select').selectpicker('refresh');

            $("#msisdn98").val('98'+ msisdn);
            $("#msisdn0").val('0'+ msisdn);
            $("#msisdnmodal").val(msisdn);
            $("#firstname").val(response['call']['first_name']);
            $("#lastname").val(response['call']['last_name']);
            $("#national_id").val(response['call']['national_id']);
            $("#homephone").val(response['call']['home_phone']);
            $("#mobile").val(response['call']['mobile']);
            $("#postcode").val(response['call']['post_code']);
            if(response['call']['is_post'] == '1'){
                $('.is_post').prop('checked', true);
            }
            $("#address").val(response['call']['address']);
            $("#address2").val(response['call']['address2']);
            document.getElementById("firstname").select();
            document.getElementById("lastname").select();
            document.getElementById("national_id").select();
            document.getElementById("postcode").select();
            document.getElementById("homephone").select();
            document.getElementById("mobile").select();
            document.getElementById("address").select();
            document.getElementById("address2").select();

            $("#raw_data_id").val(response['call']['raw_data_id']);
            $("#user_id").val(response['call']['user_id']);
            $("#district_id").val(response['call']['district_id']);
            $("#call_id").val(response['call']['id']);
            $("#city_id").val(city_id);
        },
        error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
            console.log('error');
            console.log(JSON.stringify(jqXHR));
            console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
        }
    });
});
$( "#excel_button" ).click(function(e) {
    $('#preloader_modal').modal('show');
    $('#preloader_modal').modal({backdrop: 'static', keyboard: false})
    setTimeout(function(){
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
            url: 'list/excel',
            dataType : 'json',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            encode: true,
            success:function(response) {
                //alert('dddddddddt');
                e.preventDefault();  //stop the browser from following
                window.location.href = '../reports/call.List.xls';
                console.log(response);
                $('#preloader_modal').modal('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                console.log('error');
                //alert('ttttttttd');
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                $('#preloader_modal').modal('hide');
            }
        });

    },0);

});
//$('#edit_call_modal').modal({ show: true });