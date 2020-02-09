import React from 'react';
import { Row } from '../../Grid/Row';
import { RecipeItem } from '../Item';

interface Props {
  data: any;
}

export const RecipeList: React.FC<Props> = ({ data }) => (
  <Row outside direction="row">
    {data.map((recipe: any, index: number) => (
      <RecipeItem key={index} recipe={recipe} />
    ))}
  </Row>
);
