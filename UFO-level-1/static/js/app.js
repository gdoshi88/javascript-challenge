// from data.js
var tableData = data;

// YOUR CODE HERE!
// take the data.js and put it in to a 'dataframe' type table(day 1 JavaScript)
// columns for that table: `date/time`, `city`, `state`, `country`, `shape`, `comment`(Day 1 JavaScript)---> Convert to HTML table??
// use the date form in the HTML and write JS code that will take iput for date/time and return the rows accordingly(Callbacks, Day 2 JavaScript)

var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach(function(alienTable) {
  console.log(alienTable);
  var row = tbody.append("tr");
  Object.entries(alienTable).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select(".btn-default");

button.on("click", function() {
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter(date => date.datetime === inputValue);
  console.log(filteredData);
  tbody.text("");
  filteredData.forEach(function(filteredFunction) {
    var rowTwo = tbody.append("tr");
    Object.entries(filteredFunction).forEach(function([key, value]) {
      console.log(key, value);
      var cellTwo = rowTwo.append("td");
      cellTwo.text(value);
    });
  });
});
