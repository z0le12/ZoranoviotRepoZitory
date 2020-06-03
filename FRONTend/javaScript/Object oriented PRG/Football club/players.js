function Player(name) {
    this.name = "Player " + name;
    this.position = position[getRandom(0, position.length - 1)];
    this.goals = 0;
    this.assists = 0;
    this.yellowCards = 0;
    this.redCards = 0;
    this.points = 0;
    this.yellowCard = false;
    this.secondYellowCard = false;
    this.redCard = false;

    this.totalGoals = function() {
        this.goals = this.goals + 1;
    }

    this.totalAssists = function() {
        this.assists = this.assists + 1;
    }

    this.totalYellowCards = function() {
        this.yellowCards = this.yellowCards + 1;
    }

    this.totalRedCards = function() {
        this.redCards = this.redCards + 1;
    }

    this.totalPoints = function() {
        this.points = ((this.goals * 3) + (this.assists * 2)) - (this.yellowCards + (this.redCards * 2));
    }
}
var position = ["Goalkeeper", "Defender", "Midfielder", "Striker"];