# Rift Runner

## About
Rift Runner is a 2D desktop game built with Electron, HTML, CSS, and JavaScript. The player navigates through dimensional barriers while avoiding collisions.

## Features
- Gravity-based movement and upward thrust
- Randomly positioned barriers
- Collision detection
- Score tracking
- Restart functionality

## Tech Stack
- HTML — game structure
- CSS — visual styling
- JavaScript — game logic and rendering
- Electron — desktop application
- Node.js — desktop-side functionality through Electron

## Installation and Setup
1. Clone or download the repository.
2. Install the dependencies:

   `npm install`

3. Start the game:

   `npm start`

## Controls
- Space / Up Arrow / W — move upward
- Mouse click — move upward
- Avoid the barriers and screen boundaries.

## Team
Team Deware


Electron uses Chromium to display your HTML/CSS/JavaScript and Node.js for desktop-side functionality. It provides a similar application framework across Windows, macOS, and Linux.

main.js is the root ..it creates the window and loads preload.js 
preload.js reads the apps name and os , then exposes them as window.riftApp
Frontend -
can read window.riftApp.name and window.riftApp.platform
preload.js as a secure bridge between Electron and our frontend game. It exposes only the application name and operating system information through contextBridge. This lets the frontend access those specific values without enabling direct Node.js access.
the basic idea of logic.test.js is to automatically check whether our game's logic is working correctly without playing the game manually.