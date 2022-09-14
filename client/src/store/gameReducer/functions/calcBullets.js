/* eslint-disable no-param-reassign */
function calcBullets(state) {
  state.bullets.forEach((el) => {
    el.x += el.speedX;
    el.y += el.speedY;
    if (el.x >= state.player.x + 1200) {
      state.bullets.splice(el.id, 1);
    }
  });
}
export default calcBullets;
