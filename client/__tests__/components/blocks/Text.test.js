import React from 'react';
import { create } from 'react-test-renderer';
import Text from '../../../components/blocks/Text';

test('Text renders', () => {
  const tree = create(<Text>Sample text</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
