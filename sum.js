google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);

var raceData = [];
var genData = [];
var diaStatData = [];
var transData = [];
var sexBirthData = [];
var ageData = [];
var acuteData = [];
var diaYearData = [];
var careData = [];
var viralData = [];
var testData = [];
var collectData = [];

var white = 0;
var black = 0;
var hispanic = 0;
var otherRace = 0;
var age1 = 0;
var age2 = 0;
var age3 = 0;
var age4 = 0;
var age5 = 0;
var age6 = 0;
var	female = 0;
var	male = 0;
var	otherGen = 0;
var	otherTrans = 0;
var	fe = 0;
var	ma = 0;
var	ah = 0;
var	aa = 0;
var	unknown = 0;
var	ph = 0;
var	pa = 0;
var	msm = 0;
var	idu = 0;
var	mi = 0;
var	het = 0;
var	dia1 = 0;
var	dia2 = 0;
var	dia3 = 0;
var	dia4 = 0;
var	dia5 = 0;
var	dia6 = 0;
var	dia7 = 0;
var	dia8 = 0;
var	dia9 = 0;
var	dia10 = 0;
var	dia11 = 0;
var	dia12 = 0;
var	dia13 = 0;
var	dia14 = 0;
var	acuteY = 0;
var	acuteN = 0;
var	viralY = 0;
var	viralN = 0;
var	careY = 0;
var	careN = 0;
var test1 = 0;
var test2 = 0;
var test3 = 0;
var y2018 = 0;
var y2017 = 0;
var y2016 = 0;
var y2015 = 0;
var y2014 = 0;
var y2013 = 0;
var y2012 = 0;
var y2011 = 0;
var y2010 = 0;

function clearData() {
	white = 0;
	black = 0;
	hispanic = 0;
	otherRace = 0;
	age1 = 0;
	age2 = 0;
	age3 = 0;
	age4 = 0;
	age5 = 0;
	age6 = 0;
	female = 0;
	male = 0;
	otherGen = 0;
	otherTrans = 0;
	fe = 0;
	ma = 0;
	ah = 0;
	aa = 0;
	unknown = 0;
	ph = 0;
	pa = 0;
	msm = 0;
	idu = 0;
	mi = 0;
	het = 0;
	dia1 = 0;
	dia2 = 0;
	dia3 = 0;
	dia4 = 0;
	dia5 = 0;
	dia6 = 0;
	dia7 = 0;
	dia8 = 0;
	dia9 = 0;
	dia10 = 0;
	dia11 = 0;
	dia12 = 0;
	dia13 = 0;
	dia14 = 0;
	acuteY = 0;
	acuteN = 0;
	viralY = 0;
	viralN = 0;
	careY = 0;
	careN = 0;
	test1 = 0;
	test2 = 0;
	test3 = 0;
	y2018 = 0;
	y2017 = 0;
	y2016 = 0;
	y2015 = 0;
	y2014 = 0;
	y2013 = 0;
	y2012 = 0;
	y2011 = 0;
	y2010 = 0;
}

