// @codekit-prepend "jquery/jquery.js";
// @codekit-prepend "peity/jquery.peity.js"
// @codekit-prepend "bootstrap/bootstrap.bundle.js";
// @codekit-prepend "prepend/vue.js";
// @codekit-prepend "prepend/Chart.bundle.js";
// @codekit-prepend "moment/moment.js";
// @codekit-prepend "daterangepicker/daterangepicker.js";
// @codekit-prepend "charts.js";
// @codekit-prepend "prepend/custom.js";

$(document).ready(function() {
	console.log('loaded');
	$('.tv-action-icons').on('click',function(e){
		
		var target = $($(this).data('target')),
			common = $('.tv-views-chart');
			common.removeClass('show');
			target.addClass('show');

	});

	$('#toggle-nav').on('click', function(e){
		if($('.dashboard').hasClass('active')){
			$('.dashboard').removeClass('active');
			setTimeout(function(){
				reSizeBars();
			}, 500);
		}
		else
		{
			$('.dashboard').addClass('active');
			setTimeout(function(){
				reSizeBars();	
			}, 500);
		}

		
		e.preventDefault();
	});
	$('.dropdown').on('click',function(e){
		var $this = $(this);
		if($this.hasClass('open')){
			$this.removeClass('open');
		}
		else{
			$this.addClass('open');
		}
	});
	var bar = document.getElementsByClassName('bar')[0];
				
		$.fn.peity.defaults.bar = {
			delimiter: ",",
			fill: ["#4d89f9"],
			height: '100%',
			max: null,
			min: 0,
			padding: 0.1,
			width: '100%'
		}

		$.fn.peity.defaults.donut = {
			delimiter: ",",
			fill: ["#4d89f9"],
			height: '100%',
			max: null,
			min: 0,
			padding: 0.1,
			width: '100%'
		}

		$('.bar-plays').peity("bar",{
			fill: ["#ff6600"]
		});
		$('.bar-content-views').peity("bar",{
			fill: ["#666699"]
		});
		$('.bar-page-views').peity("bar",{
			fill: ["#669966"]
		});
		$('.donut-colors').peity('donut',{
			fill:['#f45f7f','#f5983e','#2b98ce','#98cd60','#999999']
		});

		$( window ).resize(function()
		{
			reSizeBars();
		});

		function reSizeBars()
		{
			$('.bar-plays').change();
			$('.bar-content-views').change();
			$('.bar-page-views').change();
		}


	
});
