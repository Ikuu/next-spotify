import React from 'react';
import { create } from 'react-test-renderer';
import Audio from '../../../components/blocks/Audio';

test('Audio renders', () => {
  const tree = create(<Audio src="www.mock.com" />).toJSON();
  expect(tree).toMatchSnapshot();
});
