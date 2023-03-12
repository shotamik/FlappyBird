

let CREDITS = 500;



let afterGameCredit = CREDITS + 50;

let wallPool = [];


let XVELOCITY = 50;





class Scenes2 extends Phaser.Scene{
    constructor(){
        super('PlayGameHard');
    }


    preload(){
        this.load.image('player', 'assets/images/bird.png');
        this.load.image('wall', 'assets/images/column.png');
        this.load.image('background', 'assets/images/background.png')
        this.load.image('gameover', 'assets/images/gameover.png')
        this.load.image("restartbtn", "assets/images/startbtn.png");
    }

    create(){
        this.background = this.add.image(0, 0, "background");
        this.background.displayWidth = 2000;
        this.background.displayHeight = 1400;
        this.obstaclesQuantity();
        this.setCredits();



        this.wallGroup = this.physics.add.group();


        this.wallPool = [];
        for(let i = 0; i < WALLCOUNTER; i++){
            this.wallPool.push(this.wallGroup.create(0, 0, 'wall'));
            this.wallPool.push(this.wallGroup.create(0, 0, 'wall'));
            this.placeWalls(false);
        }


        this.wallGroup.setVelocityX(-gameOptions.playerSpeed);
        this.player = this.physics.add.image(80, game.config.height / 2, 'player');
        this.player.body.gravity.y = gameOptions.playerGravity;
        this.input.on('pointerdown', this.flap, this);



        this.wallGroup.getChildren().forEach(function(wall){

            if(wall.getBounds().right < this.player.x){

                this.scene.pause();

                if(this.wallPool.length == 2){
                    this.placeWalls(true);
                }
            }
        }, this);





    }



    placeWalls(addScore){
        let rightmost = this.getRightmostWall();
        let wallHoleHeight = Phaser.Math.Between(gameOptions.wallHole[0], gameOptions.wallHole[1]);
        let wallHolePosition = Phaser.Math.Between(gameOptions.minWallHeight + wallHoleHeight / 2, game.config.height - gameOptions.minWallHeight - wallHoleHeight / 2);
        this.wallPool[0].x = rightmost + this.wallPool[0].getBounds().width + Phaser.Math.Between(gameOptions.wallDistance[0], gameOptions.wallDistance[1]);
        this.wallPool[0].y = wallHolePosition - wallHoleHeight / 2;
        this.wallPool[0].setOrigin(0, 1).setImmovable();
        this.wallPool[1].x = this.wallPool[0].x;
        this.wallPool[1].y = wallHolePosition + wallHoleHeight / 2;
        this.wallPool[1].setOrigin(0, 0).setImmovable();
        this.wallPool = [];

    }
    flap(){
        this.player.body.velocity.y = -gameOptions.playerFlapPower;
        this.player.body.velocity.x = XVELOCITY;

    }
    getRightmostWall(){
        let rightmostWall = 0;
        this.wallGroup.getChildren().forEach(function(wall){
            rightmostWall = Math.max(rightmostWall, wall.x);
        });
        return rightmostWall;
    }





    

    update(){
        

        this.physics.world.collide(this.player, this.wallGroup, function(){

            this.gameOver();
        }, null, this);
        if(this.player.y > game.config.height || this.player.y < 0){
            this.die();
        }

        let restartbtn = this.add.image(50, 50, 'restartbtn').setDepth(10);
        restartbtn.setInteractive();
        restartbtn.on('pointerdown', function(pointer) {

            this.scene.start("bootGame");

        }, this)
           
            
        this.wallGroup.getChildren().forEach(function(wall){


            let columnPos = 0;
            
            if(WALLCOUNTER == 4){
                let columnPos = WALLCOUNTER * -135;
                if(wall.getBounds().right < columnPos){

                    this.gameWon();  


                    this.scene.restart();

                }
            };


            if(WALLCOUNTER == 5){
                let columnPos = WALLCOUNTER * -140;
                if(wall.getBounds().right < columnPos){

                    this.gameWon();  


                    this.scene.restart();

                }
            };

            if(WALLCOUNTER == 6){
                let columnPos = WALLCOUNTER * -150;
                if(wall.getBounds().right < columnPos){

                    this.gameWon();  
                    this.scene.restart();


                }
            };


        }, this);

    }



    die(){
        
        this.scene.start('PlayGameHard');
        CREDITS -= 50;

    }

    gameOver() {
        CREDITS -= 50;

        let img = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'gameover').setDepth(9).setScale(1.5);
        this.physics.pause();
        
        let restartbtn = this.add.image(50, 50, 'restartbtn').setDepth(10);
        restartbtn.setInteractive();
        restartbtn.on('pointerdown', function(pointer) {
            this.scene.start("bootGame");


        }, this)



    }

    setCredits(){
        let style = { font: "bold 32px Arial", fill: "#fff" }
        this.add.text(config.width / 2 + 290, 30, `Credits: ${CREDITS}`, style).setDepth(4);
        
    }

    obstaclesQuantity (){
        let style = { font: "bold 32px Arial", fill: "#fff" }
        this.add.text(config.width / 2 + 290, 60, `Obstacles: ${WALLCOUNTER}`, style).setDepth(4);

    }



    gameWon(){

        CREDITS += 25;
        
        
        let style = { font: "bold 32px Arial", fill: "#000" };
        this.add.text(config.width / 2 - 100, config.height / 2, "YOU WON", style).setDepth(5);
        this.physics.pause();
        let restartbtn = this.add.image(50, 50, 'restartbtn').setDepth(10);
        restartbtn.setInteractive();
        restartbtn.on('pointerdown', function(pointer) {
            this.scene.start("bootGame");

        }, this)

    }




}