var threshold = 0;
var graphName;
function chooseData(clusterNo) {
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].data.cluster != clusterNo) continue;
		if (nodes[i].data.nDis > threshold) continue;
		switch(nodes[i].data.race_grp) {
			case 'Non-Hispanic Black':
				black++;
				break;
			case 'Non-Hispanic White':
				white++;
				break;	
			case 'Hispanic (any race)':
				hispanic++;
				break;
			case 'Other':
				otherRace++;
				break;
		}
		switch(nodes[i].data.age_grp) {
			case '1':
				age1++;
				break;
			case '2':
				age2++;
				break;
			case '3':
				age3++;
				break;
			case '4':
				age4++;
				break;
			case '5':
				age5++;
				break;
			case '6':
				age6++;
				break;
		}
		switch(nodes[i].data.curr_gen) {
			case 'Male':
				male++;
				break;
			case 'Female':
				female++;
				break;
			case 'Other':
				otherGen++;
				break;
		}
		switch(nodes[i].data.dx_stat) {
			case 'Adult HIV':
				ah++;
				break;
			case 'Adult AIDS':
				aa++;
				break;
			case 'Unknown':
				unknown++;
				break;
			case 'Perinatal HIV':
				ph++;
				break;
			case 'Perinatal AIDS':
				pa++;
				break;
		}
		switch(nodes[i].data.trans_grp) {
			case 'MSM':
				msm++;
				break;
			case 'IDU':
				idu++;
				break;
			case 'MSM/IDU':
				mi++;
				break;
			case 'HET':
				het++;
				break;
			case 'OTHER':
				otherTrans++;
				break;
		}
		switch(nodes[i].data.sex_at_birth) {
			case 'Female':
				fe++;
				break;
			case 'Male':
				ma++;
				break;
		}
		switch(nodes[i].data.acute) {
			case 'Yes':
				acuteY++;
				break;
			case 'No':
				acuteN++;
				break;
		}
		switch(nodes[i].data.dx_year) {
			case '2012':
				dia1++;
				break;
			case '2011':
				dia2++;
				break;
			case '2010':
				dia3++;
				break;
			case '2009':
				dia4++;
				break;
			case '2008':
				dia5++;
				break;
			case '2007':
				dia6++;
				break;
			case '2018':
				dia7++;
				break;
			case '2017':
				dia8++;
				break;
			case '2006':
				dia9++;
				break;
			case '2016':
				dia10++;
				break;
			case '2015':
				dia11++;
				break;
			case '2004':
				dia12++;
				break;
			case '2014':
				dia13++;
				break;
			case '2013':
				dia14++;
				break;
		}
		switch(nodes[i].data.care_status) {
			case 'Y':
				careY++;
				break;
			case 'N':
				careN++;
				break;
		}
		switch(nodes[i].data.viral_suppression) {
			case 'Y':
				viralY++;
				break;
			case 'N':
				viralN++;
				break;
		}
		switch(nodes[i].data.test_type) {
			case 'PR/RT/IN SEQ':
				test1++;
				break;
			case 'PR/RT SEQ':
				test2++;
				break;
			case 'RT SEQ':
				test3++;
				break;
		}
		switch(nodes[i].data.dt_collected) {
			case '2018':
				y2018++;
				break;
			case '2017':
				y2017++;
				break;
			case '2016':
				y2016++;
				break;
			case '2015':
				y2015++;
				break;
			case '2014':
				y2014++;
				break;
			case '2013':
				y2013++;
				break;
			case '2012':
				y2012++;
				break;
			case '2011':
				y2011++;
				break;
			case '2010':
				y2010++;
				break;
		}
	}

raceData = [
	    ['Label', 'Amount'],
	['Non-Hispanic Black',black],
	['Non-Hispanic White',white],
	['Hispanic (any race)',hispanic],
	['Other',otherRace],
	  ];
genData = [
	    ['Label', 'Amount'],
	    ['Female',female],
	['',0],
	['Other',otherGen],
	['Male',male],
	  ];

diaStatData = [
	    ['Label', 'Amount'],
	    ['Adult HIV',ah],
	['Adult AIDS',aa],
	['Unknown',unknown],
	['Perinatal HIV',ph],
	['Perinatal AIDS',pa],
	  ];
transData = [
	    ['Label', 'Amount'],
	    ['MSM',msm],
	    ['IDU',idu],
	    ['MSM/IDU',mi],
	    ['HET',het],
	['OTHER',otherTrans],
	  ];
sexBirthData = [
	    ['Label', 'Amount'],
	    ['Female',fe],
	    ['',0],
	    ['',0],
	['Male',ma],
	  ];
ageData = [
	    ['Label', 'Amount'],
	['age_grp1',age1],
	['age_grp2',age2],
	['age_grp3',age3],
	['age_grp4',age4],
	['age_grp5',age5],
	['age_grp6',age6],
	  ];
acuteData = [
	    ['Label', 'Amount'],
	    ['Yes',acuteY],
	    ['',0],
	    ['',0],
	['No',acuteN],
	  ];
diaYearData = [
	    ['Label', 'Amount'],
['2012',dia1],
['2011',dia2],
['2010',dia3],
['2009',dia4],
['2008',dia5],
['2007',dia6],
['2018',dia7],
['2017',dia8],
['2006',dia9],
['2016',dia10],
['2015',dia11],
['2004',dia12],
['2014',dia13],
['2013',dia14],
	  ];
careData = [
	    ['Label', 'Amount'],
	['Y',careY],
	['',0],
	['',0],
	['N',careN],
	  ];
viralData = [
	    ['Label', 'Amount'],
	['Y',viralY],
	['',0],
	['',0],
	['N',viralN],
	  ];
testData = [
	    ['Label', 'Amount'],
	    ['PR/RT/IN SEQ',test1],
['PR/RT SEQ',test2],
['RT SEQ',test3],
	  ];
