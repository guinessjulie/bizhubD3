(function () {
    'use strict';

    //import {select} from 'd3'

    var svg = d3.select('svg');
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    var cx = width /2;
    var cy = height /2;
    var r = height/2;
    console.log(cx, cy, r);
    var g1 = svg.append('g')
        .attr('transform', ("translate(" + cx + ", " + cy + ")"));

    var circle = g1.append('circle') 
        .attr('r', +cy)
        .attr('fill', 'orange')
        .attr('stroke', 'black');
    var eyeBWidth = 80;
    var eyeBHeight = 10;
    var eyeBOffset = -40;

    var gEye = g1.append('g')
        .attr('transform', "translate(0, -50)");

    var gEyeBrow = gEye.append('g')
        .attr('transform', ("translate(0, " + eyeBOffset + ")"));
    gEyeBrow
        .transition().duration(2000)
            .attr('transform', ("translate(0, " + (eyeBOffset - 70) + ")"))
        .transition().duration(2000)
            .attr('transform', ("translate(0, " + eyeBOffset + ")"));
    var leftEyeB = gEyeBrow.append('rect')
        .attr('x', -130)
        .attr('y', eyeBOffset)
        .attr('width', eyeBWidth)
        .attr('height', eyeBHeight);
    var rightEyeB = gEyeBrow.append('rect')
        .attr('x', +70)
        .attr('y', eyeBOffset)
        .attr('width', eyeBWidth)
        .attr('height', eyeBHeight);
    var leftEye = gEye.append('circle')
        .attr('r', 30)
        .attr('cx', -100)
        .attr('fill', 'black');
    var rightEye = gEye.append('circle')
        .attr('r', 30)
        .attr('cx', +100)
        .attr('fill', 'black');
    var g2 = g1.append('g')
        .attr('transform', "translate(0, +50)");
    var mouse = g2.append('path')
        .attr('d', d3.arc()({
            innerRadius: 90,
            outerRadius: 100,
            startAngle: Math.PI/2,
            endAngle: Math.PI + (Math.PI/2)
          }));

}());
//# sourceMappingURL=bundle.js.map
