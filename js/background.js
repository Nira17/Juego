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


  //  function Background2(game) {
  //   this.game = game;
  //   this.img = new Image();
  //   this.img.src = 'img/Background2.png';
  //   this.img2 = new Image2();
  //   this.x = 0;
  //   this.y = 0;
  //   this.width = 1000;
  //   this.height = 1000;
  
  
  // }
  //   Background2.prototype.draw2 = function() {
    
  //   this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height );
    
  
  //  }

  