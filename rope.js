class Rope{
    constructor(body1, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.pointB = {x:this.offsetX, y:this.offsetY};
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        strokeWeight(5);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
}