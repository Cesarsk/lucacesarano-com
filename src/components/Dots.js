import React from 'react';
import '../styles/Dots.css';
import TweenLite from 'gsap/TweenLite'
import 'gsap/CSSPlugin'
import { Circ } from 'gsap/EasePack'

//var container
var canvas, ctx, points, target, animateHeader = true
//var posx, posy

var width = window.innerWidth / 2;
var height = window.innerHeight / 2;

export default class App extends React.Component {
    componentDidMount() {
        initHeader();
        initAnimation();
        addListeners();    
    }

    render() {
        return (
            <div id="dots" className="dots">
                <canvas id="canvas" className="canvas"></canvas>
            </div>
        );
    }
}

function initHeader() {
    target = {
        x: window.innerWidth / 2,
        y: (height + 60) / 2
    };

    //container = document.getElementById('dots');
    //container.style.height = height + 'px';
    //container.style.width = window.innerWidth + 'px';

    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = height + 60;
    ctx = canvas.getContext('2d');

    // create points
    points = [];
    for (var x = 0; x < window.innerWidth; x = x + width / 5) {
        for (var y = 0; y < height; y = y + height / 8) {
            var px = x + Math.random() * width / 100;
            var py = y + Math.random() * height / 100;
            var p = {
                x: px,
                originX: px,
                y: py,
                originY: py
            };
            points.push(p);
        }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for (var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if (!(p1 === p2)) {
                var placed = false;
                for (var k = 0; k < 5; k++) {
                    if (!placed) {
                        if (closest[k] === undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for (k = 0; k < 5; k++) {
                    if (!placed) {
                        if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
        }
        p1.closest = closest;
    }

    // assign a circle to each point
    for (i in points) {
        var c = new circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.9)');
        points[i].circle = c;
    }
}

// Event handling
function addListeners() {
    if (!('ontouchstart' in window)) {
        //window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("resize", resize, true);
    window.addEventListener("scroll", scrollCheck);
}

function resize() {
    //width = 960;
    //height = 960 / 2;
    //container.style.height = height + 'px';
    //container.style.width = window.innerWidth+ 'px';

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = height;
    target = {
        x: window.innerWidth / 2,
        y: height / 2
    };
}
/*
function mouseMove(e) {
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
}
*/
function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
}

// animation
function initAnimation() {
    animate();
    for (var i in points) {
        shiftPoint(points[i]);
    }
}

function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 4000) {
                points[i].active = 0.3;
                points[i].circle.active = 0.6;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                points[i].active = 0.1;
                points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                points[i].active = 0.02;
                points[i].circle.active = 0.1;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }
    }
    requestAnimationFrame(animate);
}

function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
            shiftPoint(p);
        }
    });
}

// Canvas manipulation
function drawLines(p) {
    if (!p.active) return;
    for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
        ctx.stroke();
    }
}

function circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        const element = document.querySelector('.canvas')
        const style = getComputedStyle(element);
        ctx.fillStyle = style.color;
        ctx.fill();
    };
}

// Util
function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}