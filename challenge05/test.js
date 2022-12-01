export const battleRoyaleGunter = (players) => {
  let p = parseInt(players.length.toString(2).substring(1) + "0", 2);
  return [players[p], p];
};

const battleRoyaleUsingMaths = (participants) => {
  const winnerIdx = 2 * (participants.length - 2 ** Math.floor(Math.log2(participants.length)));
  return [participants[winnerIdx], winnerIdx];
};

const battleRoyaleUsingMathsGunter = (participants) => {
  const l = participants.length;
  const winnerIdx = (l << 1) ^ (2 ** Math.ceil(Math.log2(l)));
  return [participants[winnerIdx], winnerIdx];
};
