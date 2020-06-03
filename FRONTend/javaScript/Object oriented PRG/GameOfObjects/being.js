function Being() {
    this.isAlive = true;

    this.checkHealth = function() {
        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
    // everyone is a being
}