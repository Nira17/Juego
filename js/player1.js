function Player(game) {
    this.game = game
    this.x =800; // x coordinate
    this.y = 420; // y coordinate
    this.r = 15;
    //this.move();
}


Player.prototype.draw = function (color) {
    
    this.ctx = this.game.ctx;
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();  

}

Player.prototype.move = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === this.game.keys.RIGTH ) {
           
            this.x += 6;
               
             }else if (event.keyCode == this.game.keys.LEFT) {
           
            this.x -= 6;
        }
    }.bind(this);

        if (this.x + this.r > this.game.canvas.width ) {
            this.x--;
         }
         
         
       if (this.x + 10 < 425){
          this.x++;

       }

}; 