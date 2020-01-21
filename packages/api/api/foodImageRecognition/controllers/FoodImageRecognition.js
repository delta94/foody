require('dotenv').config({ path: '../../.env' });

const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

module.exports = {
  clarifai: async ctx => {
    try {
      const { outputs } = await app.models.predict(
        Clarifai.FOOD_MODEL,
        ctx.params._image
      );

      ctx.send(outputs[0].data.concepts);
    } catch (error) {
      ctx.send(error);
    }
  }
};
