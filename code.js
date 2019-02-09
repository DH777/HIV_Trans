var cy = cytoscape({
  container: document.querySelector('#cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(id)',
        'text-valign': 'center',
        'color': 'black',
        'font-size': 20,
        'text-outline-width': 0.5,
        'background-color': 'mapData(degree, 1, 40, #d8d4d0, #605b57)',
        'text-outline-color': '#999'
      })
    .selector('edge')
      .css({
        // 'curve-style': 'unbundled-bezier',
        // 'target-arrow-shape': 'triangle-backcurve',
        // 'arrow-scale': 1.8,
        // 'target-arrow-color': '#605b57',
        'line-color': '#605b57',
        'opacity': 'data(weight)'
        //'width': 'mapData(weight, 70, 100, 2, 6)'
      })
       .selector('.connect')
      .css({
        // 'curve-style': 'unbundled-bezier',
        // 'target-arrow-shape': 'triangle-backcurve',
        // 'arrow-scale': 1.8,
        // 'target-arrow-color': '#605b57',
        'line-color': 'red',
        'opacity': 'data(weight)'
        //'width': 'mapData(weight, 70, 100, 2, 6)'
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
     .selector('.highlight')
     	.css({
	     	// 'content': 'data(id)',
	      //   'text-valign': 'center',
	      //   'color': 'white',
	      //   'font-size': 5,
	        // 'text-outline-width': 5,
	      //   'background-color': 'mapData(degree, 1, 40, #d8d4d0, #605b57)',
	      //   'text-outline-color': '#999'
	        'border-width': 4,
	        'border-style': 'solid',
	        'border-color': 'black'
     	})
     .selector('.neighbor')
     	.css({
	     	// 'content': 'data(id)',
	      //   'text-valign': 'center',
	      //   'color': 'white',
	      //   'font-size': 5,
	        // 'text-outline-width': 5,
	      //   'background-color': 'mapData(degree, 1, 40, #d8d4d0, #605b57)',
	      //   'text-outline-color': '#999'
	        'border-width': 2,
	        'border-style': 'solid',
	        'border-color': 'black'
     	})
    //race_grp
    .selector('.C')
      .css({
        'background-color': 'mapData(degree, 1, 45, #90EE90, green)',
      })
    .selector('.A')
      .css({
        'background-color': 'mapData(degree, 1, 45, pink, red)',
      })
    .selector('.D')
      .css({
        'background-color': 'mapData(degree, 1, 45, #7ab4ea, blue)',
      })
    .selector('.B')
      .css({
        'background-color': 'mapData(degree, 1, 45, #ffe4b2, #ffa500)',
      })
    .selector('.E')
      .css({
        'background-color': 'mapData(degree, 1, 45, #D8BFD8, purple)',
      })
    .selector('.F')
      .css({
        'background-color': 'mapData(degree, 1, 45, #c97f7f, #631919)',
      })
    .selector('.G')
      .css({
        'background-color': 'mapData(degree, 1, 45, #f6dbb3, #c3a880)',
      })
    .selector('.H')
      .css({
        'background-color': 'mapData(degree, 1, 45, #ff99ff, #ff00ff)',
      })
    .selector('.I')
      .css({
        'background-color': 'mapData(degree, 1, 45, #ff9933, #605b57)',
      })
    .selector('.J')
      .css({
        'background-color': 'mapData(degree, 1, 45, #9494b8, #33334d)',
      })
    .selector('.K')
      .css({
        'background-color': 'mapData(degree, 1, 45, #ff6699, #990033)',
      })
    .selector('.L')
      .css({
        'background-color': 'mapData(degree, 1, 45, #33ffff, #006666)',
      })
    .selector('.M')
      .css({
        'background-color': 'mapData(degree, 1, 45, #9f9fdf,  #333399)',
      })
    .selector('.N')
      .css({
        'background-color': 'mapData(degree, 1, 45, #b3ff66, #336600)',
      })
    .selector('.faded')
      .css({
        'opacity': 0,
        'text-opacity': 0
      }),


  elements: {
    nodes: nodes,
    edges: edges
  },
  layout: {
    name: 'cose',
    padding: 10
  }
});	

var del_nodes = cy.nodes();
var del_edges = cy.edges();

var all_nodes = cy.nodes();
var all_edges = cy.edges();

function redraw() {
	cy.add(del_nodes);
	cy.add(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
}

function showAll() {
	cy.add(del_nodes);
	cy.add(del_edges);
	var layout = cy.layout({ name: 'cose' });
	layout.run();
}

function show1(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust1']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust1']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
	//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show2(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust2']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust2']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show3(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust3']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust3']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show4(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust4']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust4']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show5(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust5']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust5']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show6(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust6']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust6']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show7(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust7']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust7']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show8(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust8']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust8']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show9(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust9']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust9']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show10(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust10']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust10']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show11(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust11']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust11']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show12(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust12']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust12']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show13(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust13']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust13']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show14(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust14']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust14']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show15(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust15']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust15']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show16(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust16']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust16']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show17(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust17']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust17']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show18(buttonId) {
	document.getElementById("searchID").value = "";
	document.getElementById("title_cluster").innerHTML = buttonId;
	cy.add(del_nodes);
	cy.add(del_edges);
	del_nodes = cy.nodes().filter("node[cluster != 'Clust18']");
	del_edges = cy.edges().filter("edge[cluster != 'Clust18']");
	cy.remove(del_nodes);
	cy.remove(del_edges);
	var layout = cy.layout({ name: 'random' });
	layout.run();
		//read scrollbar
	threshold = slider.noUiSlider.get();
	cy.edges().filter(function( ele ){
	return ele.data('distance') > threshold;
	}).addClass('faded');
	cy.edges().filter(function( ele ){
	return ele.data('distance') <= threshold;
	}).removeClass('faded');
	reset();
}

function show19(buttonId) {
  document.getElementById("searchID").value = "";
  document.getElementById("title_cluster").innerHTML = buttonId;
  cy.add(del_nodes);
  cy.add(del_edges);
  del_nodes = cy.nodes().filter("node[cluster != 'Clust19']");
  del_edges = cy.edges().filter("edge[cluster != 'Clust19']");
  cy.remove(del_nodes);
  cy.remove(del_edges);
  var layout = cy.layout({ name: 'random' });
  layout.run();
    //read scrollbar
  threshold = slider.noUiSlider.get();
  cy.edges().filter(function( ele ){
  return ele.data('distance') > threshold;
  }).addClass('faded');
  cy.edges().filter(function( ele ){
  return ele.data('distance') <= threshold;
  }).removeClass('faded');
  reset();
}

function show20(buttonId) {
  document.getElementById("searchID").value = "";
  document.getElementById("title_cluster").innerHTML = buttonId;
  cy.add(del_nodes);
  cy.add(del_edges);
  del_nodes = cy.nodes().filter("node[cluster != 'Clust20']");
  del_edges = cy.edges().filter("edge[cluster != 'Clust20']");
  cy.remove(del_nodes);
  cy.remove(del_edges);
  var layout = cy.layout({ name: 'random' });
  layout.run();
    //read scrollbar
  threshold = slider.noUiSlider.get();
  cy.edges().filter(function( ele ){
  return ele.data('distance') > threshold;
  }).addClass('faded');
  cy.edges().filter(function( ele ){
  return ele.data('distance') <= threshold;
  }).removeClass('faded');
  reset();
}

var slider = document.getElementById('slider');

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
  // pips: {
  //   mode: 'range',
  //   density: 5,
  // }
});
var threshold;
slider.noUiSlider.on('update', function(){
  threshold = slider.noUiSlider.get();
  cy.edges().filter(function( ele ){
    return ele.data('distance') > threshold;
  }).addClass('faded');
  cy.edges().filter(function( ele ){
    return ele.data('distance') <= threshold;
  }).removeClass('faded');
  var curVal = document.getElementById("searchID").value;
  // if (curVal != "") search(curVal);
  var neigh_edges = cy.nodes().filter(function(ele) {
    return ele.data('id') == curVal;
  }).connectedEdges();
  cy.nodes().removeClass('neighbor');
  neigh_edges.filter(function(ele) {
    return ele.data('distance') <= threshold;
  }).connectedNodes().addClass('neighbor');
  cy.edges().removeClass('connect');
  cy.nodes().filter(function(ele) {
    return ele.data('id') == curVal;
  }).connectedEdges().addClass('connect');
  cy.nodes().filter(function(ele) {
    return ele.data('id') == curVal;
  }).removeClass('neighbor').addClass('highlight');
  cy.nodes().filter(function(ele) {
    return ele.data('id') != curVal;
  }).removeClass('highlight');
  document.getElementById("searchID").value = curVal;
});

