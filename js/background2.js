function Background2(game) {
    this.game = game;
  
    this.img = new Image();
    this.img.src = 'img/Background2.png';
  
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 1000;
  
  
  }
  
  Background.prototype.draw2 = function() {
    console.log()
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height );
    this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
  }