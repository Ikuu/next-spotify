import React from 'react';
import { create } from 'react-test-renderer';
import Mask from '../../../components/blocks/Mask';

test('Mask renders', () => {
  const tree = create(<Mask><img src="src" alt="alt" /></Mask>).toJSON();
  expect(tree).toMatchSnapshot();
});
