class ParentClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}