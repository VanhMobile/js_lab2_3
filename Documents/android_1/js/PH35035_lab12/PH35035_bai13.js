const players = [
  { name: "Messi", goals: 30 },
  undefined,
  { name: "Ronaldo", goals: 28 },
  { name: "Neymar", goals: 22 },
  { goals: 2 },
  { name: "Mbappé", goals: 25 },
  { name: "Pele", goals: null },
  { name: null, goals: 30 },
];

// Loại bỏ các cầu thủ không đúng quy tắc (undefined, không có tên hoặc không có số bàn thắng)
const validPlayers = players.filter(
  (player) =>
    player && player.name && player.goals !== undefined && player.goals !== null
);

// Tính tổng số bàn thắng của các cầu thủ hợp lệ
const totalGoals = validPlayers.reduce((sum, player) => sum + player.goals, 0);

// Tìm cầu thủ ghi số bàn thắng nhiều nhất
const topScorer = validPlayers.reduce((maxPlayer, player) =>
  player.goals > maxPlayer.goals ? player : maxPlayer
);

// In ra kết quả
console.log("Danh sách cầu thủ hợp lệ:", validPlayers);
console.log("Tổng số bàn thắng của các cầu thủ hợp lệ:", totalGoals);
console.log("Cầu thủ ghi số bàn thắng nhiều nhất:", topScorer);
