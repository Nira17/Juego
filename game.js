var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    RIGTH: 39,
    LEFT: 37,
  },
  arrayDrops : [],


  start: function () {


    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;

    this.reset();

    this.dropCount = 0;

    this.interval = setInterval(function () {

     
      this.clear();
    
      this.drawAll();
      this.moveAll();
      

      this.dropCount++;
   
      if(this.dropCount === 120){
         this.dropCount = 0;
         this.createDrops();
     

        
        

      }
      
      


    }.bind(this), 1000/this.fps)
},



  reset: function () {
    this.background = new Background(this);
    this.player = new Player(this);

    




    // this.scoreBoard = ScoreBoard
    // this.framesCounter = 0;

    // this.score = 0;
  },
  createDrops: function (){
    
    var dropttt = new Drops(this,Math.round(Math.random() * (900 - 400) + 400),60);
    this.arrayDrops.push(dropttt)


  },

  clear: function () {
   
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function () {
    this.background.draw();
    this.drawDrops();
    this.player.draw();
    // this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
    // this.drawScore();
  },
  drawDrops:function (){
  this.arrayDrops.forEach(function(elemt){
    elemt.draw();
    elemt.move();
  })
  },

   moveAll: function () {

    this.player.move();
  
    // this.obstacles.forEach(function (obstacle) { obstacle.move(); });
  },

  // drawScore: function () {
  //         this.scoreBoard.update(this.score, this.ctx)
  //       }


  
  
  isCollision: function () {
    // colisiones genéricas 
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
    
    return this.drops.some(function (obstacle) {
      return (
        ((this.player.x + this.player.w) >= drops.x &&
          this.player.x < (obstacle.x + drops.w) &&
          this.player.y + (this.player.h - 20) >= drops.y)
      );
    }.bind(this));
  },

}

