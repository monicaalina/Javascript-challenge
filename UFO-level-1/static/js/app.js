
var tableData = data;
var tbody = d3.select("tbody");


// Refactor to use Arrow Functions
data.forEach((ufo) => {
    
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {        
        var cell = row.append("td");
        cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

 
button.on("click", function(){
    // Delete the previous selection
    tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

    // Display the filteredData
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Prevent the page from refreshing
    d3.event.preventDefault();
});