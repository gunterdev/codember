export const hungerGames = (players) => {
  // guard clauses
  if (!Array.isArray(players)) throw new TypeError(`${typeof players} is not an array`);
  if (players.length === 0) return null;
  // Actual logic
  let alivePlayersIndex = [...players.keys()];
  let startingIndexOfFirstKiller = 0;
  while (alivePlayersIndex.length > 1) {
    let lastAlivePlayerIndex = alivePlayersIndex.at(-1);
    alivePlayersIndex = alivePlayersIndex.filter((_, a) => a % 2 === startingIndexOfFirstKiller);
    startingIndexOfFirstKiller = lastAlivePlayerIndex === alivePlayersIndex.at(-1) ? 1 : 0;
  }
  // Extract the winner
  const [winnerIndex] = alivePlayersIndex;
  // Return the winner name and index position
  return [players[winnerIndex], winnerIndex];
};
