import React from 'react';
import { create } from 'react-test-renderer';
import Heading from '../../../components/blocks/Heading';

test('H1 Renders', () => {
  const tree = create(<Heading>Sample Text</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('H2 Renders', () => {
  const tree = create(<Heading level={2}>Sample Text</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
