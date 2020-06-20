let slider = document.getElementById("myRange");
let slideroutput = document.getElementById("slidervalue");
let outputgap = document.getElementById("outputgap");

// Display the default slider value

function graph(slider_value) {
  outputgap.innerHTML = Math.round(data_q2gap[slider_value]*10)/10
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
  }
  let trace1 = {
    x: data_years,
    y: data_hist_gap,
    type: "scatter",
    hoverinfo: "skip",
  };
  let trace2 = {
    x: [data_years.slice(-1)[0], 2020.25],
    y: [data_hist_gap.slice(-1)[0], data_q2gap[slider_value] / 100],
    type: "scatter",
    hoverinfo: "skip",
  };
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
      range: [-0.16, 0.05],
      tickformat: "%",
      fixedrange: true,
    },
    margin: { l: 100, r: 20, t: 10, b: 20 },
    autosize: true,
    height: 500,
    showlegend: false,
    annotations: [
      {
        x: 2020.25,
        y: data_q2gap[slider_value] / 100,
        showarrow: true,
        text: "2020 Q2",
        arrowhead: 0,
        ax: 40,
        ay: 0,
        arrowcolor: "#00000000",
      },
      {
        x: 2020,
        y: data_hist_gap.slice(-1)[0],
        showarrow: true,
        text: "2020 Q1",
        arrowhead: 0,
        ax: 40,
        ay: 0,
        arrowcolor: "#00000000",
      },
    ],
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
  Plotly.newPlot("graph", [trace1, trace2], layout);
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  let tbody = table.createTBody();
  for (let element of data) {
    let row = tbody.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function build_table(slider_value) {
  let table = document.querySelector("table");
  table.innerHTML = "";
  let data = Object.keys(table_data[slider_value][0]);
  generateTableHead(table, data);
  generateTable(table, table_data[slider_value]);
}

// init
s_value = slider.value;
graph(s_value);
build_table(s_value);
slideroutput.innerHTML = s_value;
// update
function resize_update() {
  update(slider.value);
}

function update(value) {
  thevalue = value;
  if (parseFloat(value) < 1) {
    thevalue = "0";
  }
  slideroutput.innerHTML = thevalue;
  graph(thevalue);
  build_table(thevalue);
}
slider.oninput = function () {
  update(this.value);
};
