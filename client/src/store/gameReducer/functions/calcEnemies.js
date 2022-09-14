/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
function calcEnemies(state, arr, hero) {
  function randomFlag() {
    const arrFlag = [true, false];
    const flag = Math.floor(Math.random() * arrFlag.length);
    return arrFlag[flag];
  }
  arr.forEach((el) => {
    // if (hero.x <= el.x) {
    // let q = false;
    //   const time = 400;
    //   const distances = el.x - hero.x;
    //   const wave = 10;
    //   const waveAmount = distances / wave;
    //   const timeLoop = state.gameLoop;
    //   el.x -= 1;
    function randomNumLoop() {
      const arrr = [70, 110, 150];
      const flag = Math.floor(Math.random() * arrr.length);
      return arrr[flag];
    }
    function randomCord(heroXY) {
      const arrCord = [
        [heroXY.x, heroXY.y - heroXY.w],
        [heroXY.x + heroXY.w, heroXY.y - heroXY.w],
        [heroXY.x, heroXY.y],
        [heroXY.x - heroXY.h, heroXY.y - heroXY.w]];
      const cord = Math.floor(Math.random() * arrCord.length);
      return arrCord[cord];
    }
    if (hero.x < el.x) {
      if (el.x - hero.x < 130) {
        const cord = randomCord(state.player);
        // console.log('ближе 50 влево');
        if (el.type === 1) {
          // el.skin = '/animations/enemie0attack.gif';
        }
        if (el.type === 2) {
          el.skin = '/animations/enemie1attack.gif';
        }
        if (el.type === 3) {
          el.skin = '/animations/enemie2attack.gif';
        }
        if (cord[0] <= el.x) {
          el.x -= el.speed;
          el.move = -1;
        }
        if (cord[1] >= el.y) {
          el.y += 0.7;
        }
        if (cord[1] <= el.y) {
          el.y -= 0.7;
        }
      } else {
        if (state.gameLoop % randomNumLoop() === 0) {
          state.calcEnemiesFlag = !state.calcEnemiesFlag;
        }
        if (state.calcEnemiesFlag) {
          if (state.calcEnemiesFlag1) {
            el.y += 0.95;
            if (randomFlag()) {
              state.calcEnemiesFlag1 = !state.calcEnemiesFlag1;
            }
          } else {
            el.y -= 0.95;
            if (randomFlag()) {
              state.calcEnemiesFlag1 = !state.calcEnemiesFlag1;
            }
          }
        } else {
          if (hero.y > el.y) {
            el.y += 0.35;
          }
          if (hero.y < el.y) {
            el.y -= 0.35;
          }
        }
        if (el.x <= hero.x) {
          if (el.type === 1) {
            el.skin = '/animations/enemie0move.gif';
            el.move = 1;
            el.x += el.speed;
          }
          if (el.type === 2) {
            el.skin = '/animations/enemie1move.gif';
            el.move = 1;
            el.x += el.speed;
          }
          if (el.type === 3) {
            el.skin = '/animations/enemie2move.gif';
            el.move = -1;
            el.x += el.speed;
          }
          if (el.type === 4) {
            el.skin = '/animations/enemie3move.gif';
            el.move = 1;
            el.x += 8;
          }
        }
        if (hero.x <= el.x) {
          if (el.type === 1) {
            el.skin = '/animations/enemie0move.gif';
            el.move = -1;
            el.x -= el.speed;
          }
          if (el.type === 2) {
            el.skin = '/animations/enemie1move.gif';
            el.move = -1;
            el.x -= el.speed;
          }
          if (el.type === 3) {
            el.skin = '/animations/enemie2move.gif';
            el.move = 1;
            el.x -= el.speed;
          }
          if (el.type === 4) {
            el.skin = '/animations/enemie3move.gif';
            el.move = 1;
            el.x -= 2;
          }
        }
        // console.log('дальше 50 влево');
      }
    } else if (hero.x - el.x < 130) {
      const cord = randomCord(state.player);
      // console.log('ближе 50 вправо');
      if (el.type === 1) {
        // el.skin = '/animations/enemie0attack.gif';
        el.move = 1;
      }
      if (el.type === 2) {
        // el.skin = '/animations/enemie1attack.gif';
        el.move = 1;
      }
      if (el.type === 3) {
        // el.skin = '/animations/enemie2attack.gif';
        el.move = -1;
      }
      if (cord[0] >= el.x) {
        el.x += el.speed;
      }
      if (cord[1] >= el.y) {
        el.y += 0.7;
      }
      if (cord[1] <= el.y) {
        el.y -= 0.7;
      }
    } else {
      if (state.gameLoop % randomNumLoop() === 0) {
        state.calcEnemiesFlag = !state.calcEnemiesFlag;
      }
      if (state.calcEnemiesFlag) {
        if (state.calcEnemiesFlag1) {
          el.y += 0.95;
          if (randomFlag()) {
            state.calcEnemiesFlag1 = !state.calcEnemiesFlag1;
          }
        } else {
          el.y -= 0.95;
          if (randomFlag()) {
            state.calcEnemiesFlag1 = !state.calcEnemiesFlag1;
          }
        }
      } else {
        if (hero.y > el.y) {
          el.y += 0.35;
        }
        if (hero.y < el.y) {
          el.y -= 0.35;
        }
      }
      if (el.x <= hero.x) {
        if (el.type === 1) {
          el.skin = '/animations/enemie0move.gif';
          el.move = 1;
          el.x += el.speed;
        }
        if (el.type === 2) {
          el.skin = '/animations/enemie1move.gif';
          el.move = 1;
          el.x += el.speed;
        }
        if (el.type === 3) {
          el.skin = '/animations/enemie2move.gif';
          el.move = -1;
          el.x += el.speed;
        }
        if (el.type === 4) {
          el.skin = '/animations/enemie3move.gif';
          el.move = -1;
          el.x += 3;
        }
      }
      if (hero.x <= el.x) {
        if (el.type === 1) {
          el.skin = '/animations/enemie0attack.gif';
          el.move = -1;
          el.x -= el.speed;
        }
        if (el.type === 2) {
          el.skin = '/animations/enemie1attack.gif';
          el.move = -1;
          el.x -= el.speed;
        }
        if (el.type === 3) {
          el.skin = '/animations/enemie2attack.gif';
          el.move = 1;
          el.x -= el.speed;
        }
        if (el.type === 4) {
          el.skin = '/animations/enemie3attack.gif';
          el.move = 1;
          el.x -= 2;
        }
      }
      // console.log('дальше 50 вправо');
    }
  });
}

export default calcEnemies;
