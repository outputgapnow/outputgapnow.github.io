function graph() {
    let recession_shapes = [];
    for (var i = 0; i < data_recessions.length; i++) {
        recession_shapes.push({
            type: "rect",
            xref: "x",
            yref: "paper",
            x0: data_recessions[i][0],
            y0: 0,
            x1: data_recessions[i][1],
            y1: 1,
            fillcolor: "#cccccc",
            opacity: 1,
            line: {
                width: 0,
            },
            layer: "below",
        });
    };
    let data_years = [];
    let data_hist_gap = [];
    for (var i = 0; i < data_gap.length; i++) {
        data_years.push(data_gap[i][0]);
        data_hist_gap.push(data_gap[i][1] / 100);        
    };
    console.log(data_hist_gap)
    console.log(data_years)
    let trace1 = {
        x: data_years,
        y: data_hist_gap,
        type: "scatter",
        hoverinfo: "skip",
    };
    // let trace2 = {
    //   x: [data_years.slice(-1)[0], 2020.25],
    //   y: [data_hist_gap.slice(-1)[0], data_q2gap[slider_value] / 100],
    //   type: "scatter",
    //   hoverinfo: "skip",
    // };
    let layout = {
        shapes: recession_shapes,
        xaxis: {
            showgrid: false,
            mirror: false,
            ticks: "outside",
            showline: true,
            fixedrange: true,
        },
        yaxis: {
            showgrid: false,
            range: [-0.1, 0.05],
            tickformat: "%",
            fixedrange: true,
        },
        margin: { l: 100, r: 20, t: 10, b: 20 },
        autosize: true,
        height: 500,
        showlegend: false,
        // annotations: [
        //   {
        //     x: 2020.25,
        //     y: data_q2gap[slider_value] / 100,
        //     showarrow: true,
        //     text: "2020 Q2",
        //     arrowhead: 0,
        //     ax: 40,
        //     ay: 0,
        //     arrowcolor: "#00000000",
        //   },
        //   {
        //     x: 2020,
        //     y: data_hist_gap.slice(-1)[0],
        //     showarrow: true,
        //     text: "2020 Q1",
        //     arrowhead: 0,
        //     ax: 40,
        //     ay: 0,
        //     arrowcolor: "#00000000",
        //   },
        // ],
    };
    // if (slider_value=="0"){
    //   layout.annotations.push({
    //     x: 2020.25,
    //     y: -0.35,
    //     showarrow: true,
    //     text: "test",
    //     arrowhead: 1,
    //     ax: -100,
    //     ay: -200,
    //     arrowcolor: "#000000",
    //   });
    // }
    Plotly.newPlot("graph", [trace1], layout);
}

graph();
// update
function resize_update() {
    update();
}
