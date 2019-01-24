function Background(game) {
  this.game = game;
 this.img = new Image();
 this.x = 0;
 this.y = 0;
 this.width = 1000;
 this.height = 1000;
  



}
  
  Background.prototype.draw = function(src) {
    this.img.src = src;
    
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height );
    
  
   }


  