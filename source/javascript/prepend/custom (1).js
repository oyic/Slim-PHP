jQuery(document).ready(function($) {

// EXPAND GRAPHS
$('.expandizize').on('click',function(e){
	e.preventDefault();
	
	var target = $(this).parents('.expandable').toggle();
		//target.addClass('current');
});

// get graph sample json
	$.getJSON('/data/graph.json', function(r){
		// r.rec is the json record
		var highTotal = getHighest(r.rec,'total');
		$.each(r.rec,function(key,val){
			tr = $('<tr />');
			tr.append($('<td />',{
				class:'time',
				text:val.time,
				})
			);
			tr.append($('<td>',{
				class:'unique-viewers',
				text:val.unique,
				})
			);

			
			progress = $('<div />',{
				class:'progress'
			})
			// unique computation;
			
			total_per = ((val.total-val.unique)/highTotal)*100;
			unique_per = (val.unique/highTotal)*100;
	

			unique_views = $('<div />',{
				class:'progress-bar unique-viewers',
				role: 'progressbar',
				style:'width:'+unique_per+'%;background-color:#ff6525',
			}).attr({
				'aria-valuenow': val.total,
				'aria-valuemin': 0,
				'aria-valuemax':highTotal
			});
			
			total_views = $('<div />',{
				class:'progress-bar total-viewers',
				role: 'progressbar',

				style:'width:'+total_per+'%',
			}).attr({
				'aria-valuenow': val.total,
				'aria-valuemin': 0,
				'aria-valuemax':highTotal
			});
			progress.append(unique_views);
			progress.append(total_views);

			tr.append( $('<td />',{
					class:'progress-column',
					html:progress
				})
			);

			tr.append( $('<td />',{
					class:'total-viewers',
					text:val.total
				})
			);

			$('#table-viewers-bar-graph tbody').append(tr);
			
		});
	});
	function getHighest(obj,props){
		var highestValue = 0;
		for (var i=0, len = obj.length; i<len; i++) {
  			var value = Number(obj[i][props]);
		  	if (value > highestValue) {
		      	highestValue = value;
		  	}
		}
		return highestValue;
	}
	function getTotalTime(obj,props){
		var highestValue = 0;
		for (var i=0, len = obj.length; i<len; i++) {
  			var value = Number(obj[i][props]);
		  	if (value > highestValue) {
		      	highestValue = value;
		  	}
		}
		return highestValue;
	}
	// SELECT TIME BOX
	$('select[name=time-start]').append(function(){
		var opt='';
		for (var i = 1 ; i <= 24; i++) {
			opt += "<option value= "+ i + " >"+niceTime(i)+"</option>";
		}
		return opt;
	})
	$('select[name=time-end]').append(function(){
		var opt='';
		for (var i = 2 ; i <= 24; i++) {
			opt += "<option value= "+ i + " >"+niceTime(i)+"</option>";
		}
		return opt;
	})
	function zeroPad(places,num) {
	  var zero = places - num.toString().length + 1;
	  return Array(+(zero > 0 && zero)).join("0") + num;
	}

	$('select[name=time-start]').on('change', function(){
		var selected = $(this).val(), end = $('select[name=time-end]');
			
			starting = parseInt(selected) + 1;
			ending = 24;
			
			if(selected==24){
				starting=1;
				ending=23;
	}

			
		
		end.find('option').remove();


		for(i=starting;i<=ending;i++){
	
			end.append(function(){
				
				return "<option value= "+ i + " >"+niceTime(i)+"</option>";
				
			});
		}
		
	});

	function niceTime(time){
		if(time==12){
			return '12 NN';
		}
		if(time==24){
			return '12 MN';
		}
		if(time<12){
			return zeroPad(2,time)+'AM';
		}
		if(time>12){
			return zeroPad(2,time-12)+'PM';
		}
	}
	// date range picker
	var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
		
});