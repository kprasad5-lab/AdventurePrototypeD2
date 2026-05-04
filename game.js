class Room1 extends AdventureScene {
    constructor() {
        super("room1", "First Room");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('portalScene', 'PortalScene.png');
        this.load.image('wizardGirl', 'WizardGirl.png');
        this.load.image('leftArrow', 'leftArrow.png');
        this.load.image('rightArrow', 'rightArrow.png');
        this.load.image('upArrow', 'upArrow.png');
        this.load.image('downArrow', 'downArrow.png');
        this.load.image('Map', 'Map.png');
    }

    onEnter() {

        this.portalBackground = this.add.image(870, 600, 'portalScene');
        this.portalBackground.setScale(0.7);

        this.startingText = this.add.text(600, 950, "Click Anywhere to Start...", {
            fontFamily: "labyrinth",
            fontSize: "50px",
            color: "#8d7e81"}
        );
        this.startingText.setDepth(1);

        this.input.once('pointerdown', () => {
            this.startingText.destroy();
            this.wizardGirl = this.add.image(510, 720, 'wizardGirl');
            this.wizardGirl.setScale(0.4);
            this.startingText = this.add.text(550, 950, "\"Hello, Jawan. I hope you recieved the mission brief.\"", {
            fontFamily: "labyrinth",
            fontSize: "50px",
            color: "#9e9fe5"}
        );
        this.incomingThoughtsTween();
            
            this.input.once('pointerdown', () => {
                this.startingText.destroy();
                this.startingText = this.add.text(1180, 950, "...What is she talking about?", {
                fontFamily: "labyrinth",
                fontSize: "50px",
                color: "#cba9d6"}

            );
            this.incomingThoughtsTween();

                this.input.once('pointerdown', () => {
                    this.startingText.destroy();
                    this.startingText = this.add.text(550, 950, "\"Once you return, you cannot go back.\"", {
                    fontFamily: "labyrinth",
                    fontSize: "50px",
                    color: "#9e9fe5"}
                );
                this.incomingThoughtsTween();
                    
                    this.input.once('pointerdown', () => {
                        this.startingText.destroy();
                        this.startingText = this.add.text(550, 950, "\"If you're successful, your payment will be generous.\"\"", {
                        fontFamily: "labyrinth",
                        fontSize: "50px",
                        color: "#9e9fe5"}
                    );
                    this.incomingThoughtsTween();
                        
                        this.input.once('pointerdown', () => {
                            this.startingText.destroy();
                            this.startingText = this.add.text(1180, 950, "\"Payment? ...Say less.\"", {
                            fontFamily: "labyrinth",
                            fontSize: "50px",
                            color: "#cba9d6"}
                        );
                        this.incomingThoughtsTween();
                            
                            this.input.once('pointerdown', () => {
                                this.outgoingThoughtsTween();
                                this.startingText.destroy();
                                this.upArrow = this.add.image(870, 950, 'upArrow').setScale(0.4);
                                this.upArrow.setInteractive({useHandCursor: true});
                                this.upArrow.on('pointerover', () => {
                                    this.showMessage("Go Forward");
                                });  
                                this.upArrow.on('pointerdown', () => {
                                    this.tweens.add({
                                        targets: this.upArrow,
                                        alpha: { from: 1, to: 0 },
                                        duration: 1000
                                    });
                                    this.upArrow.destroy();
                                    this.startingText.destroy();
                                    this.startingText = this.add.text(550, 950, "\"Wait! I almost forgot...this map will prove useful.\"\"", {
                                    fontFamily: "labyrinth",
                                    fontSize: "50px",
                                    color: "#9e9fe5"}
                                    );

                                    this.incomingThoughtsTween();
                                    this.time.delayedCall(0, () => {
                                       this.input.once('pointerdown', () => { 
                                        this.startingText.destroy();
                                        this.showMessage("You take the map.");
                                        this.gainItem('Map');
                                        this.showInventory('slot', 'Map');
                                        this.time.delayedCall(1500, () => {
                                        this.gotoScene('room2');
                                        });
                                       });
                                    });
                             
                                });
                            });

                                
        });              
        });
        });
        });
        });      


        /*let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('Room2');
                }
            }) */

    }

    incomingThoughtsTween() {
        this.tweens.add({
            targets: this.startingText,
            alpha: { from: 0, to: 1 },
            duration: 500
        });
    }

    outgoingThoughtsTween() {
        this.tweens.add({
            targets: this.startingText,
            alpha: { from: 1, to: 0 },
            duration: 1000
        });
    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("room2", "The second room has a long name (it truly does).");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('mainScene', 'MainScene.png');
        this.load.image('moon', 'moon.png');
        this.load.image('arrow', 'arrow1.png');
        this.load.image('Gibbous Shroom', 'Gibbous Shroom.png');
        this.load.image('slot', 'inventorySlot.png');

    }

    onEnter() {
        this.mainBackground = this.add.image(870, 600, 'mainScene');
        this.mainBackground.setScale(0.7);

        this.moon = this.add.image(610, 350, 'moon')
            .setScale(0.2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A beautiful moon, perfectly mounted above the sunset.");
            });
        
            if (!this.hasItem('Gibbous Shroom')) {
                this.gibbousShroom = this.add.image(130, 1020, 'Gibbous Shroom')
                .setScale(0.1)
                .setInteractive({useHandCursor: true})
                .on('pointerover', () => {
                    this.showMessage("Mushrooms! I wonder if this could be used for anything...");
                })
                .on('pointerdown', () => {
                    this.showMessage("You pick up the mushroom.");
                    this.gainItem('Gibbous Shroom');
                    this.tweens.add({
                        targets: this.gibbousShroom,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => this.gibbousShroom.destroy()
                    });
                    this.showInventory();
                });
            }

        this.backArrow = this.add.image(870, 980, 'arrow').setScale(0.3);
        this.backArrow.setFlipY(true);
        this.backArrow.setInteractive({useHandCursor: true});
        this.backArrow.on('pointerover', () => {
            this.showMessage("End mission");
        });  
        this.backArrow.on('pointerdown', () => {
            this.gotoScene('room1Return');
        });

        this.leftArrow = this.add.image(110, 530, 'arrow').setScale(0.3);
        this.leftArrow.setRotation(-Math.PI / 2);
        this.leftArrow.setInteractive({useHandCursor: true});
        this.leftArrow.on('pointerover', () => {
            this.showMessage("Delve into the forest");
        });  
        this.leftArrow.on('pointerdown', () => {
            this.gotoScene('room2');
        });

        this.forwardArrow = this.add.image(870, 110, 'arrow').setScale(0.3);
        this.forwardArrow.setInteractive({useHandCursor: true});
        this.forwardArrow.on('pointerover', () => {
            this.showMessage("Go for a swim");
        });

        this.rightArrow = this.add.image(1620, 530, 'arrow').setScale(0.3);
        this.rightArrow.setRotation(Math.PI / 2);
        this.rightArrow.setInteractive({useHandCursor: true});
        this.rightArrow.on('pointerover', () => {
            this.showMessage("Explore east");
        });

        /*this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('room2return');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));*/
    }
}

class Room1Return extends AdventureScene {
    constructor() {
        super("room1Return", "");
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('portalScene', 'PortalScene.png');
        this.load.image('wizardGirl', 'WizardGirl.png');
    }

    onEnter() {
        this.portalBackground = this.add.image(870, 600, 'portalScene');
        this.portalBackground.setScale(0.7);
        this.wizardGirl = this.add.image(510, 720, 'wizardGirl');
        this.wizardGirl.setScale(0.4);
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "To be continued...").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1730,
        height: 1080
    },
    scene: [Room1, Room2, Room1Return],
    title: "Adventure Game",
});

