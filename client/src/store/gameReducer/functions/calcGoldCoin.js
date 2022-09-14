/* eslint-disable no-param-reassign */
function calcGoldCoin(state, arr, hero) {
  arr.forEach((coin) => {
    if (
      hero.x + hero.w / 2 >= coin.x - coin.w / 2
      && hero.x - hero.w / 2 <= coin.x + coin.w / 2
      && hero.y - hero.h <= coin.y + coin.h
      && hero.y >= coin.y
    ) {
      state.game.countMoney += 15;
      arr.splice(
        arr.findIndex((el) => el.id === coin.id),
        1,
      );
    }
  });
}

export default calcGoldCoin;
