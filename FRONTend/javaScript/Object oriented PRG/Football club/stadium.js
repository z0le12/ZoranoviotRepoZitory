function Stadium(name) {
    this.name = name;
    this.capacity = 75500;
    this.spectators = null;
    this.fans = null;
    this.ticketPrice = 50;

    this.setFans = function(fans){
        this.fans = fans;
    }

    this.fillStadium = function() {
        this.spectators = Math.floor(this.fans.length * 1.25);
        this.capacity = this.capacity - (this.fans.length + this.spectators);
    }
}