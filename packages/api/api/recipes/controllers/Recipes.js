require('dotenv').config({ path: '../../.env' });

const fetch = require('cross-fetch');

module.exports = {
  recipes: async ctx => {
    try {
      // const request = await fetch(
      //   `${process.env.RECIPE_PUPPY_API_URL}?i=${ctx.params._ingredients}&p=3`
      // );
      const request = await fetch(
        `${process.env.RECIPE_PUPPY_API_URL}/search?q=${ctx.params._ingredients}&app_id=${process.env.RECIPE_APP_ID}&app_key=${process.env.RECIPE_APP_KEY}&from=0&to=10`
      );
      const { hits } = await request.json();
      const results = hits.map(item => item.recipe);

      ctx.send(results);
    } catch (error) {
      console.log(error);
      ctx.send(error);
    }
  },
};
