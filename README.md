🐦 Flappy Bird – HTML5 Canvas Game

A browser-based Flappy Bird clone developed using HTML5, CSS3, and vanilla JavaScript.
This project demonstrates core game development concepts such as real-time rendering, physics simulation, collision detection, and difficulty scaling using the Canvas API.

🔗 Live Demo:
👉 https://aarav12e.github.io/flappy_bird_Demo/

📌 Project Overview


This project recreates the classic Flappy Bird gameplay in a clean, modern web interface.
It focuses on clarity of logic, performance, and maintainable code structure, making it suitable as a learning project as well as a portfolio showcase.

<img width="1256" height="968" alt="Flappy Bird - Brave 24-12-2025 23_23_59" src="https://github.com/user-attachments/assets/890308de-6f28-4f41-a184-6166abc910b5" />

🚀 Features

HTML5 Canvas-based rendering
Real-time gravity & flap physics
Random pipe generation
Accurate collision detection
Live score tracking
Multiple difficulty levels
Easy
Medium
Hard
Keyboard input support (Spacebar)
Game restart functionality
Responsive and modern UI

flappy_bird_Demo/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and UI layout
├── main.js         # Core game logic
└── README.md       # Documentation


🧠 Technical Explanation
1. HTML (index.html)
Defines the UI layout and controls
Hosts the <canvas> element used for rendering the game
Connects external CSS and JavaScript files
The canvas is dynamically drawn and updated by JavaScript to ensure smooth gameplay.

2. JavaScript (main.js)
Game State Management
The game maintains internal states such as:
Frame count
Score
Active pipes
Game start and game over flags
This ensures proper control over gameplay flow.
Bird Physics
Gravity continuously pulls the bird downward
Flapping applies upward velocity
Position updates occur every animation frame
This creates realistic movement behavior.



#Difficulty System#
Difficulty levels dynamically adjust:
Gravity
Flap strength
Pipe gap size
Pipe speed
Pipe spawn rate
This allows a scalable challenge without duplicating code.
Pipe Generation & Collision Detection
Pipes are spawned at intervals with randomized heights
Collision is detected using rectangle overlap logic
Score increases when pipes move off-screen


#Game Loop#
The game uses requestAnimationFrame() to:
Update physics
Render objects
Maintain a consistent frame rate
Stop execution upon game over



3. CSS (style.css)
Modern dark-themed UI
Gradient buttons and rounded panels
Responsive layout for small screens
Clear visual separation between game and controls
CSS is designed to enhance usability without interfering with canvas rendering.


👨‍💻 *Author*

Aarav Kumar
BTech Student | Web & Game Development
📍 India

If you find this project useful, feel free to ⭐ star the repository.

