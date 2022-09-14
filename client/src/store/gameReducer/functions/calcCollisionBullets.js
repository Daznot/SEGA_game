/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

function calcCollisionBullets(state, arr) {
  state.bullets.forEach((bullet) => {
    arr.forEach((enemie) => {
      if (bullet.x + bullet.w / 2 >= enemie.x - enemie.w / 2
        && bullet.x - bullet.w / 2 <= enemie.x + enemie.w / 2
        && bullet.y - bullet.h <= enemie.y + enemie.h
        && bullet.y >= enemie.y) {
        if (+bullet.damage >= +enemie.hp) {
          state.game.countDamage = +state.game.countDamage + +enemie.hp;
          enemie.hp = 0;
        } else {
          state.game.countDamage = +state.game.countDamage + +bullet.damage;
          enemie.hp = +enemie.hp - +bullet.damage;
        }
        state.bullets.splice(
          arr.findIndex((el) => el.id === bullet.id),
          1,
        );
        if (enemie.hp <= 0 && enemie.type === 4) {
          enemie.skin = '/animations/enemie3deeth.gif';
        }
        if (enemie.hp <= 0) {
          if (state.player.score % 100 === 0) {
            state.player.lvl += 1;
            state.player.score += 10;
          } else {
            state.player.score += 10;
          }
          state.golds.push({
            id: uuidv4(),
            x: enemie.x,
            y: enemie.y,
            h: state.gold.h,
            w: state.gold.w,
            skin: state.gold.skin,
          });
          state.game.countEnemies += 1;
          arr.splice(
            arr.findIndex((el) => el.id === enemie.id),
            1,
          );
        }
      }
    });
  });
}

export default calcCollisionBullets;
