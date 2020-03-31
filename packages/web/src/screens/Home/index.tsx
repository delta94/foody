/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Main,
  Title,
  Text,
  Spacer
  // @ts-ignore
} from '@foody/ui';

const Home = () => (
  <Main gutter>
    <Title title="Trouver une recette" />
    <Text>
      Envie d'une recette avec des ingrédiants en particulier ? Détéctez vos
      aliments à partir d'une photo et trouver la recette qui vous donne envi.
    </Text>
    <Spacer height={20} />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod quis
      minima optio, rem beatae sed incidunt vitae voluptates neque provident,
      praesentium quas maxime quisquam dolore corrupti repellendus, facere
      ducimus?
    </Text>
  </Main>
);

Home.path = '';

export default Home;
