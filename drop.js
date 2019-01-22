function Drops(game) {
    this.game = game
    this.x =500; // x coordinate
    this.y = 60; // y coordinate
    this.r = 5;
    this.dy = 1;
    
  
    
    
}

Drops.prototype.draw = function () {
    this.ctx = this.game.ctx;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#000000";
    this.ctx.fillStyle = "#000000";
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();  

}
Drops.prototype.move = function () {
    
     this.y += this.dy ;
};
   


    // if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
    //     this.vy *= -1;
    //   }
    //   if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
    //     this.vx *= -1;
    //   }