function search(sID) {
  var searchID;
	if (sID == 0) searchID = document.getElementById("searchID").value;
  else searchID = sID;
	redraw(); 
	var neigh_edges = cy.nodes().filter(function(ele) {
		return ele.data('id') == searchID;
	}).connectedEdges();
  cy.nodes().removeClass('neighbor');
  neigh_edges.filter(function(ele) {
    return ele.data('distance') <= threshold;
  }).connectedNodes().addClass('neighbor');
  cy.edges().removeClass('connect');
	cy.nodes().filter(function(ele) {
		return ele.data('id') == searchID;
	}).connectedEdges().addClass('connect');
	cy.nodes().filter(function(ele) {
		return ele.data('id') == searchID;
	}).removeClass('neighbor').addClass('highlight');
	cy.nodes().filter(function(ele) {
		return ele.data('id') != searchID;
	}).removeClass('highlight');
	var cluster = cy.nodes().filter(function(ele) {
		return ele.data('id') == searchID;
	}).data('cluster');
	switch (cluster) {
		case 'Clust1':
			show1(searchID);
			break;
		case 'Clust2':
			show2(searchID);
			break;
		case 'Clust3':
			show3(searchID);
			break;
		case 'Clust4':
			show4(searchID);
			break;
		case 'Clust5':
			show5(searchID);
			break;
		case 'Clust6':
			show6(searchID);
			break;
		case 'Clust7':
			show7(searchID);
			break;
		case 'Clust8':
			show8(searchID);
			break;
		case 'Clust9':
			show9(searchID);
			break;
		case 'Clust10':
			show10(searchID);
			break;
		case 'Clust11':
			show11(searchID);
			break;
		case 'Clust12':
			show12(searchID);
			break;
		case 'Clust13':
			show13(searchID);
			break;
		case 'Clust14':
			show14(searchID);
			break;
		case 'Clust15':
			show15(searchID);
			break;
		case 'Clust16':
			show16(searchID);
			break;
		case 'Clust17':
			show17(searchID);
			break;
		case 'Clust18':
			show18(searchID);
			break;
   		case 'Clust19':
      		show19(searchID);
      		break;
    	case 'Clust20':
      		show20(searchID);
      		break;
	}
}
//race_grp
function showRace() {
  reset();
  toggleVisibility('Race');
  drawChart(raceData);
  cy.nodes().filter(function( ele ){
    return ele.data('race_grp') == 'Hispanic (any race)';
  }).addClass('C');
  cy.nodes().filter(function( ele ){
    return ele.data('race_grp') == 'Non-Hispanic Black';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('race_grp') == 'Non-Hispanic White';
  }).addClass('B');
  cy.nodes().filter(function( ele ){
    return ele.data('race_grp') == 'Other';
  }).addClass('D');
}

