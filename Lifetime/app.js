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

function timesInLife(event, lifetime){

    return lifetime*event;

}

function timesLeftLife(lifespan,age,timesPerYear){

    return (lifespan-age)*timesPerYear;

}

data.forEach(function(d){

  d.timesInLife = timesInLife(d.timesPerYear,averageLifeSpan);
  d.timesLeft = timesLeftLife(averageLifeSpan,currentAge,d.timesPerYear);

});

console.log(data.length);

// Once we have data, we now need to define variables used by D3
// Examples include chart dimensions, scales, and anything else that can be defined now and accessed later

// We will start with chart dimensions
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
    .data(data)
    .enter()
    .append("circle")
    .style("fill","red")
    .attr("cy", 60)
    .attr("cx", function(d,i){ return })
    .attr("r", function(d,i){return width/(data.length);});





















});