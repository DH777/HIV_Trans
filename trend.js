google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'nodes%');
	data.addColumn('number', 'edges%');
	var threshold = 0.0;
	var nCount = 0;
	var eCount = 0;
	while (threshold < 1.5) {
		var nTotal = 0;
		var eTotal = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) nCount++;
			nTotal++;
		}
		for (var i = 0; i < edges.length; i++) {
			if (!clusterSet.has(edges[i].data.cluster)) continue;
			if (edges[i].data.distance >= threshold && edges[i].data.distance  <= threshold + 0.1) eCount++;
			eTotal++;
		}
		data.addRow([threshold + 0.1, nCount/nTotal, eCount/eTotal]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIViewer',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

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

function draw() {
	var radio = document.getElementsByName("cat");
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			switch(radio[i].value) {
				case "race":
					drawRace();
					break;
				case "age":
					drawAge();
					break;
				case "sob":
					drawSob();
					break;
				case "gender":
					drawGender();
					break;
				case "year":
					drawYear();
					break;
				case "ds":
					drawDs();
					break;
				case "ai":
					drawAi();
					break;
				case "tr":
					drawTr();
					break;
				case "cs":
					drawCs();
					break;
				case "vs":
					drawVs();
					break;
				case "dc":
					drawCollect();
					break;
				case "tt":
					drawTest();
					break;
				case "all":
					drawChart();
					break;
			}
			break;
		}
	}
}

