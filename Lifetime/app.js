// var data = [12, 18, 24, 30, 36, 42, 48, 100];]

d3.csv("data.csv",function(data){

  data.forEach(function(d){

    d.timesPerYear = +d.timesPerYear;

  });

//console.log(d3.max(data,function(d){return d.value1;}));
console.log(data);

// Declare global variables
var averageLifeSpan = 82;
var currentAge = 80;
var vacation = data[0].timesPerYear;
var numberOfCircles;
var itemsPerRow = 15;
var numberOfRows;
var rowHeight = 50;
var newSet = [];
var timesLeft;

function timesInLife(event, lifetime){

    return lifetime*event;

}

function timesLeftLife(lifespan,age,timesPerYear){

    var timesLeft = (lifespan-age)*timesPerYear;
    return;

}

data.forEach(function(d){

  d.timesInLife = timesInLife(d.timesPerYear,averageLifeSpan);
  d.timesLeft = timesLeftLife(averageLifeSpan,currentAge,d.timesPerYear);

});

var referenceData = data;

console.log(data.length);

data.forEach(function(d){
  for (i=0;i<=d.timesInLife;i++){
    newSet.push(1);
  }
});

function calcRowNumber(itemsPerRow,lifetimeNumber){
  var rowNumber = lifetimeNumber/itemsPerRow;
  if (rowNumber < 1){
    numberOfRows = 1;
  } else {
    numberOfRows = rowNumber;
  }
  return;
}

function heightPerRow(svgHeight,rowCount){
  rowHeight = svgHeight/rowCount;
  return;
}

// Chart dimensions
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 100},
    width = 960 - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

    svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "lightGray");

    svg.selectAll("circle")
    .data(newSet)
    .enter()
    .append("circle")
    .style("fill","red")
    .attr("cy", function(d,i){ 
      var currentRow = Math.floor(i/itemsPerRow);
      return (currentRow * rowHeight) + 50;
    })
    .attr("cx", function(d,i){ 
      return ((i%itemsPerRow) * 70) + 50;
    })
    .attr("r", function(d,i){return (width/itemsPerRow)/4;})
    .style("fill", function(d,i){
      if (i < newSet.length - 2){
        return "orange";
      } else {
        return "white";
      }
    });





















});