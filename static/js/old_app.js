// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create table
function buildTable(data) {
tbody.html("");

// Find the tbody tag within the HTML and add a table row
data.forEach((dataRow) => {
    // Add rows
    let row = tbody.append("tr");
    // Put each text value of the sighting object into the row as its own cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });

});

}

function handleClick() {
    // watch for a click
    d3.selectAll("#filter-btn").on("click", handleClick);

    // Get the datetime filter value
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // If a date was entered,
    // then filter out rows where the datetime is not exactly equal to our filter
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Construct the table 
    buildTable(filteredData);
};


buildTable(tableData);