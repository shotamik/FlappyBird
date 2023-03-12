

var gameOptions = {
 
    // bird gravity, will make bird fall if you dont flap
    playerGravity: 800,
 
    // horizontal bird speed
    playerSpeed: 125,

 
    // flap thrust
    playerFlapPower: 300,
 
    // minimum pipe height, in pixels. Affects hole position
    minWallHeight: 50,
 
    // distance range from next pipe, in pixels
    wallDistance: [150, 151],
 
    // hole range between pipes, in pixels
    wallHole:  [100, 105],

    wallHoleEasygame: [220, 250],
};

const config = {
    width: 1000,
    height: 700,
    backgroundColor: 0x000000,
    scene: [Scene1, Scenes2, Scenes3],
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

 

var game = new Phaser.Game(config);