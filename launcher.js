class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display() {
        if (this.launch.bodyA) {
            var pointA = this.launch.bodyA.position;
            //var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    fly() {
        this.launch.bodyA = null;

    }

}