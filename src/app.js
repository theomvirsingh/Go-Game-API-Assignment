const express = require('express');
const app = express();

app.get('/:p1/:p2/:p3', (req, res) => {
    const p1 = parseInt(req.params.p1, 10);
    const p2 = parseInt(req.params.p2, 10);
    const p3 = parseInt(req.params.p3, 10);

    if ([p1, p2, p3].some(p => isNaN(p) || p < 0 || p > 30)) {
        return res.status(400).json({ max_draws: -1 });
    }

    if (!(p1 <= p2 && p2 <= p3)) {
        return res.status(400).json({ max_draws: -1 });
    }

    const maxDraws = calculateMaxDraws(p1, p2, p3);
    res.json({ max_draws: maxDraws });
});

function calculateMaxDraws(p1, p2, p3) {
    const totalPoints = p1 + p2 + p3;
  
    if (totalPoints % 2 !== 0) {
      // Total points must be even for a valid game
      return -1;
    }
  
    const gamesPlayed = totalPoints / 2;
  
    if (p3 > gamesPlayed || (p1 + p2 + p3) > gamesPlayed) {
      // The third player cannot have more wins than total games played,
      // and the sum of all wins cannot exceed total games
      return -1;
    }
  
    const wins = p3;
    // Handle zero wins for players 1 or 2
    const draws = Math.max(gamesPlayed - wins, (p1 === 0 || p2 === 0) ? gamesPlayed : 0);
  
    return draws;
  }
  

module.exports = app;