function showSexOfBirth() {
  reset();
  toggleVisibility('Sex of birth');
  drawChart(sexBirthData);
  cy.nodes().filter(function( ele ){
    return ele.data('sex_at_birth') == 'Female';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('sex_at_birth') == 'Male';
  }).addClass('D');
}

function showGender() {
  reset();
  toggleVisibility('Gender');
  drawChart(genData);
  cy.nodes().filter(function( ele ){
    return ele.data('curr_gen') == 'Female';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('curr_gen') == 'Male';
  }).addClass('D');
  cy.nodes().filter(function( ele ){
    return ele.data('curr_gen') == 'Other';
  }).addClass('C');
}

function showStatus() {
  reset();
  toggleVisibility('Diagnostic Status');
  drawChart(diaStatData);
  cy.nodes().filter(function( ele ){
    return ele.data('dx_stat') == 'Adult HIV';
  }).addClass('A');
    cy.nodes().filter(function( ele ){
    return ele.data('dx_stat') == 'Adult AIDS';
  }).addClass('B');
      cy.nodes().filter(function( ele ){
    return ele.data('dx_stat') == 'Unknown';
  }).addClass('C');
        cy.nodes().filter(function( ele ){
    return ele.data('dx_stat') == 'Perinatal HIV';
  }).addClass('D');
  cy.nodes().filter(function( ele ){
    return ele.data('dx_stat') == 'Perinatal AIDS';
  }).addClass('E');
}

