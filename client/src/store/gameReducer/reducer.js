/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import calcPlayer from './functions/calcPlayer';
import calcBullets from './functions/calcBullets';
import calcEnemies from './functions/calcEnemies';
import calcCollisionsEnemie from './functions/calcCollisionsEnemie';
import calcCollisionBullets from './functions/calcCollisionBullets';
import upGameLoop from './functions/upGameLoop';
import calcGoldCoin from './functions/calcGoldCoin';

export const sendScoreLvl = createAsyncThunk(
  '/api/hero/scoreLvl',
  async (lvlAndScore, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/scoreLvl', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lvl: lvlAndScore.lvl,
          score: lvlAndScore.score,
        }),
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getPlayer = createAsyncThunk(
  '/api/hero/getPlayer',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/getPlayer', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await responce.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateHeroHp = createAsyncThunk(
  '/api/hero/updateHp',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/updateHp', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateHeroDamage = createAsyncThunk(
  '/api/hero/updateDamage',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/updateDamage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateHeroSpeed = createAsyncThunk(
  '/api/hero/updateSpeed',
  async (speed, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/updateSpeed', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          speed,
        }),
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const sendStatistic = createAsyncThunk(
  '/api/statistics/',
  async (statGame, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/statistics/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          countEnemies: statGame.countEnemies,
          countDamage: statGame.countDamage,
          countWaves: statGame.countWaves,
          timeGame: statGame.timeGame,
          countMoney: statGame.countMoney,
        }),
        credentials: 'include',
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userAllStats = createAsyncThunk(
  '/api/statistics',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/statistics', {
        method: 'GET',
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userOneStats = createAsyncThunk(
  '/api/statistics/:id',
  async (payload, { rejectWithValue }) => {
    const { event, id } = payload;
    try {
      const responce = await fetch(`/api/statistics/${id}`, {
        method: 'GET',
      });
      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const heroOneStats = createAsyncThunk(
  'heroOneStats',
  async (event, { rejectWithValue }) => {
    try {
      const responce = await fetch('/api/hero/getPlayer', {
        method: 'GET',
      });

      const data = await responce.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    startHp: 0,
    gamePlay: {
      waves1: 7, // кол-во мобов
      waves1Count: 0,
      waves2: 7, // кол-во мобов
      waves2Count: 0,
      waves3: 7, // кол-во мобов
      waves3Count: 0,
      boss: 1,
      bossCount: 0,
    },
    player: {
      // Client only
      x: 0, // горизонталь
      y: 500, // вертикаль
      w: 180, // высота
      h: 180, // ширина
      skin: '/animations/hero1.gif',
      move: 1,
      weapon: ['trunk'],
      ammunition: [
        {
          // боезапас
          trunk: 0,
        },
      ],
    },
    statistic: [],
    oneStatistic: [],
    heroStats: [],
    enemies: [], // массив врагов
    enemies1: {
      type: 1,
      w: 120, // высота
      h: 120, // ширина
      x: 500, // горизонталь
      y: 300, // вертикаль
      hp: 100, // здоровье
      speed: 3, // скорость
      damage: 1, // урон
      coolDown: 30, // скорость удара
      skin: '/animations/enemie0move.gif',
      move: 1,
    },
    enemies2: {
      type: 2,
      w: 180, // высота
      h: 180, // ширина
      x: 600, // горизонталь
      y: 45, // вертикаль
      hp: 80, // здоровье
      speed: 4, // скорость
      damage: 0.8, // урон
      coolDown: 30, // скорость удара
      skin: '/animations/enemie1move.gif',
      move: 1,
    },
    enemies3: {
      type: 3,
      w: 200, // высота
      h: 200, // ширина
      x: 600, // горизонталь
      y: 30, // вертикаль
      hp: 140, // здоровье
      speed: 4,
      damage: 0.5, // урон
      coolDown: 30, // скорость удара
      skin: '/animations/enemie2move.gif',
      move: 1,
    },
    enemies4: {
      type: 4,
      w: 350, // высота
      h: 350, // ширина
      x: 400, // горизонталь
      y: 50, // вертикаль
      hp: 1000, // здоровье
      speed: 1,
      damage: 1, // урон
      coolDown: 40, // скорость удара
      skin: '/animations/enemie3move.gif',
      move: 1,
    },
    weapon: {
      // НЕ ИСПОЛЬЗУЕТСЯ
      name: 'trunk', // название
      damage: 20, // урон
      clip: 30, // обойма
      rateOfFire: 0.5, // скорострельность
      recharge: 1500, // время перезарядки
    },
    gold: {
      id: 1,
      x: 50,
      y: 70,
      h: 50,
      w: 50,
      skin: '/animations/gold.gif',
    },
    golds: [],
    bullets: [], // массив в который мы пушим пули
    game: {
      // объект для сбора статистики за игру
      countEnemies: 0,
      countMoney: 0,
      countDamage: 0,
      timeGame: 0,
      countWaves: 1,
    },
    gameLoop: 0, // игровой цик
    display: {
      // размеры экрана юзера
      width: 0,
      height: 0,
    },
    backgroundPositionLeft: 0, // начальные координаты локации
    calcEnemiesFlag: false, // ии врагов
    calcEnemiesFlag1: false, // ии врагов
    column: {
      x: 600,
      y: 200,
      h: 300,
      w: 300,
      skin: '/img/column1.png',
    },
  },
  reducers: {
    sendStartHp(state) {
      state.startHp = state.player.hp;
    },
    deleteAllGolds(state, action) {
      state.golds = [];
    },
    deleteAllEnemies(state, action) {
      state.enemies = [];
    },
    // логика движения игрока при смены локации чтобы он проходил в ворота
    updatePositionPlayer(state, action) {
      if (state.player.y < 450) {
        if (state.player.y !== 450) {
          state.player.y += 5;
        }
      } else if (state.player.y !== 600) {
        state.player.y -= 5;
      }
    },
    // передвигаем бэкграунд при прохождении первой волны
    updateBackgroundWaves2(state, action) {
      if (state.backgroundPositionLeft > -2800) {
        state.backgroundPositionLeft -= 10;
        state.column.x -= 10;
      }
    },
    // передвигаем бэкграунд при прохождении второй волны
    updateBackgroundWaves3(state, action) {
      if (state.backgroundPositionLeft > -5800) {
        state.backgroundPositionLeft -= 10;
      }
    },
    // увеличиваем характеристики врагов
    updateEnemies(state, action) {
      state.enemies.forEach((el) => {
        el.hp = +el.hp * 1.2;
        el.damage = +el.damage * 1.2;
        el.coolDown = +el.coolDown * 1.2;
      });
    },
    // записываем координаты экрана юзера
    display(state, action) {
      state.display.height = action.payload.height;
      state.display.width = action.payload.width;
    },
    // обновляем игроавую волну
    updateWaves(state, action) {
      state.game.countWaves += 1;
    },
    updateFrame(state, action) {
      upGameLoop(state); // прибовляет 1 каждый цикл;
      calcEnemies(state, state.enemies, state.player); // рассчитывает поведение мобов
      calcPlayer(state, action); // рассчитывает функционал героя, внутри скорость пуль по Х и У
      calcBullets(state); // рассчитыввает длинну полета пули
      calcCollisionsEnemie(state, state.enemies, state.player); // рассчит контакт героя и моба
      calcCollisionBullets(state, state.enemies); // рассчитывает контакт моба и пули
      calcGoldCoin(state, state.golds, state.player);
    },
  },
  extraReducers: {
    [getPlayer.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getPlayer.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.player = { ...state.player, ...action.payload.player };
      state.startHp = action.payload.player.hp;
    },
    [updateHeroHp.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [updateHeroHp.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.player.hp = action.payload.hp;
    },
    [updateHeroDamage.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [updateHeroDamage.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.player.damage = action.payload.damage;
    },
    [updateHeroSpeed.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [updateHeroSpeed.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.player.speed = action.payload.speed;
    },
    [userAllStats.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [userAllStats.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.statistic = action.payload.statistics;
    },
    [userOneStats.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [userOneStats.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.oneStatistic = action.payload.statistics;
    },
    [heroOneStats.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [heroOneStats.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.heroStats = action.payload.player;
    },
  },
});

export const {
  sendStartHp,
  display,
  updateFrame,
  updateWaves,
  updateEnemies,
  updateBackgroundWaves2,
  updateBackgroundWaves3,
  updatePositionPlayer,
  deleteAllEnemies,
  deleteAllGolds,
} = gameSlice.actions;

export default gameSlice.reducer;
