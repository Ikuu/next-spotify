import React from 'react';
import { create } from 'react-test-renderer';
import Figure from '../../../components/blocks/Figure';

test('Figure renders', () => {
  const tree = create(<Figure caption="Test"><img src="www.test.com" alt="alt" /></Figure>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Figure doesnt renders', () => {
  const tree = create(<Figure caption="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