function showAcute() {
  reset();
  toggleVisibility('Acute Infection');
  drawChart(acuteData);
  cy.nodes().filter(function( ele ){
    return ele.data('acute') == 'Yes';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('acute') == 'No';
  }).addClass('D');
}

function showCare() {
  reset();
  toggleVisibility('Care Status');
  drawChart(careData);
  cy.nodes().filter(function( ele ){
    return ele.data('care_status') == 'Y';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('care_status') == 'N';
  }).addClass('D');
}

function showViral() {
  reset();
  toggleVisibility('Viral Suppression');
  drawChart(viralData);
  cy.nodes().filter(function( ele ){
    return ele.data('viral_suppression') == 'Y';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('viral_suppression') == 'N';
  }).addClass('D');
}

function showTest() {
  reset();
  toggleVisibility('Test Type');
  drawChart(testData);
  cy.nodes().filter(function( ele ){
    return ele.data('test_type') == 'PR/RT/IN SEQ';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('test_type') == 'PR/RT SEQ';
  }).addClass('B');
  cy.nodes().filter(function( ele ){
    return ele.data('test_type') == 'RT SEQ';
  }).addClass('C');
}

function showTrans() {
  reset();
  toggleVisibility('Transmission Risk');
  drawChart(transData);
  cy.nodes().filter(function( ele ){
    return ele.data('trans_grp') == 'MSM';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('trans_grp') == 'IDU';
  }).addClass('B');
  cy.nodes().filter(function( ele ){
    return ele.data('trans_grp') == 'MSM/IDU';
  }).addClass('C');
  cy.nodes().filter(function( ele ){
    return ele.data('trans_grp') == 'HET';
  }).addClass('D');
  cy.nodes().filter(function( ele ){
    return ele.data('trans_grp') == 'OTHER';
  }).addClass('E');
}

function showAge() {
  reset();
  toggleVisibility('Age group at diagnosis');
  drawChart(ageData);
  cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '1';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '2';
  }).addClass('B');
    cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '3';
  }).addClass('C');
      cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '4';
  }).addClass('D');
        cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '5';
  }).addClass('E');
          cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '6';
  }).addClass('F');
            cy.nodes().filter(function( ele ){
    return ele.data('age_grp') == '7';
  }).addClass('G');
}

function showDiagnosis() {
  reset();
  toggleVisibility('Year of HIV diagnosis');
  drawChart(diaYearData);
  cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2012';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2011';
  }).addClass('B');
    cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2010';
  }).addClass('C');
      cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2009';
  }).addClass('D');
        cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2008';
  }).addClass('E');
          cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2007';
  }).addClass('F');
            cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2018';
  }).addClass('G');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2017';
  }).addClass('H');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2006';
  }).addClass('I');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2016';
  }).addClass('J');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2015';
  }).addClass('K');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2004';
  }).addClass('L');
cy.nodes().filter(function( ele ){
    return ele.data('dx_year') == '2014';
  }).addClass('M');
}

function showCollect() {
  reset();
  toggleVisibility('Dt Collected');
  drawChart(collectData);
  cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2018';
  }).addClass('A');
  cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2017';
  }).addClass('B');
    cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2016';
  }).addClass('C');
      cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2015';
  }).addClass('D');
        cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2014';
  }).addClass('E');
          cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2013';
  }).addClass('F');
            cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2012';
  }).addClass('G');
cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2011';
  }).addClass('H');
cy.nodes().filter(function( ele ){
    return ele.data('dt_collected') == '2010';
  }).addClass('I');
}

function reset() {
  visibleDivId = null;
  hideNonVisibleDivs();
  cy.nodes().removeClass('A');
  cy.nodes().removeClass('B');
  cy.nodes().removeClass('C');
  cy.nodes().removeClass('D');
  cy.nodes().removeClass('E');
  cy.nodes().removeClass('F');
  cy.nodes().removeClass('G');
  cy.nodes().removeClass('H');
  cy.nodes().removeClass('I');
  cy.nodes().removeClass('J');
  cy.nodes().removeClass('K');
  cy.nodes().removeClass('L');
  cy.nodes().removeClass('M');
  cy.nodes().removeClass('N');
}

