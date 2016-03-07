
var point = new Point(20, 50);
var size = new Size(100, 50);
var myRectangle = new Path.Rectangle(point, size);
myRectangle.fillColor = 'lightBlue';

var myBall = new Path.Circle(new Point(10, 90), 10);
myBall.fillColor = 'black';

function onFrame(event) {
    // Normalise the event.count property to a 0-359 scale
    // then apply some trigonometry so we get some smoothed values
    // just like going round the edge of a circle
    var x = (1 + Math.cos((event.count * 2 % 360)
            * (Math.PI / 180))) * 100 + 10
    var y = (Math.abs(Math.sin((event.count * 2 % 360)
            * (Math.PI / 180)))) * 80;
    myRectangle.position.x = x;
    myBall.position.x = x;
    myBall.position.y = 90 - y;
}