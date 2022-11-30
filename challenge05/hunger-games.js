export const hungerGames = (players) => {
  // guard clauses
  if (!Array.isArray(players)) throw new TypeError(`${typeof players} is not an array`);
  if (players.length === 0) return null;
  // Actual logic
  let alivePlayersPositions = [...players.keys()];
  let startPositionOfFirstKiller = 0;
  while (alivePlayersPositions.length > 1) {
    let lastAlivePlayer = alivePlayersPositions.at(-1);
    alivePlayersPositions = alivePlayersPositions.filter((_, a) => a % 2 === startPositionOfFirstKiller);
    startPositionOfFirstKiller = lastAlivePlayer === alivePlayersPositions.at(-1) ? 1 : 0;
  }
  // Extract the winner
  const [winnerPosition] = alivePlayersPositions;
  // Return the winner name and index position
  return [players[winnerPosition], winnerPosition];
};