// legend
var divs = ["Menu1", "Race", "Sex of birth", "Gender", "Year of HIV diagnosis", "Diagnostic Status", "Acute Infection", "Transmission Risk", "Care Status", "Viral Suppression", "Age group at diagnosis", "Test Type", "Dt Collected"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

// var white = 0;
// cy.nodes().forEach(function(ele){
// 	if (ele.data('weight') = 0.1) white++;
// });
var raceData = [
    ['Label', 'Amount'],
['Non-Hispanic Black',229],
['Non-Hispanic White',76],
['Hispanic (any race)',67],
['Other',9],
  ];
var genData = [
    ['Label', 'Amount'],
    ['Female',27],
['',0],
['Other',19],
['Male',335],
  ];

  var diaStatData = [
    ['Label', 'Amount'],
    ['Adult HIV',308],
['Adult AIDS',73],
  ];
  var transData = [
    ['Label', 'Amount'],
    ['MSM',300],
    ['MSM/IDU',6],
['IDU',32],
    ['HET',40],
['OTHER',3],
  ];
  var sexBirthData = [
    ['Label', 'Amount'],
    ['Female',26],
    ['',0],
    ['',0],
['Male',355],
  ];
  var ageData = [
    ['Label', 'Amount'], //age_grp1
['age_grp1',61],
['age_grp2',78],
['age_grp3',8],
['age_grp4',59],
['age_grp5',152],
['age_grp6',23],
  ];
  var acuteData = [
    ['Label', 'Amount'],
    ['Yes',15],
    ['',0],
    ['',0],
['No',366],
  ];
  var diaYearData = [
    ['Label', 'Amount'],
['2012',41],
['2011',30],
['2010',32],
['2009',15],
['2008',9],
['2007',19],
['2018',4],
['2017',43],
['2006',2],
['2016',62],
['2015',43],
['2004',1],
['2014',49],
['2013',31],
  ];
  var careData = [
    ['Label', 'Amount'],
['Y',250],
['',0],
['',0],
['N',131],
  ];
    var viralData = [
    ['Label', 'Amount'],
['Y',202],
['',0],
['',0],
['N',179],
  ];

  var testData = [
  ['Label', 'Amount'],
  	['PR/RT/IN SEQ',64],
['PR/RT SEQ',308],
['RT SEQ',9],
  ];

  var collectData = [
  ['Label', 'Amount'],
['2018',6],
['2017',78],
['2016',84],
['2015',54],
['2014',54],
['2013',30],
['2012',31],
['2011',18],
['2010',23],
  ];

function drawChart(selectData) {
  var data = google.visualization.arrayToDataTable(selectData);

	var options = {
	  // legend: 'none',
	  // pieSliceText: 'label',
	  pieStartAngle: 100,
	  slices: {
	    0: {color: 'red'},
	    1: {color: '#ffa500'},
	    2: {color: 'green'},
	    3: {color: 'blue'},
	    4: {color: 'purple'},
	    5: {color: '#631919'},
	    6: {color: '#c3a880'},
	    7: {color: '#ff00ff'},
	    8: {color: '#605b57'},
	    9: {color: '#33334d'},
	    10: {color: '#990033'},
	    11: {color: '#006666'},
	    12: {color: '#333399'},
	    13: {color: '#336600'},
	  }
	};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

cy.$('node').on('tap', function(e){
  var eleID = e.target.id();
  // search(ele.id());
  var neigh_edges = cy.nodes().filter(function(ele) {
		return ele.data('id') == eleID;
	}).connectedEdges();
  cy.nodes().removeClass('neighbor');
  neigh_edges.filter(function(ele) {
    return ele.data('distance') <= threshold;
  }).connectedNodes().addClass('neighbor');
  cy.edges().removeClass('connect');
	cy.nodes().filter(function(ele) {
		return ele.data('id') == eleID;
	}).connectedEdges().addClass('connect');
	cy.nodes().filter(function(ele) {
		return ele.data('id') == eleID;
	}).removeClass('neighbor').addClass('highlight');
	cy.nodes().filter(function(ele) {
		return ele.data('id') != eleID;
	}).removeClass('highlight');
  document.getElementById('searchID').value = eleID;
});

cy.on('tap', 'node', function(e){
  var node = e.cyTarget;
  var neighborhood = node.neighborhood().add(node);

  cy.elements().addClass('faded');
  neighborhood.removeClass('faded');
});

cy.on('tap', function(e){
  if( e.cyTarget === cy ){
    cy.elements().removeClass('faded');
  }
});