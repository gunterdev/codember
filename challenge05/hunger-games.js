// export const hungerGames = (players) => {
//   let playersl = players.length;
//   let binaryStr = "0";
//   while (playersl > 2) {
//     let binaryValue = playersl % 2 === 0 ? 0 : 1;
//     binaryStr = binaryValue + binaryValue;
//     playersl = binaryValue === 0 ? Math.ceil(playersl / 2) : Math.floor(playersl / 2);
//   }
//   let indexWinner = parseInt(binaryStr, 2);
//   return [players[indexWinner], indexWinner];
// };

export const hungerGames = (players) => {
  let p = 2 * (players.length - 2 ** Math.floor(Math.log2(players.length)));
  return [players[p], p];
};
