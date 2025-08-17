import { playerMove, isWin } from "./play.js";
import startUI from "./ui.js";

// 页面一开始渲染一次
startUI();

// 游戏是否结束
let gameWin = false;
// 注册键盘按下事件
window.onkeydown = function (e) {
  if (gameWin) return;
  let result = false;
  if (e.key === "ArrowLeft") {
    result = playerMove("left");
  } else if (e.key === "ArrowRight") {
    result = playerMove("right");
  } else if (e.key === "ArrowUp") {
    result = playerMove("up");
  } else if (e.key === "ArrowDown") {
    result = playerMove("down");
  }
  // 如果下一步成功执行，则重新渲染一下界面
  if (result) {
    startUI();
    if (isWin()) {
      gameWin = true;
      console.log("游戏结束");
    }
  }
};
