var fs = require('fs');

var companydata = {};
var jobdata = {};
var alldata={};
var city = ['Austin', 'Boston', 'Chicago', 'Dallas', 'Houston', 'LosAngeles', 'NewYork', "Philadelphia",
    'SanDiego', 'Sanfrancisco', 'Seattle', 'Washington'];


for (var i = 0; i < city.length; i++) {
     var cityname=city[i];
    companydata[cityname] = require('./' + city[i] + 'companydata.json');
  
    jobdata[cityname] = require('./' + city[i] + 'jobdata.json');
    alldata[cityname] = require('./' + city[i] + 'alldata.json');
   
}
fs.writeFile('alldata.js', 'var alldata=');
fs.appendFile('alldata.js', JSON.stringify(alldata));
fs.appendFile('companydata.js', JSON.stringify(companydata));
fs.writeFile('companydata.js', 'var companydata=');
fs.appendFile('companydata.js', JSON.stringify(companydata));
fs.writeFile('jobdata.js', 'var jobdata=');
fs.appendFile('jobdata.js', JSON.stringify(jobdata));
