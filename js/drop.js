function Drops(game,x,y,color) {
    this.game = game
    this.x = x; 
    this.y = y;
    this.r = 5;
    this.dy = 2;
    this.color = color;
    
  
    
    
}

Drops.prototype.draw = function () {

    this.ctx = this.game.ctx;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#000000";
    this.ctx.fillStyle = "#ff0000";
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();  

}
Drops.prototype.move = function () {
    
     this.y += this.dy ;
};
   





