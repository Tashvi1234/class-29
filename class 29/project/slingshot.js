class SlingShot {

    constructor (bodyX,pointY) {
        var slingOptions = {
               bodyA : bodyX,
               pointB : pointY,
               stiffness : 0.04,
               length : 10
          }

        this.slingshot = Constraint.create (slingOptions);

        
        World.add (world, this.slingshot);

             
        
    }

    display () {
        if  (this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            
                strokeWeight (8);
                stroke(52,18,28);
                line (pointA.x,pointA.y,pointB.x,pointB.y);
            
       }
    }

    fly () {
        this.slingshot.bodyA = null;
    }

}