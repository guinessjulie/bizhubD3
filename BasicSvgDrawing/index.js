//import {select} from 'd3'

const svg = d3.select('svg');
const width = +svg.attr('width')
const height = +svg.attr('height')
const cx = width /2
const cy = height /2
const r = height/2;
console.log(cx, cy, r)
const g1 = svg.append('g')
    .attr('transform', `translate(${cx}, ${cy})`)

const circle = g1.append('circle') 
    .attr('r', +cy)
    .attr('fill', 'orange')
    .attr('stroke', 'black')

const eyeSpace = Math.floor( r/ 2) ;
const eyeBWidth = 80;
const eyeBHeight = 10;
const eyeBOffset = -40;

const gEye = g1.append('g')
    .attr('transform', `translate(0, -50)`)

const gEyeBrow = gEye.append('g')
    .attr('transform', `translate(0, ${eyeBOffset})`)
gEyeBrow
    .transition().duration(2000)
        .attr('transform', `translate(0, ${eyeBOffset - 70})`)
    .transition().duration(2000)
        .attr('transform', `translate(0, ${eyeBOffset})`)
const leftEyeB = gEyeBrow.append('rect')
    .attr('x', -130)
    .attr('y', eyeBOffset)
    .attr('width', eyeBWidth)
    .attr('height', eyeBHeight)
const rightEyeB = gEyeBrow.append('rect')
    .attr('x', +70)
    .attr('y', eyeBOffset)
    .attr('width', eyeBWidth)
    .attr('height', eyeBHeight)
const leftEye = gEye.append('circle')
    .attr('r', 30)
    .attr('cx', -100)
    .attr('fill', 'black')
const rightEye = gEye.append('circle')
    .attr('r', 30)
    .attr('cx', +100)
    .attr('fill', 'black')
const g2 = g1.append('g')
    .attr('transform', `translate(0, +50)`)
const mouse = g2.append('path')
    .attr('d', d3.arc()({
        innerRadius: 90,
        outerRadius: 100,
        startAngle: Math.PI/2,
        endAngle: Math.PI + (Math.PI/2)
      }))

