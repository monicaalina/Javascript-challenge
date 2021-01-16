
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


    var filteredData = tableData;

    if (Date) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.datetime === Date);
    };
    
    if (City) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.city === City);
    };
    
    if (State) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.state === State);
    };

    if (Country) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.country === Country);
    };

    if (Shape) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.shape === Shape);
    };

    Table(filteredData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


Table(tableData);



