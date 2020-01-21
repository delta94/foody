require('dotenv').config({ path: '../../.env' });

const fetch = require('cross-fetch');

module.exports = {
  recipes: async ctx => {
    try {
      const request = await fetch(
        `${process.env.RECIPE_PUPPY_API_URL}?i=${ctx.params._ingredients}&p=3`
      );
      const { results } = await request.json();

      ctx.send(results);
    } catch (error) {
      console.log(error);
      ctx.send(error);
    }
  }
};
