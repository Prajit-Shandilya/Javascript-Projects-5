class Paperball {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
            isStatic: false,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        fill(0, 260, 255);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}