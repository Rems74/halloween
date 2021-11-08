/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-1','assets/level/background-2/bg2-terrain-1.png')
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        for(let b=1;b<=3;b++) {
            this.load.image('bg1-tree-'+b, 'assets/level/background-1/bg-tree-'+b+'.png');
        }
        this.load.image('bg1-grass-4','assets/level/background-1/bg-grass-4.png');
        this.load.image('bg1-stone-5', 'assets/level/background-1/bg-stone-5.png');
        this.load.image('bg1-terrain-2','assets/level/background-1/bg-terrain-2.png');
        this.load.image('bg1-terrain-4','assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-bridge','assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gMush1','assets/level/ground/g-mushroom1.png');
        this.load.image('gBridge','assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2','assets/level/ground/g-box-2.png')
        this.load.image('gBox','assets/level/ground/g-box-1.png')
        for (let g=1;g<=3;g++){
            this.load.image('g-tree-'+g,'assets/level/ground/g-tree-'+g+'.png')
        }
        this.load.image('gWater','assets/level/ground/g-water.png');
        this.load.image('gSpike-1','assets/level/ground/g-spike-1.png');
        this.load.image('gSpike-2','assets/level/ground/g-spike-2.png');
        this.load.image('gStone-4', 'assets/level/ground/g-stone-4.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');

            this.load.image('g-stone-'+i, 'assets/level/ground/g-stone-'+i+'.png');}

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let f=1;f<=3;f++){
            this.load.image ('filterFilm'+f, 'assets/level/filters/film/frame-'+f+'.png')
        }


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let x=1;x<=3;x++){
            this.load.image('bg-animation-'+x, 'assets/level/background-2/bg-animation/bg-animation-'+x+'.png');
        }

        for(let x=1;x<=3;x++){
            this.load.image('frame'+x, 'assets/level/weather/rain/frame'+x+'.png');
        }

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        this.bgAnimationA = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0,0);

        this.anims.create({
            key: 'film2',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'}
            ],
            frameRate: 20,
            repeat: -1});
        this.bgAnimationA.play('film2');

        this.anims.create({
            key: 'film3',
            frames: [
                {key:'frame1'},
                {key:'frame2'},
                {key:'frame3'}
            ],
            frameRate: 16,
            repeat: -1});
        this.bgAnimationA.play('film3');
        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain1=this.add.image( 650, 80, 'bg2-terrain-1').setOrigin( 0, 0);
        bg2Terrain1.scale=1
        this.bg2Container.add(bg2Terrain1);

        let bg2Terrain2=this.add.image(-270,80, 'bg2-terrain-2').setOrigin(0,0);
        bg2Terrain2.scaleX=1.5
        bg2Terrain2.scaleX=1.10
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(400,-50, 'bg2-tree-1').setOrigin(0,0);
        bg2Tree1.scale=0.6
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Tree2=this.add.image(350,-50,'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.scale=0.55
        this.bg2Container.add(bg2Tree2);

        let bg2Tree3=this.add.image(670,-30,'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.scale=0.7
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10;

        let bg2Tree4=this.add.image(900,-30,'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.scale=0.9
        this.bg2Container.add(bg2Tree4);
        bg2Tree4.angle=5;

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-440,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1=this.add.image(700,300, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1.scale=0.5
        this.bg1Container.add(bg1Terrain1);

        let bg1Terrain4=this.add.image(800,250, 'bg1-terrain-4').setOrigin(0,0);
        bg1Terrain4.scale=0.7
        this.bg1Container.add(bg1Terrain4);

        let bg1Terrain5=this.add.image(1600,230, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain5.scale=0.7
        this.bg1Container.add(bg1Terrain5);

        let bgTree1=this.add.image(-30,-60,'bg1-tree-1').setOrigin(0,0);
        bgTree1.scale=0.8
        this.bg1Container.add(bgTree1);

        let bgTree2=this.add.image(880,-80,'bg1-tree-2').setOrigin(0,0);
        bgTree2.angle=2
        bgTree2.flipX=true
        bgTree2.scale=0.8
        this.bg1Container.add(bgTree2);

        let bgTree3=this.add.image(160,-100,'bg1-tree-3').setOrigin(0,0);
        bgTree3.scale=0.7
        this.bg1Container.add(bgTree3);

        let bgTree4=this.add.image(1200,-20,'bg1-tree-3').setOrigin(0,0);
        bgTree4.scale=0.7
        this.bg1Container.add(bgTree4);

        let bgGrass4=this.add.image(600,400, 'bg1-grass-4').setOrigin(0,0);
        bgGrass4.scale=2
        this.bg1Container.add(bgGrass4);

        let bg1Tree1=this.add.image(-30,-60,'bg1-tree-1').setOrigin(0,0);
        bg1Tree1.scale=0.8
        this.bg1Container.add(bg1Tree1);

        let bg1bridge=this.add.image(1320,240,'bg1-bridge').setOrigin(0,0);
        this.bg1Container.add(bg1bridge);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        // let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
        // tree1.setTintFill(0xFF0000); // pratique pour dbugger
        // this.groundContainer.add(tree1);


        let gWater=this.add.tileSprite(400,390,2900,300,'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);

        let gSpike1=this.add.image(430,450,'gSpike-1').setOrigin(0,0);
        this.groundContainer.add(gSpike1);

        let gSpike2=this.add.image(560,430,'gSpike-2').setOrigin(0,0);
        this.groundContainer.add(gSpike2);

        let gSpike3=this.add.image(1350,450,'gSpike-1').setOrigin(0,0);
        this.groundContainer.add(gSpike3);

        let gSpike4=this.add.image(1530,430,'gSpike-2').setOrigin(0,0);
        this.groundContainer.add(gSpike4);

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */

            //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        gMid1.scaleY=2;

        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,355, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid2);
        gMid2.scaleX=1.2;

        /**
         * Terrain 3
         */

        let gLeft=this.add.image(750,360,'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);

        let gMid3=this.add.image(gLeft.x+gLeft.width,360,'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gRight=this.add.image(gMid3.x+gMid3.width,360,'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight);

        let gLeft2=this.add.image(1700,360,'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft2);

        let gMid4=this.add.image(gLeft2.x+gLeft2.width,360,'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid4);

        let gRight2=this.add.image(gMid4.x+gMid4.width,360,'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight2);

        /**
         *  @type {Phaser.GameObjects.Image}
         */

        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass3=this.add.image(120,310, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass5=this.add.image(200,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass2t2=this.add.image(750,340,'g-grass-2').setOrigin(0,0);
        gGrass2t2.scale=0.8
        this.groundContainer.add(gGrass2t2);

        let gGrass5t2=this.add.image(850,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5t2);

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */

        let mumut1=this.add.tileSprite(gLeft.x+gLeft.width,370,350,50,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(mumut1);

        let mumut2=this.add.tileSprite(gLeft.x+gLeft.width,370,350,50,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(mumut2);

        let gTree1t1=this.add.image(20,-150,'g-tree-2').setOrigin(0,0);
        gTree1t1.flipX=true
        this.groundContainer.add(gTree1t1);

        let gTree2t1=this.add.image(280,-10,'g-tree-2').setOrigin(0,0);
        gTree2t1.scale=0.7
        this.groundContainer.add(gTree2t1);

        let gTree1t2=this.add.image(730,-50,'g-tree-1').setOrigin(0,0);
        gTree1t2.scaleY=1.2
        gTree1t2.angle=-15
        this.groundContainer.add(gTree1t2);

        let gTree1t3=this.add.image(1300,-50,'g-tree-1').setOrigin(0,0);
        gTree1t3.scaleY=0.9
        gTree1t3.angle=10
        this.groundContainer.add(gTree1t3);

        let gTree1t4=this.add.image(1700,-150,'g-tree-2').setOrigin(0,0);
        gTree1t4.flipX=true
        gTree1t4.angle=-12
        this.groundContainer.add(gTree1t4);

        let gStone4t1=this.add.image(350,340,'gStone-4').setOrigin(0,0);
        gStone4t1.scale=0.7
        this.groundContainer.add(gStone4t1);

        let gStone4t2=this.add.image(760,340,'gStone-4').setOrigin(0,0);
        this.groundContainer.add(gStone4t2);

        let gStone4t3=this.add.image(1200,340,'gStone-4').setOrigin(0,0);
        this.groundContainer.add(gStone4t3);

        let gMush=this.add.image(150,280,'gMush1').setOrigin(0,0);
        gMush.flipX=true
        this.groundContainer.add(gMush);

        let gBridge=this.add.image(400,295,'gBridge').setOrigin(0,0);
        gBridge.scale=0.8
        gBridge.angle=-1
        this.groundContainer.add(gBridge);

        let gBridge2=this.add.image(1300,295,'gBridge').setOrigin(0,0);
        gBridge2.scale=0.8
        gBridge2.angle=-1
        this.groundContainer.add(gBridge2);

        let gBox2=this.add.image(500,287,'gBox2').setOrigin(0,0);
        gBox2.scale=0.6
        gBox2.angle=3
        this.groundContainer.add(gBox2);

        let gBox2n3=this.add.image(1000,295,'gBox2').setOrigin(0,0);
        gBox2n3.scale=0.7
        this.groundContainer.add(gBox2n3);

        let gBox1=this.add.image(1090,295,'gBox').setOrigin(0,0);
        this.groundContainer.add(gBox1)

        let gBox1n2=this.add.image(1030,210,'gBox').setOrigin(0,0);
        this.groundContainer.add(gBox1n2)
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 4000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=3;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }

}