collectData = [
	    ['Label', 'Amount'],
['2018',y2018],
['2017',y2017],
['2016',y2016],
['2015',y2015],
['2014',y2014],
['2013',y2013],
['2012',y2012],
['2011',y2011],
['2010',y2010],
	  ];
}

function drawChart(selectData) {
	for (var i = 1; i <= 20; i++) {
		var cl = "Clust" + i;
		clearData();
		chooseData(cl);
		switch(selectData) {
			case "raceData":
				var data = google.visualization.arrayToDataTable(raceData);
				break;	
			case "genData":
				var data = google.visualization.arrayToDataTable(genData);
				break;	
			case "diaStatData":
				var data = google.visualization.arrayToDataTable(diaStatData);
				break;	
			case "transData":
				var data = google.visualization.arrayToDataTable(transData);
				break;	
			case "sexBirthData":
				var data = google.visualization.arrayToDataTable(sexBirthData);
				break;	
			case "ageData":
				var data = google.visualization.arrayToDataTable(ageData);
				break;	
			case "acuteData":
				var data = google.visualization.arrayToDataTable(acuteData);
				break;	
			case "diaYearData":
				var data = google.visualization.arrayToDataTable(diaYearData);
				break;	
			case "careData":
				var data = google.visualization.arrayToDataTable(careData);
				break;	
			case "viralData":
				var data = google.visualization.arrayToDataTable(viralData);
				break;	
			case "testData":
				var data = google.visualization.arrayToDataTable(testData);
				break;
			case "collectData":
				var data = google.visualization.arrayToDataTable(collectData);
				break;
		}
		
		var options = {
		  legend: 'none',
		  title: "Clust" + i,
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
		var chart = "pie" + i;
		chart = new google.visualization.PieChart(document.getElementById(chart));
		chart.draw(data, options);
	}
}

function drawRace() {
	graphName = "race";
	toggleVisibility('Race');
	drawChart("raceData");
}

function drawAge() {
	graphName = "age";
	toggleVisibility('Age group at diagnosis');
	drawChart("ageData");
}

function drawGender() {
	graphName = "gender";
	toggleVisibility('Gender');
	drawChart("genData");
}

function drawSexOfBirth() {
	graphName = "sexOfBirth";
	toggleVisibility('Sex of birth');
	drawChart("sexBirthData");
}

function drawDiagnosis() {
	graphName = "diagnosis";
	toggleVisibility('Year of HIV diagnosis');
	drawChart("diaYearData");
}

function drawStatus() {
	graphName = "status";
	toggleVisibility('Diagnostic Status');
	drawChart("diaStatData");
}

function drawAcute() {
	graphName = "acute";
	toggleVisibility('Acute Infection');
	drawChart("acuteData");
}
function drawTrans() {
	graphName = "trans";
	toggleVisibility('Transmission Risk');
	drawChart("transData");
}
function drawCare() {
	graphName = "care";
	toggleVisibility('Care Status');
	drawChart("careData");
}
function drawViral() {
	graphName = "viral";
	toggleVisibility('Viral Suppression');
	drawChart("viralData");
}
function drawTest() {
	graphName = "test";
	toggleVisibility('Test Type');
	drawChart("testData");
}
function drawCollect() {
	graphName = "collect";
	toggleVisibility('Dt Collected');
	drawChart("collectData");
}
// legend
var divs = ["Menu1", "Race", "Sex of birth", "Gender", "Year of HIV diagnosis", "Diagnostic Status", "Acute Infection", "Transmission Risk", "Care Status", "Viral Suppression", "Age group at diagnosis", "Dt Collected", "Test Type"];
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

//slider
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

slider.noUiSlider.on('update', function(){
  threshold = slider.noUiSlider.get();
  switch (graphName) {
  	case "race":
  		drawRace();
  		break;
  	case "age":
  		drawAge();
  		break;
  	case "gender":
  		drawGender();
  		break;
  	case "sexOfBirth":
  		drawSexOfBirth();
  		break;
  	case "diagnosis":
  		drawDiagnosis();
  		break;
  	case "acute":
  		drawAcute();
  		break;
  	case "care":
  		drawCare();
  		break;
  	case "viral":
  		drawViral();
  		break;
  	case "trans":
  		drawTrans();
  		break;
  	case "status":
  		drawStatus();
  		break;
  	case "test":
  		drawTest();
  		break;
  	case "collect":
  		drawCollect();
  		break;
  }
});