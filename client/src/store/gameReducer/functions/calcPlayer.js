/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import calcBulletTrajectory from './calcBulletTrajectory';

function calcPlayer(state, action) {
  if (action.payload.player.includes('d')) {
    if (state.player.x < (state.display.width - state.player.w)) {
      state.player.x += state.player.speed; // идем вправо
      if (action.payload.cordMouseOver) {
        if (action.payload.cordMouseOver[0] > state.player.x) {
          state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
          state.player.move = 1; // отзеркаливаем скин
        } else {
          state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
          state.player.move = -1; // отзеркаливаем скин
        }
      } else {
        state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
        state.player.move = -1; // отзеркаливаем скин
      }
    }
  }
  if (action.payload.player.includes('a')) {
    if (state.player.x > 0) {
      state.player.x -= state.player.speed; // идем влево
      if (action.payload.cordMouseOver) {
        if (action.payload.cordMouseOver[0] > state.player.x) {
          state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
          state.player.move = -1; // отзеркаливаем скин
        } else {
          state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
          state.player.move = 1; // отзеркаливаем скин
        }
      } else {
        state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
        state.player.move = 1; // отзеркаливаем скин
      }
    }
  }
  if (action.payload.player.includes('w')) {
    if (state.player.y > 300) {
      state.player.y -= state.player.speed; // идем вверх
      state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
      state.player.move = 1; // отзеркаливаем скин
    }
  }
  if (action.payload.player.includes('s')) {
    if (state.player.y < (state.display.height - state.player.h)) {
      state.player.y += state.player.speed; // идем вниз
      state.player.skin = '/animations/hero1move.gif'; // меняем скин при ходьбе
      state.player.move = -1; // отзеркаливаем скин
    }
  }
  if (action.payload.player.includes('stop')) {
    if (action.payload.cordMouseOver) {
      if (action.payload.cordMouseOver[0] > state.player.x) {
        state.player.skin = '/animations/hero2.gif';
        state.player.move = 1;
      } else {
        state.player.skin = '/animations/hero2.gif';
        state.player.move = -1;
      }
    }
  }
  // if (action.payload.cordMouseOver) {
  //   console.log(action.payload.cordMouseOver[0]);
  // }

  if (action.payload.mouseCord.length > 0) {
    if (action.payload.mouseCord[0] > state.player.x) {
      state.player.skin = '/animations/hero2.gif';
      state.player.move = 1;
    } else {
      state.player.skin = '/animations/hero2.gif';
      state.player.move = -1;
    }
    const [speedX, speedY, g] = calcBulletTrajectory(state, action); // скорость пуль по Х и У
    state.bullets.push({
      id: uuidv4(), // айди пули
      x: state.player.x + state.player.w / 2, // координата хиро по Х
      y: state.player.y - state.player.h / 2, // координата хиро по У
      w: 12, // ширина пули
      h: 3, // высота пули
      speedX, // скорость пуль по Х
      speedY, // скорость пуль по У
      damage: state.player.damage, // нанисенный урон
      corner: g,
    });
  }
  if (action.payload.player.includes('enemy')) { // рожаем врагов
    if (state.game.countWaves === 1 && state.gamePlay.waves1Count < state.gamePlay.waves1) {
      const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
      if (randomNum < 6) {
        state.gamePlay.waves1Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies1.type, // тип врага
          x: state.display.width + 50,
          y: Math.floor(Math.random() * (300 - 100)) + 100, // вертикаль
          w: state.enemies1.w, // высота
          h: state.enemies1.h, // ширина
          hp: +state.enemies1.hp, // здоровьее
          speed: state.enemies1.speed, // скорость перемещения
          damage: state.enemies1.damage, // урон
          coolDown: state.enemies1.coolDown, // скорость удара
          skin: '/animations/enemie0move.gif',
          move: 1,
        });
      } else {
        state.gamePlay.waves1Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies1.type, // тип врага
          x: -60, // горизонталь
          y: Math.floor(Math.random() * (300 - 100)) + 100, // вертикаль
          w: state.enemies1.w, // высота
          h: state.enemies1.h, // ширина
          hp: +state.enemies1.hp, // здоровьее
          speed: state.enemies1.speed, // скорость перемещения
          damage: state.enemies1.damage, // урон
          coolDown: state.enemies1.coolDown, // скорость удара
          skin: '/animations/enemie0move.gif',
          move: -1,
        });
      }
    }
    // console.log(state.gamePlay.waves2Count);
    // console.log(state.gamePlay.waves2);
    if (state.game.countWaves === 2 && state.gamePlay.waves2Count < state.gamePlay.waves2) {
      const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
      if (randomNum < 6) {
        state.gamePlay.waves2Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies2.type, // тип врага
          x: -50,
          y: Math.floor(Math.random() * (300 - 100)) + 100, // вертикаль
          // y: 300,
          w: state.enemies2.w, // высота
          h: state.enemies2.h, // ширина
          hp: +state.enemies2.hp, // здоровьее
          speed: state.enemies2.speed, // скорость перемещения
          damage: state.enemies2.damage, // урон
          coolDown: state.enemies2.coolDown, // скорость удара
          skin: '/animations/enemie1move.gif',
          move: -1,
        });
      } else {
        state.gamePlay.waves2Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies2.type, // тип врага
          w: state.enemies2.w, // высота
          h: state.enemies2.h, // ширина
          x: state.display.width + 50, // горизонталь
          y: Math.floor(Math.random() * (300 - 100)) + 100, // вертикаль
          // y: 200,
          hp: +state.enemies2.hp, // здоровьее
          speed: state.enemies2.speed, // скорость перемещения
          damage: state.enemies2.damage, // урон
          coolDown: state.enemies2.coolDown, // скорость удара
          skin: '/animations/enemie1move.gif',
          move: 1,
        });
      }
    }
    if (state.game.countWaves === 3 && state.gamePlay.waves3Count < state.gamePlay.waves3) {
      const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
      if (randomNum < 6) {
        state.gamePlay.waves3Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies3.type, // тип врага
          x: state.display.width + 50,
          y: Math.floor(Math.random() * (300 - 100)) + 100, // вертикаль
          w: state.enemies3.w, // высота
          h: state.enemies3.h, // ширина
          hp: +state.enemies3.hp, // здоровьее
          speed: state.enemies3.speed, // скорость перемещения
          damage: state.enemies3.damage, // урон
          coolDown: state.enemies3.coolDown, // скорость удара
          skin: '/animations/enemie2move.gif',
          move: 1,
        });
      } else {
        state.gamePlay.waves3Count += 1;
        state.enemies.push({
          id: uuidv4(),
          type: state.enemies3.type, // тип врага
          x: -60, // горизонталь
          y: Math.floor(Math.random() * (300 - 100)) + 50, // вертикаль
          w: state.enemies3.w, // высота
          h: state.enemies3.h, // ширина
          hp: +state.enemies3.hp, // здоровьее
          speed: state.enemies3.speed, // скорость перемещения
          damage: state.enemies3.damage, // урон
          coolDown: state.enemies3.coolDown, // скорость удара
          skin: '/animations/enemie2move.gif',
          move: -1,
        });
      }
    }
    if (state.game.countWaves === 3 && state.game.countEnemies
      === state.gamePlay.waves3 + state.gamePlay.waves2 + state.gamePlay.waves1
      && state.gamePlay.bossCount < state.gamePlay.boss) {
      state.gamePlay.bossCount += 1;
      state.enemies.push({
        id: uuidv4(),
        type: 4,
        x: -50,
        y: 100, // вертикаль
        w: state.enemies4.w, // высота
        h: state.enemies4.h, // ширина
        hp: state.enemies4.hp, // здоровьее
        speed: state.enemies4.speed, // скорость перемещения
        damage: state.enemies4.damage, // урон
        coolDown: state.enemies4.coolDown, // скорость удара
        skin: '/animations/enemie3move.gif',
        move: 1,
      });
    }
  }
}
export default calcPlayer;
