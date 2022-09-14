/* eslint-disable no-param-reassign */
function calcCollisionsEnemie(state, arr, hero) {
  arr.forEach((enemie) => {
    if (
      hero.x + hero.w / 2 >= enemie.x - enemie.w / 2
      && hero.x - hero.w / 2 <= enemie.x + enemie.w / 2
      && hero.y - hero.h <= enemie.y + enemie.h
      && hero.y >= enemie.y
    ) {
      if (state.gameLoop % enemie.coolDown === 0) {
        hero.hp = +hero.hp - +enemie.damage;
        if (enemie.type === 1) {
          enemie.skin = '/animations/enemie0attack.gif'; // меняем скин врага при ударе первого типа
        }
        if (enemie.type === 2) {
          enemie.skin = '/animations/enemie1attack.gif'; // меняем скин врага при ударе второго типа
        }
        if (enemie.type === 3) {
          enemie.skin = '/animations/enemie2attack.gif'; // меняем скин врага при ударе третьего типа
        }
        if (enemie.type === 4) {
          if (enemie.x < hero.x) {
            enemie.skin = '/animations/enemie3attack.gif';
            enemie.move = -1;
          } else {
            enemie.skin = '/animations/enemie3attack.gif'; // меняем скин врага при ударе третьего типа
            enemie.move = 1;
          }
        }
      }
      // enemie.hp -= hero.damage; // PVP damage
      // hero.damagevalue += hero.damage; // counts pvp damage into GameBar !
      // if (enemie.hp <= 0) {
      //   state.enemies.splice(
      //     state.enemies.findIndex((el) => el.id === enemie.id),
      //     1,
      //   ); // enemy die
      // }
    }
  });
}

export default calcCollisionsEnemie;
