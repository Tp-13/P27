class Bob{
    constructor(x, y, radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':true
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(ang);
        strokeWeight(3);
        stroke("white");
        fill("red");
        circle(0, 0, this.radius);
        pop();
    }
    
}
