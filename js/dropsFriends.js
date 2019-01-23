function DropsFriend(game,x,y,color) {
    this.game = game
    this.x = x; 
    this.y = y;
    this.r = 5;
    this.dy = 2;
    this.color = color;
    
  
    
    
}

DropsFriend.prototype.draw = function () {

    this.ctx = this.game.ctx;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#fff57c";
    this.ctx.fillStyle = "#fff57c";
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();  

}
DropsFriend.prototype.move = function () {
    
     this.y += this.dy ;
};
   
