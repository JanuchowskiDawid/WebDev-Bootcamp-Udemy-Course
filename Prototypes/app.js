String.prototype.yell = function () {
    console.log(this.toUpperCase());
}

function Player(height, weight, skill) {
    this.weight = weight;
    this.height = height;
    this.skill = skill;
}

Player.prototype.slide = function () {
    const skill = this.skill;
    if (skill < 3) return;
    console.log("Success!");
}

const messi = new Player(169, 67, 5);
messi.slide();

const almostMessi = new Player(169, 67, 5);
almostMessi.slide();
