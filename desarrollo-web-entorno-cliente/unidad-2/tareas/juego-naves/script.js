function initCanvas() {
    // Declaring variables
    var ctx = document.getElementById('my_canvas').getContext('2d');
    const CANVAS_WIDTH = ctx.canvas.width;      // 700px
    const CANVAS_HEIGHT = ctx.canvas.height;    // 600px

    var background_img = new Image();
    var player_spr = new Image();
    var enemy_small_spr = new Image();
    var enemy_big_spr = new Image();

    // Setting game sprites
    background_img.src = 'img/background.png';
    player_spr.src = 'img/player.png';
    enemy_small_spr.src = 'img/enemy_small.png';
    enemy_big_spr.src = 'img/enemy_big.png';

    // Setting enemy template
    var enemyTemplate = function(options) {
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
    var enemies = [
        // Small enemy type
        new enemyTemplate({id: '1', x: 100, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '2', x: 225, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '3', x: 350, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '4', x: 475, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '5', x: 600, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '6', x: 100, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '7', x: 225, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '8', x: 350, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '9', x: 475, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '10', x: 600, y: -70, w: 50, h: 30}),

        // Big enemy type
        new enemyTemplate({id: '11', x: 100, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '12', x: 225, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '13', x: 350, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '14', x: 475, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '15', x: 600, y: -220, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '16', x: 100, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '17', x: 225, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '18', x: 350, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '19', x: 475, y: -270, w: 50, h: 30, image: enemy_big_spr}),
        new enemyTemplate({id: '20', x: 600, y: -270, w: 50, h: 30, image: enemy_big_spr}),
    ];

    var RenderEnemies = function(enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            var enemy = enemyList[i];
            ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
        }
    }

    function Launcher() {
        this.x = CANVAS_WIDTH * .5
        this.y = 500,
        this.w = 100,
        this.h = 100,
        this.speed = 5
        this.direction,
        this.bg = "white",
        this.missiles = [];

        this.render = function() {
            if (this.direction === 'left') {
                this.x -= this.speed
            } else if (this.direction === 'right') {
                this.x += this.speed
            } else if (this.direction === 'down') {
                this.y += this.speed
            } else if (this.direction === 'up') {
                this.y -= this.speed
            }

            ctx.fillStyle = this.bg;
            ctx.drawImage(background_img, 10, 10)
            ctx.drawImage(player_spr, this.x, this.y, 70, 50)
        }
    }

    var launcher = new Launcher()

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        launcher.render()
        RenderEnemies(enemies)
    }
    
    var animateInterval = setInterval(animate, 6)

    document.addEventListener('keydown', function(event){
        if (event.key === 'ArrowLeft') {
            launcher.direction = 'left'
            if (launcher.x < CANVAS_WIDTH*.2) {
                launcher.x += 0
                launcher.direction = ''
            }
        }
    })

    document.addEventListener('keyup', function(event){
        if (event.key == 'ArrowLeft') {
            launcher.x += 0;
            launcher.direction = ''
        }
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
         launcher.direction = 'right';
         if (launcher.x > CANVAS_WIDTH) {
            launcher.x -= 0;
            launcher.direction = '';
         }
        
        }
    });

    document.addEventListener('keyup', function(event){
        if (event.key == 'ArrowRight') {
            launcher.x += 0;
            launcher.direction = ''
        }
    })

    document.addEventListener('keydown', function(event){
        if(event.key === 'ArrowUp') {
            launcher.direction = 'up';  
            if (launcher.y < CANVAS_HEIGHT*.2) {
                launcher.y += 0;
                launcher.direction = '';
           }
        }
   });

   document.addEventListener('keyup', function(event){
        if (event.key === 'ArrowUp') {
            launcher.y -= 0;
            launcher.direction = '';
        }
   });

   document.addEventListener('keydown', function(event){
        if(event.key === 'ArrowDown') {
            launcher.direction = 'down';  
            if (launcher.y > CANVAS_HEIGHT){
                launcher.y -= 0;
                launcher.direction = '';
          }
        }
   });
   document.addEventListener('keyup', function(event){
        if (event.key === 'ArrowDown') {
            launcher.y += 0;
            launcher.direction = '';
        }
   });
}

window.addEventListener('load', function(event) {
    initCanvas()
});