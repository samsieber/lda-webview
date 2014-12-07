// Adapted from http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5

function draw_line_graph(place,data,size) {
    console.log(data.map(function(d){return d.year}));
    // Set the dimensions of the canvas / graph
    var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = size.w - margin.left - margin.right,
        height = size.h - margin.top - margin.bottom;
        
    // Set the ranges
    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(3);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    // Define the line
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.count); });
        
    // Adds the svg canvas
    var svg = d3.select(place)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                  "translate(" + margin.left + "," + margin.top + ")");

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.year; }));
        y.domain([0, d3.max(data, function(d) { return d.count; })]);

        // Add the valueline path.
        svg.append("path")
            .attr("class", "line")
            .attr("d", valueline(data));

        // Add the X Axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

}
