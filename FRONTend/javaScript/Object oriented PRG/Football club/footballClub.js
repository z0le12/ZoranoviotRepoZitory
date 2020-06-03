function FootballClub(name) {
    this.name = name;
    this.stadium = new Stadium("Klub na novinari");
    this.fans = [];
    this.players = [];
    this.profit = 0;
    this.opposition = new Opposition();
    this.fanShop = new FanShop();

    this.playMatch = function (week) {
        var opposingTeam = [];

        var topTeams = this.opposition.topTeams[getRandom(0, this.opposition.topTeams.length - 1)];
        opposingTeam.push(topTeams);

        var middleTeams = this.opposition.middleTeams[getRandom(0, this.opposition.middleTeams.length - 1)];
        opposingTeam.push(middleTeams);

        var weakTeams = this.opposition.weakTeams[getRandom(0, this.opposition.weakTeams.length - 1)];
        opposingTeam.push(weakTeams);

        var currentOpposition = opposingTeam[getRandom(0, opposingTeam.length - 1)];
        console.log("WEEK " + week + " against " + currentOpposition);

        this.getARedCard = function() {
            var redCardedPlayer = this.players[getRandom(0, this.players.length - 1)];
            if (!redCardedPlayer.redCard) {
                redCardedPlayer.totalRedCards();
                redCardedPlayer.redCard = true;
                console.log("In the " + i + " minute " + redCardedPlayer.name + " has been sent off v " + currentOpposition);
        }
        }
    
        this.getAYellowCard = function() {
            var yellowCardedPlayer = this.players[getRandom(0, this.players.length - 1)];
            if (!yellowCardedPlayer.yellowCard && !yellowCardedPlayer.redCard) {
                yellowCardedPlayer.totalYellowCards();
                yellowCardedPlayer.yellowCard = true;
                console.log("In the " + i + " minute " + yellowCardedPlayer.name + " has been booked v " + currentOpposition);
            } else if (yellowCardedPlayer.yellowCard && !yellowCardedPlayer.redCard) {
                yellowCardedPlayer.totalYellowCards();
                yellowCardedPlayer.totalRedCards();
                yellowCardedPlayer.redCard = true;
                console.log("In the " + i + " minute " + yellowCardedPlayer.name + " has been given a second yellow card and therefore sent off v " + currentOpposition);
            }

        }
    
        this.scoreAGoal = function () {
            var scorer = this.players[getRandom(0, this.players.length - 1)];
            if (!scorer.redCard) {            
                scorer.totalGoals();
                console.log("In the " + i + " minute " + scorer.name + " has scored v " + currentOpposition);
                var assisting = this.players[getRandom(0, this.players.length - 1)];
                if (scorer && calculatePercent(33)) {
                    assisting.totalAssists();
                    console.log("In the " + i + " minute " + assisting.name + " has created a goal v " + currentOpposition);
                }
            }
        }

        for (var i = 0; i < 90; i++) {
            if (opposingTeam[0]) {
                if (calculatePercent(0.8)) {
                    this.getARedCard()
                } else if (calculatePercent(3)) {
                    this.getAYellowCard();
                } else if (calculatePercent(5)) {
                    this.scoreAGoal();
                } 
            }
            
            else if (opposingTeam[1]) {
                if (calculatePercent(0.5)) {
                    this.getARedCard();
                } else if (calculatePercent(2)) {
                    this.getAYellowCard();
                } else if (calculatePercent(15)) {
                    this.scoreAGoal()
                }
            }
        
            else if (opposingTeam[2]) {
                if (calculatePercent(0.3)) {
                    this.getARedCard();
                } else if (calculatePercent(1)) {
                    this.getAYellowCard();
                } else if (calculatePercent(30)) {
                    this.scoreAGoal();
                }
            }
            }
    }


    this.calculateTotalPoints = function() {
        for (var i = 0; i < this.players.length; i++) {
        var playerPoints = this.players[i];
        playerPoints.totalPoints();
        }
    }

    this.generateFans = function() {
        for (var i = 0; i < getRandom(this.stadium.capacity * 0.3, this.stadium.capacity * 0.6); i++) {
            var fan = new Fan(i);
            this.fans.push(fan);
        }
    }
    this.generateFans();

    this.generatePlayers = function() {
        for (var i = 0; i < 22; i++) {
            var player = new Player(i);
            this.players.push(player);
        }
    }
    this.generatePlayers();

    this.starPLayer = function() {
        var starPlayer = new Player("Star " + getRandom(23, 99));
        this.players.push(starPlayer);
        return starPlayer;
    }
    
    this.fillStadiumWithFans = function() {
       this.stadium.setFans(this.fans);
       this.stadium.fillStadium();
    }
    this.fillStadiumWithFans();

    this.celarCards = function() {
        for(var i = 0; i < this.players.length; i++) {
            this.players[i].yellowCard = false;
            this.players[i].redCard = false;
        }
    }

    this.determineLowestScoringPlayer = function() {
        lowestPoints = this.players[0].points;
        lowestPointsPLayer = null;
        lowestPointsPlayerIndex = 0;
        for (var i = 0; i < this.players.length; i++) {
            if (lowestPoints >= this.players[i].points) {
            lowestPoints = this.players[i].points;
            lowestPointsPLayer = this.players[i].name;
            lowestPointsPlayerIndex = i;    
            }
        } console.log("Lowest scoring player is " + lowestPointsPLayer + " with " + lowestPoints + " points" + " and has been sacked from the team");
        this.players.splice(lowestPointsPlayerIndex, 1);
        var newStarPlayerAdded = this.starPLayer();
        console.log(newStarPlayerAdded.name + " has been added to the squad");
    }

    this.calculateTotalProfit = function() {
        var tickets = (this.stadium.fans.length + this.stadium.spectators) * this.stadium.ticketPrice
        var fanShop = ((this.stadium.fans.length + this.stadium.spectators) * 0.20) * this.fanShop.item;
        var hooliganDamage = getRandom(0, (tickets + fanShop));
        var totalProfit = tickets + fanShop - hooliganDamage;
        this.profit = totalProfit;
        return hooliganDamage;
    }

    this.init = function () {
        for (var i = 1; i <= 38; i++) {
            this.playMatch(i);
            this.calculateTotalPoints();
            this.calculateTotalProfit();
            this.celarCards();
            if (i % 8 === 0) {
                this.determineLowestScoringPlayer();
            }
        }
    }
}