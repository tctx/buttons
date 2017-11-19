// var data = [12, 18, 24, 30, 36, 42, 48, 100];]

d3.csv("data.csv",function(data){
  data.forEach(function(d){
    d.timesPerYear = +d.timesPerYear;
  });

//console.log(d3.max(data,function(d){return d.value1;}));
console.log(data);

// Declare global variables
var averageLifeSpan = 82;
var currentAge = prompt("What's your age?");
var vacation = data[0].timesPerYear;
var numberOfCircles;
var itemsPerRow = 33;
var numberOfRows;
var rowHeight;
var newSet = [];
var timesLeft;

function timesInLife(event, lifetime){
    return lifetime*event;
}

function timesLeftLife(lifespan,age,timesPerYear){
    var timesLeft = (lifespan-age)*timesPerYear;
    return timesLeft;
}

data.forEach(function(d){
  d.timesInLife = timesInLife(d.timesPerYear,averageLifeSpan);
  d.timesLeft = timesLeftLife(averageLifeSpan,currentAge,d.timesPerYear);
});

data.forEach(function(d){
  d.newDataSet = [];
  for (i=0;i<d.timesInLife;i++){
    d.newDataSet.push(1);
    newSet.push(1);
  }
});

function isolateData(givenData){
  newDataArray = givenData[0]["newDataSet"];
  return newDataArray;
}

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
  return rowHeight;
}

calcRowNumber(itemsPerRow,data[0].timesInLife);
heightPerRow(300,numberOfRows);

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
    //.data(newSet)
    .data(isolateData(data))
    .enter()
    .append("circle")
    .style("fill","red")
    .attr("cy", function(d,i){ 
      var currentRow = Math.floor(i/itemsPerRow);
      console.log(data);
      return (currentRow * rowHeight) + 50;
    })
    .attr("cx", function(d,i){ 
      return ((i%itemsPerRow) * 25) + 50;
    })
    .attr("r", function(d,i){return (width/itemsPerRow)/4;})
    .style("fill", function(d,i){
      if (i < newDataArray.length - data[0].timesLeft){
        return "orange";
      } else {
        return "white";
      }
    });

});