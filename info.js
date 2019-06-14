// dynamic rendering

$(".submit-btn").click(function() {
  $('#infoGraphicContainer').html('');
  // info.js
  var gradient = null;
  var svgcanvas = null;
  var infoText = null;
  //var baseColor = 'rgba(255, 255, 255, 1)';
  var baseColor = '#fff';

  //var fillColor = '#cc7e0b';
  var fillColor = $("#fillColor").val();

  //var infoValue = 35;
  var infoValue = $("#fillNumber").val();

  //var infographic = maternalHealth;
  var infographic = infoIcon[0][$("#selectInfographic").val()];

  var divElem = d3.select("#infoGraphicContainer");
  (function infoGraphic(value) {
    value = value;

    svgcanvas = divElem.append("svg:svg")
      .attr("width", 1000)
      .attr("height", 400);
    //.attr("viewBox", '0 0 800 400')
    //.attr("preserveAspectRatio",'xMinYMax meet');
    //.attr("viewBox", 0 0 150 150);
    //.attr("viewBox", '0', '0' '150' '150')

    svgcanvas.append("svg:path")
      .attr("d", infographic)
      .style("stroke-width", 0)
      //.style("stroke", "#ADADAD")
      .style("fill", "url(#gradient)");

    gradient = svgcanvas.append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      //horizonal
      .attr("direction", "180")
      .attr("y2", "0%")
      .attr("x2", value + "%")
      .attr("y1", "0%")
      .attr("x1", "100%")

      // vertical
      /*.attr("direction", "180")
      .attr("x2", "0%")
      .attr("y2", value + "%")
      .attr("x1", "0%")
      .attr("y1", "100%")
      .attr("spreadMethod", "pad");*/


    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", baseColor)
      

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", fillColor)
      

  })(infoValue);
});

//end dynamic rendering