//require('jquery');
//var SVG = require('./svg');
//import SVG from './svg';
//const layoutJson = require('./layout.json');

'use strict';
class Drawer{
    constructor() {
        this._scale = 1000;
        this._canvasCenter = {
            x: 500,
            y: 500,
        }
    }

    drawLayout(data) {
		//let data = JSON.parse(dataJson);
		var draw = SVG('drawing').size(300, 300);
		var rect = draw.rect(100, 100).attr({ fill: '#f06' });
		alert("you are calling Drawer's drawLayout()!");
    }

    drawRooms(polygons) {
        rooms.forEach(room => {
            this.drawWalls(room);
            this.drawContents(room.contents);
            this.canvas.text(`${room.area}ƽ��`)
                .attr({ x:200, y:200, fill: '#000000', size: 20})
                .font({size: 30, anchor: 'middle', leading: '1.5em'});
        });
        
    }

    drawWindows(polygons) {
        let roomPath = this.canvas.path(room.wallLoop).attr({fill: 'none'}).stroke({ width: 20 });
    }
    
    drawContents(polygons) {
        contents.forEach(content => {
            var group = this.canvas.group()
            let rect =  group.rect(content.width, content.height).fill("none").stroke({color: "#000000", width: 5}).rotate(content.rotation).animate(800);
            let X = content.width/2;
            let Y = content.height/7;
            let text = group.text(content.type)
                .attr({x: X, y: Y, fill: '#000000', size: 20})
                .font({size: 18, anchor: 'middle', leading: '1.5em'})
                .rotate(content.rotation);
            group.animate(800).move(content.x, content.y);
        });
    }
}
var drawer = new Drawer();

function drawLayout() {
	alert('You clicked the button!');
}
