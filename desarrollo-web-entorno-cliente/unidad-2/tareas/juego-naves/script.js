function initCanvas() {
    // Setting variables
    let ctx = document.getElementById('my_canvas').getContext('2d');
    let background_img = new Image();
    let player_spr = new Image();
    let enemy_small_spr = new Image();
    let enemy_big_spr = new Image();

    // Setting game sprites
    background_img.src = '/img/background.png';
    player_spr.src = '/img/player.png';
    enemy_small_spr.src = '/img/enemy_small.png';
    enemy_big_spr.src = '/img/enemy_big.png';

    // Setting constants
    const CANVAS_WIDTH = ctx.canvas.width;      // 700px
    const CANVAS_HEIGHT = ctx.canvas.height;    // 600px

    // Setting enemy template
    let EnemyTemplate = function(options) {
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemy_small_spr
        }
    }

    // Setting enemies group
    let enemies = [
        // Small enemy type
        new EnemyTemplate({id: '1', x: 100, y: -20, w: 50, h: 30}),
        new EnemyTemplate({id: '2', x: 225, y: -20, w: 50, h: 30}),
        new EnemyTemplate({id: '3', x: 350, y: -20, w: 50, h: 30}),
        new EnemyTemplate({id: '4', x: 475, y: -20, w: 50, h: 30}),
        new EnemyTemplate({id: '5', x: 600, y: -20, w: 50, h: 30}),
        new EnemyTemplate({id: '6', x: 100, y: -70, w: 50, h: 30}),
        new EnemyTemplate({id: '7', x: 225, y: -70, w: 50, h: 30}),
        new EnemyTemplate({id: '8', x: 350, y: -70, w: 50, h: 30}),
        new EnemyTemplate({id: '9', x: 475, y: -70, w: 50, h: 30}),
        new EnemyTemplate({id: '10', x: 600, y: -70, w: 50, h: 30}),

        // Big enemy type
        new EnemyTemplate({id: '11', x: 100, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '12', x: 225, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '13', x: 350, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '14', x: 475, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '15', x: 600, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '16', x: 100, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '17', x: 225, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '18', x: 350, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '19', x: 475, y: -200, w: 50, h: 30, image: enemy_big_spr}),
        new EnemyTemplate({id: '20', x: 600, y: -200, w: 50, h: 30, image: enemy_big_spr}),
    ];

    let RenderEnemies = function(enemyList) {
        for (let i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            Launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    function Launcher() {
        this.y = 500,
        this.x = CANVAS_WIDTH * 0.5 - 25,
        this.w = 100,
        this.h = 100,
        this.direction,
        this.bg = 'white',
        this.missiles = []

        this.gameStatus = {
            over: false,
            message: '',
            fillStyle: 'white',
            font: 'italic bold 36px Arial, sans-serif'
        };

        this.render = function() {
            if (this.direction === 'left') {
                this.x -= 5;
            } else if (this.direction === 'right') {
                this.x += 5;
            } else if (this.direction === 'up_arrow') { 
                this.y -= 5;
            } else if (this.direction === 'down_arrow') {
                this.y += 5;
            }
        }
    }

    window.addEventListener('load', function(event) {
        initCanvas()
    });
}