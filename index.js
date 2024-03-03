const leaf = "🍃";
const maxOffset = 5; // 最大偏移量
const swaySpeed = 200; // 摇摆速度（毫秒）

function randomOffset() {
  return Math.floor(Math.random() * (maxOffset * 2 + 1)) - maxOffset;
}

function animateLeaf() {
  process.stdout.write("\x1B[2J\x1B[0f"); // 清屏
  const offset = randomOffset();
  const spaces = " ".repeat(maxOffset + offset);
  process.stdout.write(spaces + leaf + "\n");
}

setInterval(animateLeaf, swaySpeed);
