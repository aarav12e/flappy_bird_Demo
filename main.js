const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

let frames = 0;
let pipes = [];
let score = 0;
let gameOver = false;
let gameStarted = false;

// Game settings (will change based on difficulty)
let gravity = 0.4;
let lift = -8;
let pipeGap = 160;
let pipeSpeed = 1.5;
let pipeSpawnRate = 110;

const startBtn = document.getElementById("startBtn");
const scoreDisplay = document.querySelector(".score");
const difficultyButtons = document.querySelectorAll(".difficulty button");

const bird = {
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    velocity: 0,
    draw() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update() {
        this.velocity += gravity;
        this.y += this.velocity;

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
            gameOver = true;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    },
    flap() {
        this.velocity = lift;
    }
};

// ✅ Difficulty settings
const difficulties = {
    easy: { gravity: 0.4, lift: -8, gap: 160, speed: 1.5, spawn: 110 },
    medium: { gravity: 0.6, lift: -10, gap: 140, speed: 2, spawn: 95 },
    hard: { gravity: 0.8, lift: -12, gap: 120, speed: 2.5, spawn: 80 }
};

// Change difficulty
difficultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const level = btn.getAttribute("data-level");
        const settings = difficulties[level];

        gravity = settings.gravity;
        lift = settings.lift;
        pipeGap = settings.gap;
        pipeSpeed = settings.speed;
        pipeSpawnRate = settings.spawn;

        resetGame();
        startBtn.textContent = `Start (${level})`;
    });
});

// ✅ Space key flaps
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        if (gameStarted && !gameOver) {
            bird.flap();
        }
    }
});

// ✅ Start button event
startBtn.addEventListener("click", (e) => {
    resetGame();
    gameStarted = true;
    animate();
    e.target.blur();
});

function resetGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    frames = 0;
    gameOver = false;
    scoreDisplay.textContent = score;
}

function drawBackground() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPipes() {
    ctx.fillStyle = "green";
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + pipe.gap, pipe.width, canvas.height);
    });
}

function updatePipes() {
    if (frames % pipeSpawnRate === 0) {
        const top = Math.random() * (canvas.height / 2);
        pipes.push({ x: canvas.width, width: 40, top: top, gap: pipeGap });
    }

    pipes.forEach(pipe => {
        pipe.x -= pipeSpeed;

        if (pipe.x + pipe.width < 0) {
            pipes.shift();
            score++;
            scoreDisplay.textContent = score;
        }

        // Collision detection
        if (
            bird.x < pipe.x + pipe.width &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.top || bird.y + bird.height > pipe.top + pipe.gap)
        ) {
            gameOver = true;
        }
    });
}

function drawBird() {
    bird.draw();
}

function drawGameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over!", 110, 220);
    ctx.font = "22px Arial";
    ctx.fillText(`Your Score: ${score}`, 120, 260);
    ctx.font = "18px Arial";
    ctx.fillText("Press Start to Play Again", 90, 300);
}

function animate() {
    if (gameOver) {
        drawGameOver();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawPipes();
    updatePipes();
    bird.update();
    drawBird();

    frames++;
    requestAnimationFrame(animate);
}
