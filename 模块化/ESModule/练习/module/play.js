import * as map from "./map.js";
// 玩家移动到下一步
export function playerMove(direction) {
  const playerPoint = getPlayerPoint();
  // 得到玩家下一步信息
  const nextInfo = getNextInfo(playerPoint.row, playerPoint.col, direction);
  console.log(playerPoint, nextInfo);

  // 什么情况下不能移动
  if (nextInfo.value === map.WALL) {
    // 下一个位置是墙
    return false; // 如果是墙则不能移动
  }
  // 能移动
  if (nextInfo.value === map.SPACE) {
    // 下一个位置是空白
    exchange(playerPoint, nextInfo);
    return true;
  } else {
    // 下一个位置是箱子
    // 获取箱子的下一个位置
    const nextNextInfo = getNextInfo(nextInfo.row, nextInfo.col, direction);
    // 如果箱子的下一个位置是空白
    if (nextNextInfo.value === map.SPACE) {
      // 先把箱子和箱子下一个位置交换
      exchange(nextInfo, nextNextInfo);
      // 再把玩家和箱子交换
      exchange(playerPoint, nextInfo);
      return true;
    } else {
      return false;
    }
  }
}

// 移动位置（交换位置）
function exchange(playerPoint, nextInfo) {
  let temp = map.content[playerPoint.row][playerPoint.col];
  map.content[playerPoint.row][playerPoint.col] =
    map.content[nextInfo.row][nextInfo.col];
  map.content[nextInfo.row][nextInfo.col] = temp;
}

// 得到玩家信息
function getPlayerPoint() {
  for (let row = 0; row < map.rowNumber; row++) {
    for (let col = 0; col < map.colNumber; col++) {
      if (map.content[row][col] === map.PLAYER) {
        return {
          row,
          col,
        };
      }
    }
  }
  throw new Error("地图上没有玩家");
}

// 得到玩家下一步的位置信息，包括 row、col、value
function getNextInfo(row, col, direction) {
  if (direction === "left") {
    return {
      col: col - 1,
      row,
      value: map.content[row][col - 1],
    };
  } else if (direction === "right") {
    return {
      col: col + 1,
      row,
      value: map.content[row][col + 1],
    };
  } else if (direction === "up") {
    return {
      col,
      row: row - 1,
      value: map.content[row - 1][col],
    };
  } else if (direction === "down") {
    return {
      col,
      row: row + 1,
      value: map.content[row + 1][col],
    };
  } else {
    return {
      col: null,
      row: null,
      value: 0,
    };
  }
}

// 游戏是否结束（判断箱子是否全部在正确的位置上
export function isWin() {
  for (let i = 0; i < map.correct.length; i++) {
    const point = map.correct[i];
    if (map.content[point.row][point.col] !== map.BOX) {
      // 该正确位置上没有箱子
      return false;
    }
  }
  return true;
}
