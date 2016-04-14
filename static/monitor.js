"use strict";

var sim_id = $('#sim-id').text();
var sim_info = null;
var start_time = null;

$.getJSON("/sim_info/" + sim_id, function(data) {
  sim_info = data;
  console.log(sim_info['started_at']);
  start_time = moment(sim_info['started_at'], "YYYY-MM-DD_HH:mm:ss");
  console.log(start_time);
  window.setTimeout(update_time_since_start, 1000);
  window.setTimeout(get_job_state, 5000);
});

function update_time_since_start()
{
  $('#run-time').text(start_time.from(moment()));
  window.setTimeout(update_time_since_start, 1000);
}

function get_job_state()
{
  var state_map = { 'waiting' : '<div class="ui grey label">Waiting</div>',
                'running' : '<div class="ui yellow label">Running</div>',
                'complete' : '<div class="ui green label">Complete</div>',
                'available' : '<div class="ui green label">Available</div>',
                'submit' : '<div class="ui orange label">Submitted</div>' };

  $.getJSON("/get_state/" + sim_id, function(state) {
    for(var tag in state) {
        $('#'+tag).empty();
        $('#'+tag).append(state_map[state[tag]]);
    }
 });
  window.setTimeout(get_job_state, 5000);
}


function retrieve_log()
{
  //$.get("/retrieve_log/" + sim_id, function(txt) {});
  //window.setTimeout(parse_log, 10000);
}
