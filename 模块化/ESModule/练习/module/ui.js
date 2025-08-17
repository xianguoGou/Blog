import * as map from "./map.js";

// 拿到游戏的 div 盒子容器
const gameBox = document.getElementById("game");

// 每个元素盒子的高度
const eleBoxHeight = 45;
// 每个元素盒子的宽度
const eleBoxWidth = 45;

function setGameBox() {
  gameBox.style.width = map.colNumber * eleBoxWidth + "px";
  gameBox.style.height = map.rowNumber * eleBoxHeight + "px";
}

function setGameContent() {
  gameBox.innerHTML = "";
  for (let row = 0; row < map.rowNumber; row++) {
    for (let col = 0; col < map.colNumber; col++) {
      // 设置每个元素的内容
      setBoxContent(row, col);
    }
  }
}

function createBox(row, col) {
  const value = map.content[row][col];
  const box = document.createElement("div");
  box.className = "item";
  // 设置每个元素的位置
  box.style.left = col * eleBoxWidth + "px";
  box.style.top = row * eleBoxHeight + "px";
  //当前位置是否是正确位置
  const correct = isCorrect(row, col);
  // 渲染每个元素具体是什么
  // 如果元素是墙
  if (value === map.WALL) {
    box.classList.add("wall");
  }
  // 如果元素是玩家
  else if (value === map.PLAYER) {
    box.classList.add("player");
  }
  // 如果元素是箱子
  else if (value === map.BOX) {
    if (correct) {
      box.classList.add("correct-box");
    } else {
      box.classList.add("box");
    }
  }
  // 如果元素是空白
  else if (value === map.SPACE) {
    // 判断是否是正确位置
    if (correct) {
      box.classList.add("correct");
    } else {
      return; // 只是一个普通空白
    }
  }

  gameBox.appendChild(box);
}

/**
 * 判断该行该列是否是正确位置
 * @param {*} row
 * @param {*} col
 */
function isCorrect(row, col) {
  for (var i = 0; i < map.correct.length; i++) {
    var point = map.correct[i]; //拿到其中一个正确位置的坐标
    if (point.row === row && point.col === col) {
      return true;
    }
  }
  return false;

  // return map.correct.find(p => p.row === row && p.col === col) !== undefined;
}

function setBoxContent(row, col) {
  const value = map.content[row][col];
  // 如果是空白区域，则不渲染内容
  //   if (value === map.SPACE) {
  //     return;
  //   }
  // 否则，都应该渲染一个元素
  createBox(row, col);
}

function start() {
  // 1. 设置游戏画布的宽高
  setGameBox();
  // 2. 布局游戏画布中的内容
  setGameContent();
}

export default start;
