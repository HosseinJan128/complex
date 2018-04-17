<div class="modal fade" id="edit_call_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="largeModalLabel">Edit Call</h4>
            </div>
            <div class="modal-body">
                <div class="row clearfix">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <div class="form-line">
                                <input id="msisdn98" type="text" class="form-control" placeholder="" readonly value=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <div class="form-line">
                                <input id="msisdn0" type="text" class="form-control" placeholder="" readonly value=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <div class="form-line">
                                <input id="msisdnmodal" type="text" class="form-control" placeholder="" readonly value=""/>
                            </div>
                        </div>
                    </div>
                    {{--<div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-linee">
                                <button type="submit" class="btn btn-block btn-lg btn-success waves-effect">
                                    <i class="material-icons">save</i>
                                    <span>SAVE</span>
                                </button>
                            </div>
                        </div>
                    </div>--}}
                </div>
                <div class="row clearfix">
                    <div class="col-sm-4">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="firstname" type="text" class="form-control" name="firstname" value="{{old('firstname') ? old('firstname') : ''}}">
                                <label class="form-label">First Name</label>
                                <label class="error firstname"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="lastname" type="text" class="form-control" name="lastname" value="{{old('lastname') ? old('lastname') : ''}}">
                                <label class="form-label">Last Name</label>
                                <label class="error lastname"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="national_id" type="text" class="form-control" name="national_id" value="{{old('national_id') ? old('national_id') : ''}}">
                                <label class="form-label">National ID</label>
                                <label class="error national_id"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="homephone" type="text" class="form-control" name="homephone" value="{{old('homephone') ? old('homephone') : ''}}">
                                <label class="form-label">Home Phone</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="mobile" type="text" class="form-control" name="mobile" value="{{old('mobile') ? old('mobile') : ''}}">
                                <label class="form-label">Mobile Phone</label>
                                <label class="error mobile"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="postcode" type="text" class="form-control" name="postcode" value="{{old('postcode') ? old('postcode') : ''}}">
                                <label class="form-label">Postal Code</label>
                                <label class="error postcode"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input type="checkbox" id="md_checkbox_30" class="filled-in chk-col-green is_post" name="is_post"  @if(is_array(old('is_post'))) checked @endif/>
                                <label for="md_checkbox_30">Is Post</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <label for="project_name" class="label label-primary">Province</label>
                                <select id="province" class="form-control show-tick province_select" data-live-search="true" name="province">
                                    <option value="0">-- Please select --</option>
                                </select>
                                <label class="error province"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <label for="project_name" class="label label-primary">City</label>
                                <select class="form-control input-sm show-tick city_select selectpicker" data-live-search="true" name="city" id="city_select">
                                    <option id="0" value="">-- Please select --</option>
                                </select>
                                <label class="error city"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <label for="project_name" class="label label-primary">District</label>
                                <select class="form-control show-tick district_select selectpicker" data-live-search="true" name="district" id="district_select">
                                    <option id="0" value="">-- Please select --</option>
                                </select>
                                <label class="error district"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <label for="project_name" class="label label-primary">Status</label>
                                <select id="status" class="form-control status_select show-tick" name="status">
                                    <option value="0">-- Please select --</option>
                                </select>
                                <label class="error status"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-sm-12">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="address" type="text" class="form-control" name="address" value="{{old('address') ? old('address') : ''}}">
                                <label class="form-label">Address</label>
                                <label class="error address"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-sm-12">
                        <div class="form-group form-float">
                            <div class="form-line">
                                <input id="address2" type="text" class="form-control" name="address2" value="{{old('address2') ? old('address2') : ''}}">
                                <label class="form-label">Second Address</label>
                                <label class="error address2"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" id="raw_data_id" name="raw_data_id" class="raw_data_id" value="">
                <input type="hidden" id="user_id" name="user_id" class="user_id" value="">
                <input type="hidden" id="call_id" name="call_id" class="call_id" value="">
                <input type="hidden" id="city_id" name="city_id" class="city_id" value="">
                <input type="hidden" id="district_id" name="district_id" class="district_id" value="">
            </div>
            <div class="modal-footer">
                <button type="button" id="save" class="btn btn-link waves-effect">SAVE CHANGES</button>
                <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">CLOSE</button>
            </div>
        </div>
    </div>
</div>
