function Drops(game) {
    this.game = game
    this.x =500; // x coordinate
    this.y = 84; // y coordinate
    this.r = 5;
    
  
    
    
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
// Drops.prototype.move = function () {
//     this.vy = 10;
//     this.ctx.clearRect(0, 0, this.canvas.width, this.height);
//     this.y += 1;

// };
   // this.y += this.vy;


    // if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
    //     this.vy *= -1;
    //   }
    //   if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
    //     this.vx *= -1;
    //   }





// function lastDayIsFriday(initialYear, endYear) {
//     var start = new Date(initialYear, 1, 0);
//     var end = new Date(endYear || initialYear, 11, 31);
//     count = 0;
    
//     for (let i = 1; start <= end; start = new Date(initialYear,++i,0)) {
       
//       if (start.getDay() == 5) count++;
  
//     }
//     return count; 
//   }