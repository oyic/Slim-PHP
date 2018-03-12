jQuery(document).ready(function($) {
	var lineChart = document.getElementById('chart-line-tv-channel'),
	areaChart = document.getElementById('chart-area-tv-channel');


	if(lineChart)
	{
		lineChart.getContext('2d');
		var line = new Chart(lineChart,{
			type:'line',
			data:{
				labels:['01:00','02:00','03:00','04:00','05:00','06:00'],
				datasets: [{
		            label: "TV Viewers",
		            backgroundColor: 'transparent',
		            borderColor: 'blue',
		            data: [0, 10, 5, 2, 20, 30],
		            lineTension:0,
		        }],
		    options: {},
			}
		});
	}
	if(areaChart)
	{
		areaChart.getContext('2d');
		var area = new Chart(areaChart,{
			type:'line',
			data: {
		        datasets: [
		            {fill: 'origin'},   // 0: fill to 'origin'
		            {fill: '-1'},       // 1: fill to dataset 0
		            {fill: 1},          // 2: fill to dataset 1
		            {fill: false},      // 3: no fill
		            {fill: '-2'}        // 4: fill to dataset 2
		        ]
		    },
		    options: {
		        plugins: {
		            filler: {
		                propagate: true
		            }
		        }
		    }
		});
	}
	

});


