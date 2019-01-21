function Player(game) {
    this.game = game
    this.x =400; // x coordinate
    this.y = 400; // y coordinate
    this.r = 20;
    this.setListners();
}


Player.prototype.draw = function () {

    this.ctx = this.game.ctx;
    this.ctx.strokeStyle = "#B40026";
    this.ctx.fillStyle = "#fff57c";
    this.ctx.lineWidth = 5;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();

}

Player.prototype.setListners = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === this.game.keys.RIGTH) {
            console.log('derecha')
            this.x += 15;

        } else if (event.keyCode == this.game.keys.LEFT) {
            console.log('IZDA')
            this.x -= 45;
        }
    }.bind(this);
};