# Rift Runner (Team DEWARE, SoftaBlitz 2026)
2D desktop game (Electron + JavaScript + Canvas). Cross-platform: runs on Windows, macOS and Linux.

## Run
    npm install
    npm start
Controls: SPACE / Up / W / mouse click = upward thrust. Test: `npm test`

## Basic problem statement (done)
- B1 Gravitational Pull: gravity + thrust, ground/ceiling ends the run
- B2 Endless Rifts: barriers from the right with random gaps, collision ends the run
- B3 Cycle of Rebirth: +1 per gap, final score on game over, restart with one key press