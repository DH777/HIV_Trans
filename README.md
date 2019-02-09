# HIViewer
## Introduction of the project
- Integrated thousands of DNA sequence data with patients' meta-data and parsed them into JSON file
- Visualize interactions of patients according to the similarity between their DNA sequence using d3.js and cytoscape.js
- Implemented dynamic charts to summarize patients' meta-data and show the trend in time sequence.
## Input
There are two kinds of input files. The first is 'pair' information (e.g. `Clust1_pairs_withDist1.5.txt`) and the other is 'sequence' information (e.g. sequences_02012018.txt).
The original format of the 'pair' information is `<id1> <id2> <distance>`. The original format of the sequence information is  `GENOTYPE_SEQUENCE	race_grp	curr_gen	dx_stat	trans_grp	sex_at_birth	age_grp	acute	dx_year	care_status	viral_suppression	tract_id	ID	id_seq
`. These should be transformed to the JSON-like file. Each line represents the meta-data of one node or edge. Here is an example.
```javascipt
//one node
{ data: { id: '942', cluster: 'Clust3', degree: 20, nDis: 0.768049, race_grp: 'Non-Hispanic Black', curr_gen: 'Male', dx_stat: 'Adult HIV', trans_grp: 'MSM', sex_at_birth: 'Male', age_grp: '6', acute: 'No', dx_year: '2011', care_status: 'Y', viral_suppression: 'Y', test_type: 'PR/RT SEQ', dt_collected: '2011'} }
//one edge
{ data: { source: '3560', target: '8435', weight: 0.5, cluster: 'Clust13', distance: 0.534402} }
```
This transformation can be made by https://github.com/DH777/HIV_data_preprocessing (The transformation can also be implemented in another way).

When the input is transformed to the JSON file,  we can define two variables `nodes` and `edges` in the `data.js` file. If we want to visualize the new data, the only thing is to update `data.js` file.
## Download and Run
- Open terminal and enter `git clone https://github.com/DH777/HIViewer.git` to download the project.
- After having the new pair and sequence data, we can update the `data.js` as mentioned above. 
- Once the new data is updated, we can open `index.html`, `dt_collected.html`, and `trend.html` to see the visualization of the new dataset.

IMPORTANT: In order to protect the privacy, we didn't upload the data.js file which may contain patients' personal information.
