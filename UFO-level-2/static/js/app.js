
var tableData = data;
var tbody = d3.select("tbody");


// Refactor to use Arrow Functions
function Table(data){

    tbody.html("");
    data.forEach((ufo) => {
    
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {        
        var cell = row.append("td");
        cell.text(value);
    });
  });
};


// Create event handlers 
function handleClick() {

     // Get the value property of the input element
    var Date = d3.select("#datetime").property("value");
    var City = d3.select("#city").property("value");
    var State = d3.select("#state").property("value");
    var Country = d3.select("#country").property("value");
    var Shape = d3.select("#shape").property("value");

    // Create a new variable, for filter purpose
    var filteredData = tableData;

    if (Date) {
        // If using the date as the first criterion, further filtered data is based on that chosen date
        var filteredData = filteredData.filter(Data => Data.datetime === Date);
    };
    
    if (City) {
        // If using the city as the first criterion, further filtered data is based on that chosen city
        var filteredData = filteredData.filter(Data => Data.city === City);
    };
    
    if (State) {
        // If using the state as the first criterion, further filtered data is based on that chosen state
        var filteredData = filteredData.filter(Data => Data.state === State);
    };

    if (Country) {
        // If using the country as the first criterion, further filtered data is based on that chosen country
        var filteredData = filteredData.filter(Data => Data.country === Country);
    };

    if (Shape) {
        // If using the shape as the first criterion, further filtered data is based on that chosen shape
        var filteredData = filteredData.filter(Data => Data.shape === Shape);
    };

    Table(filteredData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


Table(tableData);