function drawRace() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Non-Hispanic Black%');
	data.addColumn('number', 'Non-Hispanic White%');
	data.addColumn('number', 'Hispanic (any race)%');
	data.addColumn('number', 'Other%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.race_grp != "Non-Hispanic Black") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.race_grp != "Non-Hispanic White") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.race_grp != "Hispanic (any race)") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.race_grp != "Other") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawAge() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'age_grp1%');
	data.addColumn('number', 'age_grp2%');
	data.addColumn('number', 'age_grp3%');
	data.addColumn('number', 'age_grp4%');
	data.addColumn('number', 'age_grp5%');
	data.addColumn('number', 'age_grp6%');
	data.addColumn('number', 'age_grp7%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	var count6 = 0;
	var count7 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		var total5 = 0;
		var total6 = 0;
		var total7 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "1") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "2") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "3") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "4") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "5") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count5++;
			total5++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "6") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count6++;
			total6++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.age_grp != "7") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count7++;
			total7++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4, count5/total5, count6/total6, count7/total7]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawYear() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', '2012%');
	data.addColumn('number', '2011%');
	data.addColumn('number', '2010%');
	data.addColumn('number', '2009%');
	data.addColumn('number', '2008%');
	data.addColumn('number', '2007%');
	data.addColumn('number', '2018%');
	data.addColumn('number', '2017%');
	data.addColumn('number', '2006%');
	data.addColumn('number', '2016%');
	data.addColumn('number', '2015%');
	data.addColumn('number', '2004%');
	data.addColumn('number', '2014%');
	data.addColumn('number', '2013%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	var count6 = 0;
	var count7 = 0;
	var count8 = 0;
	var count9 = 0;
	var count10 = 0;
	var count11 = 0;
	var count12 = 0;
	var count13 = 0;
	var count14 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		var total5 = 0;
		var total6 = 0;
		var total7 = 0;
		var total8 = 0;
		var total9 = 0;
		var total10 = 0;
		var total11 = 0;
		var total12 = 0;
		var total13 = 0;
		var total14 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2012") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2011") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2010") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2009") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2008") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count5++;
			total5++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2007") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count6++;
			total6++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2018") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count7++;
			total7++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2017") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count8++;
			total8++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2006") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count9++;
			total9++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2016") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count10++;
			total10++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2015") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count11++;
			total11++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2004") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count12++;
			total12++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2014") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count13++;
			total13++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_year != "2013") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count14++;
			total14++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4, count5/total5, count6/total6, count7/total7, count8/total8, count9/total9, count10/total10, count11/total11, count12/total12, count13/total13, count14/total14]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        // width: '70%',
	        // height: 500,
			width: 800,
            height: 600,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawDs() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Adult HIV%');
	data.addColumn('number', 'Adult AIDS%');
	data.addColumn('number', 'Unknown%');
	data.addColumn('number', 'Perinatal HIV%');
	data.addColumn('number', 'Perinatal AIDS%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		var total5 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_stat != "Adult HIV") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_stat != "Adult AIDS") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_stat != "Unknown") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_stat != "Perinatal HIV") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dx_stat != "Perinatal AIDS") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count5++;
			total5++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4, count5/total5]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawTr() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'MSM%');
	data.addColumn('number', 'IDU%');
	data.addColumn('number', 'MSM/IDU%');
	data.addColumn('number', 'Heterosexual%');
	data.addColumn('number', 'Other%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		var total5 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.trans_grp != "MSM") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.trans_grp != "IDU") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.trans_grp != "MSM/IDU") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.trans_grp != "HET") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.trans_grp != "OTHER") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count5++;
			total5++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4, count5/total5]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawGender() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Female%');
	data.addColumn('number', 'Male%');
	data.addColumn('number', 'Other%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.curr_gen != "Female") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.curr_gen != "Male") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.curr_gen != "Other") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawSob() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Female%');
	data.addColumn('number', 'Male%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.sex_at_birth != "Female") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.sex_at_birth != "Male") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawAi() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Yes%');
	data.addColumn('number', 'No%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.acute != "Yes") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.acute != "No") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawAi() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Yes%');
	data.addColumn('number', 'No%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.acute != "Yes") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.acute != "No") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawCs() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Yes%');
	data.addColumn('number', 'No%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.care_status != "Y") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.care_status != "N") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawVs() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'Yes%');
	data.addColumn('number', 'No%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.viral_suppression != "Y") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.viral_suppression != "N") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawTest() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', 'PR/RT/IN SEQ%');
	data.addColumn('number', 'PR/RT SEQ%');
	data.addColumn('number', 'RT SEQ%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.test_type != "PR/RT/IN SEQ") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.test_type != "PR/RT SEQ") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.test_type != "RT SEQ") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawCollect() {	
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'distance');	
	data.addColumn('number', '2018%');
	data.addColumn('number', '2017%');
	data.addColumn('number', '2016%');
	data.addColumn('number', '2015%');
	data.addColumn('number', '2014%');
	data.addColumn('number', '2013%');
	data.addColumn('number', '2012%');
	data.addColumn('number', '2011%');
	data.addColumn('number', '2010%');
	var threshold = 0.0;
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	var count6 = 0;
	var count7 = 0;
	var count8 = 0;
	var count9 = 0;
	while (threshold < 1.5) {
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var total4 = 0;
		var total5 = 0;
		var total6 = 0;
		var total7 = 0;
		var total8 = 0;
		var total9 = 0;
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2018") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count1++;
			total1++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2017") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count2++;
			total2++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2016") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count3++;
			total3++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2015") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count4++;
			total4++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2014") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count5++;
			total5++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2013") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count6++;
			total6++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2012") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count7++;
			total7++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2011") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count8++;
			total8++;
		}
		for (var i = 0; i < nodes.length; i++) {
			if (!clusterSet.has(nodes[i].data.cluster)) continue;
			if (nodes[i].data.dt_collected != "2010") continue;
			if (nodes[i].data.nDis >= threshold && nodes[i].data.nDis <= threshold + 0.1) count9++;
			total9++;
		}

		data.addRow([threshold + 0.1, count1/total1, count2/total2, count3/total3, count4/total4, count5/total5, count6/total6, count7/total7, count8/total8, count9/total9]);
		threshold = threshold + 0.1;
	}

	var options = {
	        chart: {
	          title: 'HIV',
	          // subtitle: 'in millions of dollars (USD)'
	        },
	        width: '70%',
	        height: 500,
	        axes: {
	          x: {
	            0: {side: 'bottom'}
	          }
	        }
	      };

	var chart = new google.charts.Line(document.getElementById('line_top_x'));

	chart.draw(data, google.charts.Line.convertOptions(options));
}