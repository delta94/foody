require('dotenv').config({ path: '../../.env' });

const fetch = require('cross-fetch');

const {
  RECIPE_APP_ID,
  RECIPE_APP_KEY,
  RECIPE_PUPPY_API_URL
} = process.env;

module.exports = {
  recipes: async (ctx) => {
    try {
      strapi.query('search').create({
        user: ctx.params._userId,
        ingredients: ctx.params._ingredients.split(', ')
      });
      const request = await fetch(
        `${RECIPE_PUPPY_API_URL}/search?q=${ctx.params._ingredients}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}&from=0&to=10`
      );
      const { hits } = await request.json();
      const results = hits.map((item) => item.recipe);

      ctx.send(results);
    } catch (error) {
      console.log(error);
      ctx.send(error);
    }
  },
};
