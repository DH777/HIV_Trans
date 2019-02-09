//slider
var slider = document.getElementById("slider");

var range_all_sliders = {
  'min': 0,
  'max': 1.5
};

noUiSlider.create(slider, {
  start: 0.5,
  connect: [true, false],
  behaviour: 'tap-drag',
  range: range_all_sliders,
  tooltips: true,
  format: wNumb({
    decimals: 1
  }),
});


let clusterSet = new Set();

function getCluster() {
	for (var i = 1; i <= 20; i++) {
		if (document.getElementById(i).checked) clusterSet.add("Clust" + i);
		else clusterSet.delete("Clust" + i);
	}
}

function getAll(source) {
	for (var i = 1; i <= 20; i++) {
		var box = document.getElementById(i);
		box.checked = source.checked;
	}
	getCluster();
}

var threshold = 0.5;
slider.noUiSlider.on('update', function(){
  threshold = slider.noUiSlider.get();
});

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
	var years = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < nodes.length; i++) {
		if (!clusterSet.has(nodes[i].data.cluster)) continue;
		if (nodes[i].data.nDis > threshold) continue;
		switch(nodes[i].data.dt_collected) {
			case "2010":
				years[0]++;
				break;
			case "2011":
				years[1]++;
				break;
			case "2012":
				years[2]++;
				break;
			case "2013":
				years[3]++;
				break;
			case "2014":
				years[4]++;
				break;
			case "2015":
				years[5]++;
				break;
			case "2016":
				years[6]++;
				break;
			case "2017":
				years[7]++;
				break;
			case "2018":
				years[8]++;
				break;
		}
	}

	var data = new google.visualization.arrayToDataTable([
	  ['Date Collected', 'Amount'],
	  ["2010", years[0]],
	  ["2011", years[1]],
	  ["2012", years[2]],
	  ["2013", years[3]],
	  ["2014", years[4]],
	  ["2015", years[5]],
	  ["2016", years[6]],
	  ["2017", years[7]],
	  ["2018", years[8]],
	]);

	var options = {
	  title: 'New patients by year',
	  width: 800,
	  height: 500,
	  legend: { position: 'none' },
	  bars: 'vertical', // Required for Material Bar Charts.
	  axes: {
	    x: {
	      0: { side: 'top', label: 'Amount'} // Top x-axis.
	    }
	  },
	  bar: { groupWidth: "90%" }
	};

	var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, options);
};