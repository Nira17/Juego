function Player(game) {
    this.game = game
    this.x =800; // x coordinate
    this.y = 420; // y coordinate
    this.r = 15;
    //this.move();
}


Player.prototype.draw = function () {

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

Player.prototype.move = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === this.game.keys.RIGTH ) {
            console.log('derecha')
            this.x += 5;
               
             }else if (event.keyCode == this.game.keys.LEFT) {
            console.log('IZDA')
            this.x -= 5;
        }
    }.bind(this);

        if (this.x + this.r > this.game.canvas.width ) {
            this.x--;
         }
         
         
       if (this.x + 10 < 425){
          this.x++;

       }

}; 