// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor (name, topSpeed){
        this.name =name
        this.topSpeed =topSpeed
    }

    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const batShip = new SpaceShip('The Batwing', 100)
const deathStar = new SpaceShip('The Death Star', 20)
batShip.accelerate();
deathStar.accelerate();
