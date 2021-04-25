

function DrawPath() {
    var elm = document.getElementById("canvas-left-bg");
    var draw = elm.getContext("2d");
    /*var width = elm.width();
    var height = elm.height();
    */

    draw.fillStyle = "#FF0000";
    draw.beginPath();
    draw.moveTo(200, 0);
    draw.lineTo(100, 150);
    draw.stroke();
}