
let sceneName;
let WALLCOUNTER = Phaser.Math.Between(4, 6);;
let WALLCOUNTEREASY = Phaser.Math.Between(7, 10);



class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("startbtn", "assets/images/startbtn.png");
        this.load.image("background", "assets/images/background.png");

        this.load.image("player", "assets/images/bird.png")
        this.load.image("column", "assets/images/column.png");
        this.load.image("logo", "assets/images/logo.png");


    }

    create(){
        this.setCredits();
        let sceneName = this.getRandomScene();
        let startbtn = this.add.image(this.game.config.width / 2, this.game.config.height / 3, 'startbtn').setDepth(3).setScale(2);
        startbtn.setInteractive();
        startbtn.on('pointerdown', function(pointer) {
            this.scene.start(sceneName);
        }, this)

        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.displayWidth = 2000;
        this.background.displayHeight = 1400;
        this.player = this.add.image(this.game.config.width / 2 - 30, this.game.config.height / 2,  "player").setOrigin(0);
        let logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2 + 140, "logo").setScale(0.1)


    }


    //custom functions

    setCredits (){
        let style = { font: "bold 32px Arial", fill: "#fff" }
        this.add.text(config.width / 2 + 290, 30, `Credits: ${CREDITS}`, style).setDepth(4);
    }

    getRandomScene(){
        switch (Phaser.Math.Between(0, 99)) {
            case 0:
                return 'PlayGameHard'
            case 1:
                return 'PlayGameHard'
            case 2:
                return 'PlayGameHard'
            case 3:
                return 'PlayGameHard'
            case 4:
                return 'PlayGame'
            case 5:
                return 'PlayGame'
            case 6:
                return 'PlayGame'
            case 7:
                return 'PlayGame'
            case 8:
                return 'PlayGame'
            case 9:
                return 'PlayGame'
            case 10:
                return 'PlayGame'
            case 11:
                return 'PlayGame'
            case 12:
                return 'PlayGame'
            case 13:
                return 'PlayGame'
            case 14:
                return 'PlayGame'
            case 15:
                return 'PlayGame'
            case 16:
                return 'PlayGame'
            case 17:
                return 'PlayGame'
            case 18:
                return 'PlayGame'
            case 19:
                return 'PlayGame'
            case 20:
                return 'PlayGame'
            case 21:
                return 'PlayGame'
            case 22:
                return 'PlayGame'
            case 23:
                return 'PlayGame'
            case 24:
                return 'PlayGame'
            case 25:
                return 'PlayGame'
            case 26:
                return 'PlayGame'
            case 27:
                return 'PlayGame'
            case 28:
                return 'PlayGame'
            case 29:
                return 'PlayGame'
            case 30:
                return 'PlayGame'
            case 31:
                return 'PlayGame'
            case 32:
                return 'PlayGame'
            case 33:
                return 'PlayGame'
            case 34:
                return 'PlayGame'
            case 35:
                return 'PlayGame'
            case 36:
                return 'PlayGame'
            case 37:
                return 'PlayGame'
            case 38:
                return 'PlayGame'
            case 39:
                return 'PlayGame'
            case 40:
                return 'PlayGame'
            case 41:
                return 'PlayGame'
            case 42:
                return 'PlayGame'
            case 43:
                return 'PlayGame'
            case 44:
                return 'PlayGame'
            case 45:
                return 'PlayGame'
            case 46:
                return 'PlayGame'
            case 47:
                return 'PlayGame'
            case 48:
                return 'PlayGame'
            case 49:
                return 'PlayGame'
            case 50:
                return 'PlayGame'
            case 51:
                return 'PlayGame'
            case 52:
                return 'PlayGame'
            case 53:
                return 'PlayGame'
            case 54:
                return 'PlayGame'
            case 55:
                return 'PlayGame'
            case 56:
                return 'PlayGame'
            case 57:
                return 'PlayGame'
            case 58:
                return 'PlayGame'
            case 59:
                return 'PlayGame'
            case 60:
                return 'PlayGame'
            case 61:
                return 'PlayGame'
            case 62:
                return 'PlayGame'
            case 63:
                return 'PlayGame'
            case 64:
                return 'PlayGame'
            case 65:
                return 'PlayGame'
            case 66:
                return 'PlayGame'
            case 67:
                return 'PlayGame'
            case 68:
                return 'PlayGame'
            case 69:
                return 'PlayGame'
            case 70:
                return 'PlayGame'
            case 71:
                return 'PlayGame'
            case 72:
                return 'PlayGame'
            case 73:
                return 'PlayGame'
            case 74:
                return 'PlayGame'
            case 75:
                return 'PlayGame'
            case 76:
                return 'PlayGame'
            case 77:
                return 'PlayGame'
            case 78:
                return 'PlayGame'
            case 79:
                return 'PlayGame'
            case 80:
                return 'PlayGame'
            case 81:
                return 'PlayGame'
            case 82:
                return 'PlayGame'
            case 83:
                return 'PlayGame'
            case 84:
                return 'PlayGame'
            case 85:
                return 'PlayGame'
            case 86:
                return 'PlayGame'
            case 87:
                return 'PlayGame'
            case 88:
                return 'PlayGame'
            case 89:
                return 'PlayGame'
            case 90:
                return 'PlayGame'
            case 91:
                return 'PlayGame'
            case 92:
                return 'PlayGame'
            case 93:
                return 'PlayGame'
            case 94:
                return 'PlayGame'
            case 95:
                return 'PlayGame'
            case 96:
                return 'PlayGame'
            case 97:
                return 'PlayGame'
            case 98:
                return 'PlayGame'
            case 99:
                return 'PlayGame'
            
        }
    }
    

}