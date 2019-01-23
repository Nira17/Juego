function DropsFriends(game,x,y,color) {
    this.game = game
    this.x = x; 
    this.y = y;
    this.r = 8;
    this.dy = 2.5;
    this.color = color;
    
  
    
    
}

DropsFriends.prototype.drawf = function () {

    this.ctx = this.game.ctx;
    this.ctx.beginPath();
    this.ctx.strokeStyle =this.color;
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();  

}
DropsFriends.prototype.movef = function () {
    
     this.y += this.dy ;
};
   
